import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableParent } from "../../utils/muiStyles/tablesStyles";
import { Typography } from "@mui/material";

const SelectedTable = ({ data }) => {
  return (
    <>
      <Typography variant="body1">Selected properties</Typography>
      <TableParent component={Paper}>
        <Table sx={{ minWidth: 620 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell align="center">Postcode</TableCell>
              <TableCell align="center">Number of rooms</TableCell>
              <TableCell align="center">Floor area (m^2)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.address}
                </TableCell>
                <TableCell align="center">{row?.postcode}</TableCell>
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
export default SelectedTable;
