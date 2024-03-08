import { Box, TableContainer, styled } from "@mui/material";

export const TableStyles = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "auto",
  padding:theme.spacing(3),
  width: 1100,
  margin: "auto",
}));

export const TableParent = styled(TableContainer)(({ theme }) => ({
  "& .MuiTable-root": {
    margin: `${theme.spacing(1)} 0`,
  },
  "& .MuiTableHead-root": {
    backgroundColor: theme.palette.grey[500],
  },
  "& .MuiTableCell-head": {
    fontWeight: "bold",
    padding: 8,
  },
  "& .MuiTableBody-root": {
    backgroundColor: theme.palette.grey[100],
  },
}));

export const SearchField = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
}));

export const ListStyles = styled(Box)(() => ({
  display: "flex",
  gap: 70,
  alignItems: "center",
  alignContent: "center",
}));



