const columnDefs = [
  { field: "parkinglot", headerName: 'Parking Lot Name', cellRenderer: function (params) {return '<a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#editParkingModal">'+params.value+'</a>' }, cellClass: ['clsAnchor'] },
  { field: "location", headerName: 'Location'  },
  { field: "contact", headerName: 'Contact Number'  },
  { field: "email", headerName: 'Email'  },
  { field: "accesstime", headerName: '24 Hours Access'  },
  { field: "parkingcost", headerName: 'Parking Rates', cellRenderer: function (params) {return '<a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#parkingRatesModal">'+params.value+'</a>' }, cellClass: ['clsAnchor']  },
  { field: "accessinstructions", headerName: 'Access Instructions', cellRenderer: function (params) {return '<a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#parkingInstructionsModal">'+params.value+'</a>' }, cellClass: ['clsAnchor'] },
  { field: "status", headerName: 'Status', cellClass: ['clsBolderText']  }
];

// specify the data
const rowData = [
  { parkinglot: "Wiggle Wine", location:"1060W Addison St, Chicago, IL 60613,US", contact: "+1(773) 404-2827", email: "wigglewine@gmail.com", accesstime: "yes", parkingcost: "View", accessinstructions: "View Instructions", status:"Active" },
  { parkinglot: "Wiggle Wine", location:"1060W Addison St, Chicago, IL 60613,US", contact: "+1(773) 404-2827", email: "wigglewine@gmail.com", accesstime: "yes", parkingcost: "View", accessinstructions: "View Instructions", status:"Active" },
  { parkinglot: "Wiggle Wine", location:"1060W Addison St, Chicago, IL 60613,US", contact: "+1(773) 404-2827", email: "wigglewine@gmail.com", accesstime: "yes", parkingcost: "View", accessinstructions: "View Instructions", status:"Active" },
  { parkinglot: "Wiggle Wine", location:"1060W Addison St, Chicago, IL 60613,US", contact: "+1(773) 404-2827", email: "wigglewine@gmail.com", accesstime: "yes", parkingcost: "View", accessinstructions: "View Instructions", status:"Active" },
  { parkinglot: "Wiggle Wine", location:"1060W Addison St, Chicago, IL 60613,US", contact: "+1(773) 404-2827", email: "wigglewine@gmail.com", accesstime: "yes", parkingcost: "View", accessinstructions: "View Instructions", status:"Active" },
  { parkinglot: "Wiggle Wine", location:"1060W Addison St, Chicago, IL 60613,US", contact: "+1(773) 404-2827", email: "wigglewine@gmail.com", accesstime: "yes", parkingcost: "View", accessinstructions: "View Instructions", status:"Active" },
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