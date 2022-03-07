function addUser() {
    var username = document.getElementById("user_name").value ;
    localStorage.setItem("storage", username);
    window.location="kwitter_room.html";
}



