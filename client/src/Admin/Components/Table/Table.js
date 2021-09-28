import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "name",
    headerName: "Full Name",
    width: 150,
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
    editable: true,
  },
  {
    field: "contact",
    headerName: "Contact Number",
    width: 200,
    editable: true,
  },
  {
    field: "vehicle",
    headerName: "Vehicle",
    sortable: true,
    width: 160,
  },

  {
    field: "vehicleNo",
    headerName: "Vehicle Number",
    sortable: true,
    width: 200,
  },
  {
    field: "arrivalTime",
    headerName: "Arrival Time",
    sortable: true,
    width: 200,
  },
];

export default function DataGridDemo({ data }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
