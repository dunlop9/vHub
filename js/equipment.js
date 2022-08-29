const columnDefs = [
  { field: "unitno", headerName: 'Unit Number', cellRenderer: function (params) {return '<a href="#" class="text-decoration-none">'+params.value+'</a>' }, cellClass: ['clsAnchor'] },
  { field: "vinno", headerName: 'VIN Number'  },
  { field: "brand", headerName: 'Brand'  },
  { field: "email", headerName: 'Email'  },
  { field: "model", headerName: 'Model'  },
  { field: "equipmenttype", headerName: 'Equipment Type'  },
  { field: "rating", headerName: 'Rating'  },
  { field: "availability", headerName: 'Availabilitu', cellRenderer: function (params) {return '<a href="#" class="text-decoration-none" >'+params.value+'</a>' }, cellClass: ['clsAnchor']  },
  { field: "damages", headerName: 'Damages', cellRenderer: function (params) {return '<a href="#" class="text-decoration-none">'+params.value+'</a>' }, cellClass: ['clsAnchor'] },
  { field: "status", headerName: 'Status', cellClass: ['']  }
];

// specify the data
const rowData = [
  { unitno: "171347", vinno:"2M5931611J1171347", brand: "Manac", model: "Holistic", equipmenttype: "Reefer Van", rating: "4.2", availability: "3", damages: "7", status:"Unavailable" },
  { unitno: "171347", vinno:"2M5931611J1171347", brand: "Manac", model: "Holistic", equipmenttype: "Reefer Van", rating: "4.2", availability: "3", damages: "7", status:"Unavailable" },
  { unitno: "171347", vinno:"2M5931611J1171347", brand: "Manac", model: "Holistic", equipmenttype: "Reefer Van", rating: "4.2", availability: "3", damages: "7", status:"Unavailable" },
  { unitno: "171347", vinno:"2M5931611J1171347", brand: "Manac", model: "Holistic", equipmenttype: "Reefer Van", rating: "4.2", availability: "3", damages: "7", status:"Unavailable" },
  { unitno: "171347", vinno:"2M5931611J1171347", brand: "Manac", model: "Holistic", equipmenttype: "Reefer Van", rating: "4.2", availability: "3", damages: "7", status:"Unavailable" },
  { unitno: "171347", vinno:"2M5931611J1171347", brand: "Manac", model: "Holistic", equipmenttype: "Reefer Van", rating: "4.2", availability: "3", damages: "7", status:"Unavailable" },
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