console.log("Script Loaded!");

function toggleMonthList() {
    console.log("Dropdown Clicked");
    const list = document.getElementById('monthList');
    list.style.display = (list.style.display === "block") ? "none" : "block";
}

function selectMonth(index, year) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('currentMonthDisplay').innerHTML = months[index] + " " + year + " <span>⌄</span>";
    document.getElementById('monthList').style.display = "none";
}

function showEventDetails() {
    console.log("Event Clicked");
    document.getElementById('eventModal').style.display = 'flex';
}

function closeEventDetails() {
    document.getElementById('eventModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('eventModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}