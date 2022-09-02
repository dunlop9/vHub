function toggleFunc(){
	var element = document.getElementById("sidebarCollapse");
	element.classList.toggle("active");
}

function resetPass(){
const toastTrigger = document.getElementById('passwordResetBtn')
const resetToast = document.getElementById('restPassToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
	const toast = new bootstrap.Toast(resetToast)

	toast.show()
	const timeout = setTimeout(loginRedirect, 5000);
	function loginRedirect(){
		window.location.href = "login.html";
	}
  })
}
}

function driverCreated(){
const toastTrigger = document.getElementById('createDiver')
const driverCreateToast = document.getElementById('driverCreatedToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
	const toast = new bootstrap.Toast(driverCreateToast)

	toast.show()
	const timeout = setTimeout(loginRedirect, 5000);
	function loginRedirect(){
		//window.location.href = "login.html";
	}
  })
}
}

function openlink(pageno){
	var page;
	if(pageno==11)
	{
		page="org-general.html";
	}else if(pageno==12)
	{
		page="org-roles.html";
	}else if(pageno==13)
	{
		page="org-users.html";
	}else if(pageno==14)
	{
		page="custprofile-org.html";
	}else if(pageno==15)
	{
		page="custprofile-finance.html";
	}else if(pageno==16)
	{
		page="custprofile-user.html";
	}else if(pageno==17)
	{
		page="custprofile-pricing.html";
	}
	window.location.href = page;
}