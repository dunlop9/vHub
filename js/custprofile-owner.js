const columnDefs = [
  { field: "equipment", headerName: 'Equipment Type'},
  { field: "fee", headerName: 'Owner Service Fee'  },
];

// specify the data
const rowData = [
  { equipment: "Dry Van", fee: "CAD $1.50"},
  { equipment: "Plate Dry Van", fee: "CAD $1.50"},
  { equipment: "Storage Van", fee: "CAD $1.50"},
  { equipment: "Reefer", fee: "CAD $1.50"},
  { equipment: "Heated Van", fee: "CAD $1.50"},
  { equipment: "Flatbed", fee: "CAD $1.50"},
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
	gridOptions.api.sizeColumnsToFit();
});