const columnDefs = [
  { field: "driver", headerName: 'Driver Name', cellRenderer: function (params) {return '<a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#editDriverModal">'+params.value+'</a>' }, cellClass: ['clsAnchor'] },
  { field: "contact", headerName: 'Contact Number'  },
  { field: "email", headerName: 'Email'  },
  { field: "lastuptdby", headerName: 'Last Updated By'  },
  { field: "lastuptdon", headerName: 'Last Updated on'  },
  { field: "status", headerName: 'Status', cellClass: ['clsBolderText']  }
];

// specify the data
const rowData = [
  { driver: "Wiggle Wine", contact: "+1(773) 404-2827", email: "wigglewine@gmail.com", lastuptdby: "Feroz", lastuptdon: "01/08/2022", status:"Active" },
  { driver: "John Doe", contact: "+1(773) 404-2827", email: "johndoe@gmail.com", lastuptdby: "Feroz", lastuptdon: "01/08/2022", status:"Active" },
  { driver: "Wiggle Wine", contact: "+1(773) 404-2827", email: "wigglewine@gmail.com", lastuptdby: "Feroz", lastuptdon: "01/08/2022", status:"Active" },
  { driver: "John Doe", contact: "+1(773) 404-2827", email: "johndoe@gmail.com", lastuptdby: "Feroz", lastuptdon: "01/08/2022", status:"Active" },
  { driver: "Wiggle Wine", contact: "+1(773) 404-2827", email: "wigglewine@gmail.com", lastuptdby: "Feroz", lastuptdon: "01/08/2022", status:"Active" },
  { driver: "John Doe", contact: "+1(773) 404-2827", email: "johndoe@gmail.com", lastuptdby: "Feroz", lastuptdon: "01/08/2022", status:"Active" },
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