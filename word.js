const iname = localStorage.getItem("info_name");
const iref = localStorage.getItem("info_ref");

localStorage.removeItem("info_name");
localStorage.removeItem("info_ref");

document.getElementById("title").innerText = iname;