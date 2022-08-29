const columnDefs = [
  { field: "email", headerName: 'Email ID', cellRenderer: function (params) {return '<a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#editUserModal">'+params.value+'</a>' }, cellClass: ['clsAnchor'] },
  { field: "firstname", headerName: 'First Name'  },
  { field: "lastname", headerName: 'Last Name'  },
  { field: "contactnumber", headerName: 'Contact Number'  },
  { field: "department", headerName: 'Department'  },
  { field: "sttus", headerName: 'Status'  }
];

// specify the data
const rowData = [
  { email: "hansie.cronje@ttl.com", firstname: "Hansie", lastname: "Cronje", contactnumber: "+1 (773) 404-2827", department: "Administration", status: "Active"},
  { email: "alan.shore@ttl.com", firstname: "Alan", lastname: "Shore", contactnumber: "+1 (773) 404-2827", department: "Admin", status: "Active"},
  { email: "ray.redington@ttl.com", firstname: "Ray", lastname: "Redington", contactnumber: "+1 (773) 404-2827", department: "Administration", status: "Active"},
  { email: "hansie.cronje@ttl.com", firstname: "Hansie", lastname: "Cronje", contactnumber: "+1 (773) 404-2827", department: "Finance", status: "Active"},
  { email: "alan.shore@ttl.com", firstname: "Alan", lastname: "Shore", contactnumber: "+1 (773) 404-2827", department: "Finance", status: "Invited <a href='#'> Resend </a>"},
  { email: "ray.redington@ttl.com", firstname: "Ray", lastname: "Redington", contactnumber: "+1 (773) 404-2827", department: "Maintenance", status: "Inactive"}
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