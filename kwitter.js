function adduser() {
    var username=document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location="mainfolder.html"
}
