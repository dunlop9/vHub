const columnDefs = [
  { field: "type", headerName: 'Equipment Type'},
  { field: "dailyrate", headerName: 'Daily Rate'  },
  { field: "distancerate", headerName: 'Distance Rate'  },
  { field: "enginerate", headerName: 'Engine Rate'  }
];

// specify the data
const rowData = [
  { type: "Dry Van", dailyrate: "CAD $20", distancerate: "CAD $0.05", enginerate: "CAD $1.50"},
  { type: "Plate Dry Van", dailyrate: "CAD $20", distancerate: "CAD $0.05", enginerate: "CAD $1.50"},
  { type: "Storage Van", dailyrate: "CAD $20", distancerate: "CAD $0.05", enginerate: "CAD $1.50"},
  { type: "Reefer", dailyrate: "CAD $20", distancerate: "CAD $0.05", enginerate: "CAD $1.50"},
  { type: "Heated Van", dailyrate: "CAD $20", distancerate: "CAD $0.05", enginerate: "CAD $1.50"},
  { type: "Flatbed", dailyrate: "CAD $20", distancerate: "CAD $0.05", enginerate: "CAD $1.50"}
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