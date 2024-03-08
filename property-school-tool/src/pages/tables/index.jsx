import { Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import { SearchedTable, SelectedTable } from "../../components";
import {
  ListStyles,
  SearchField,
  TableStyles,
} from "../../utils/muiStyles/tablesStyles";
import { useSelector } from "react-redux";
import { useState } from "react";

const TablesParent = () => {
  const [searchedDta, setSearchedData] = useState("");
  const [propertyFilter, setPropertyFilter] = useState("");
  const { data } = useSelector((state) => state.tablesReducer);

  const handleSearch = (e) => {
    e?.preventDefault();
    setSearchedData(e?.target?.elements?.search?.value);
  };

  const handleProperty = (property) => {
    setPropertyFilter(property);
  };

  const uniqueData = [
    ...new Set(
      data?.map((result) => {
        return result?.property;
      })
    ),
  ];

  const filteredData = data?.filter((result) => {
    const matchesSearchTerm = result?.address?.includes(searchedDta);
    const matchesFilter =
      propertyFilter === "" || result?.property === propertyFilter;
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <>
      <TableStyles>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#f4f5f9",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            gap: 25,
          }}
        >
          <Box sx={{ backgroundColor: "#ffdb43", padding: "25px" }}>IMMO</Box>
          <Typography variant="body1">Property search tool</Typography>
        </Box>

        <Box>
          <form onSubmit={handleSearch}>
            <SearchField>
              <Box
                sx={{
                  width: 600,
                  maxWidth: "100%",
                  mb: 2,
                  mt: 2,
                }}
              >
                <Typography variant="body1">Search</Typography>

                <TextField
                  fullWidth
                  name="search"
                  sx={{ mt: 2 }}
                  InputProps={{ style: { fontWeight: "normal" } }}
                />
              </Box>
              <Button
                type="submit"
                size="large"
                sx={{
                  width: "17%",
                  backgroundColor: "#ffdb43",
                  mt: 6,
                  p: "12px",
                }}
              >
                Search
              </Button>
            </SearchField>
          </form>

          {data?.some((result) => result?.checked) && (
            <SelectedTable data={data?.filter((res) => res?.checked)} />
          )}

          <ListStyles>
            <Box>
              <Typography variant="body1" mb={1}>
                Property types
              </Typography>
              <Tabs
                defaultValue={0}
                orientation="vertical"
                sx={{ backgroundColor: "#f4f5f9" }}
              >
                <Tab
                  sx={{
                    fontSize: "14px",
                    bgcolor: propertyFilter === "" ? "#A0A0A0" : "transparent",
                    color: propertyFilter === "" ? "black" : "inherit",
                    "&:hover": {
                      backgroundColor: "grey",
                      color: "white",
                    },
                  }}
                  label="All"
                  onClick={() => handleProperty("")}
                />
                {uniqueData?.map((result, index) => (
                  <Tab
                    sx={{
                      fontSize: "14px",
                      bgcolor:
                        propertyFilter === result ? "lightgrey" : "transparent",
                      color: result === index ? "black" : "inherit",
                      "&:hover": {
                        backgroundColor: "grey",
                        color: "white",
                      },
                    }}
                    key={result?.id}
                    label={result}
                    onClick={() => handleProperty(result)}
                  />
                ))}
              </Tabs>
            </Box>

            <Box>
              <SearchedTable data={filteredData} staticData={data} />
            </Box>
          </ListStyles>
        </Box>
      </TableStyles>
    </>
  );
};

export default TablesParent;
