const columnDefs = [
  { field: "orgname", headerName: 'Organization Name'},
  { field: "reason", headerName: 'Reason'  },
  { field: "blockedby", headerName: 'Blocked By'  },
  { field: "blockedon", headerName: 'Blocked On'  },
  { field: "status", headerName: 'Status', cellClass: ['blockedStatus'] }
];

// specify the data
const rowData = [
  { orgname: "ATLF Transportation", reason: "Did not pay for the damaged trailer", blockedby: "James Tartly", blockedon: "13/12/21", status: "Blocked"},
  { orgname: "TML Transportation", reason: "Did not pay for the damaged trailer", blockedby: "Carol Finebird", blockedon: "13/12/21", status: "Blocked"},
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