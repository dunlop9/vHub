const columnDefs = [
  { field: "role", headerName: 'Role', cellRenderer: function (params) {return '<a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#permissionsModal">'+params.value+'</a>' }, cellClass: ['clsAnchor'] },
  { field: "permissions", headerName: 'Permissions'  },
  { field: "createdby", headerName: 'Created By'  },
  { field: "createdon", headerName: 'Created On'  },
  { field: "lastupdby", headerName: 'Last Updated By'  },
  { field: "lastupdon", headerName: 'Last Updated On'  }
];

// specify the data
const rowData = [
  { role: "Administrator", permissions: "0", createdby: "Feroz", createdon: "01/12/2021", lastupdby: "Feroz", lastupdon: "01/12/2022"},
  { role: "Admin", permissions: "3", createdby: "Feroz", createdon: "01/12/2021", lastupdby: "Feroz", lastupdon: "01/12/2022"},
  { role: "End User", permissions: "10", createdby: "Feroz", createdon: "01/12/2021", lastupdby: "Feroz", lastupdon: "01/12/2022"},
  { role: "Finance", permissions: "12", createdby: "Feroz", createdon: "01/12/2021", lastupdby: "Feroz", lastupdon: "01/12/2022"},
  { role: "Admin", permissions: "7", createdby: "Feroz", createdon: "01/12/2021", lastupdby: "Feroz", lastupdon: "01/12/2022"},
  { role: "Finance", permissions: "5", createdby: "Feroz", createdon: "01/12/2021", lastupdby: "Feroz", lastupdon: "01/12/2022"}

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