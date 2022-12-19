window.onload = function() {
    // Set my age
    bday = new Date("2001-09-28");
    now = new Date();
    document.getElementById("age").innerText = now.getFullYear() - bday.getFullYear();
};