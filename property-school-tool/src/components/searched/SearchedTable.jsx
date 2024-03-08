import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableParent } from "../../utils/muiStyles/tablesStyles";
import { Typography } from "@mui/material";
import { dataAction } from "../../store/actions";
import { useDispatch } from "react-redux";

const SearchedTable = ({ data, staticData }) => {
  const dispatch = useDispatch();

  const handleChecked = (id) => {
    const tempData = JSON.parse(JSON.stringify(staticData));
    const index = tempData.findIndex((value) => value?.id === id);
    tempData[index].checked = !tempData[index].checked;
    dispatch(dataAction(tempData));
  };

  return (
    <>
      <Typography variant="body1" mt={2}>
        Search properties
      </Typography>
      <TableParent component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Address</TableCell>
              <TableCell align="center">Postcode</TableCell>
              <TableCell align="center">Property type</TableCell>
              <TableCell align="center">Number of rooms</TableCell>
              <TableCell align="center">Floor area (m^2)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <input
                    type="checkbox"
                    checked={row?.checked}
                    onChange={() => handleChecked(row?.id)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row?.address}
                </TableCell>
                <TableCell align="center">{row?.postcode}</TableCell>
                <TableCell align="center">{row?.property}</TableCell>
                <TableCell align="center">{row?.rooms}</TableCell>
                <TableCell align="center">{row?.area}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableParent>
    </>
  );
};
export default SearchedTable;

// onChange={() => onPropertySelect(property.id)}
