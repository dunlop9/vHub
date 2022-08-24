const columnDefs = [
  { field: "org", headerName: 'Organization', cellRenderer: function (params) {return '<a href="org-general.html" class="text-decoration-none" >'+params.value+'</a>' }, cellClass: ['clsAnchor'] },
  { field: "orgType", headerName: 'Organization Type'  },
  { field: "apprStatus", headerName: 'Approval Status'  },
  { field: "city", headerName: 'City'  },
  { field: "state", headerName: 'Province/State'  },
  { field: "country", headerName: 'Country'  },
  { field: "status", headerName: 'Status', cellClass: ['clsBolderText']  }
];

// specify the data
const rowData = [
  { org: "vHub", orgType: "Root Organization", apprStatus: "Approved", city: "Montreal", state: "Quebec", country: "Canada", status:"Active" },
  { org: "Ace Clouds", orgType: "Owner & Renter", apprStatus: "Approved", city: "San Jose", state: "California", country: "US", status:"Active" },
  { org: "Brinjal Trucking", orgType: "Owner", apprStatus: "Pending", city: "Naperville", state: "Chicago", country: "US", status:"Active" },
  { org: "Lora Van Trucks", orgType: "Renter", apprStatus: "Pending", city: "Ottawa", state: "Ontario", country: "Canada", status:"Active" }

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