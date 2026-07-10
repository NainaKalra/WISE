// --- MINI CALENDAR PICKER ---

const eventDates = {
    "2026-2-19": { title: "Theme-WISE Event", time: "19 Mar 2026, 11:00 am", location: "Snyder Academic Center, Room 242" },
};

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.addEventListener('DOMContentLoaded', () => {
    syncMiniSelects(currentMonth, currentYear);
    miniCalRender();
    renderMainCalendar(currentMonth, currentYear);
    updateMonthBtnLabel(currentMonth, currentYear);
});

function toggleMonthList() {
    const popup = document.getElementById('monthList');
    const isOpen = popup.style.display === 'block';
    popup.style.display = isOpen ? 'none' : 'block';
    if (!isOpen) {
        syncMiniSelects(currentMonth, currentYear);
        miniCalRender();
    }
}

document.addEventListener('click', function (e) {
    const selector = document.querySelector('.month-selector');
    if (selector && !selector.contains(e.target)) {
        document.getElementById('monthList').style.display = 'none';
    }
});

function syncMiniSelects(month, year) {
    document.getElementById('miniMonthSel').value = month;
    document.getElementById('miniYearSel').value = year;
}

function miniCalNav(dir, event) {
    event.stopPropagation();
    let m = parseInt(document.getElementById('miniMonthSel').value);
    let y = parseInt(document.getElementById('miniYearSel').value);
    m += dir;
    if (m < 0) { m = 11; y--; }
    if (m > 11) { m = 0; y++; }
    document.getElementById('miniMonthSel').value = m;
    document.getElementById('miniYearSel').value = y;
    miniCalRender();
}

function miniCalRender() {
    const m = parseInt(document.getElementById('miniMonthSel').value);
    const y = parseInt(document.getElementById('miniYearSel').value);
    const grid = document.getElementById('miniCalGrid');
    grid.innerHTML = '';

    const today = new Date();
    const firstDay = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const daysInPrev = new Date(y, m, 0).getDate();

    for (let i = firstDay - 1; i >= 0; i--) {
        const d = document.createElement('div');
        d.className = 'mc-date mc-other';
        d.textContent = daysInPrev - i;
        grid.appendChild(d);
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const el = document.createElement('div');
        el.className = 'mc-date';
        el.textContent = d;
        const key = `${y}-${m}-${d}`;
        const isToday = (d === today.getDate() && m === today.getMonth() && y === today.getFullYear());
        if (isToday) el.classList.add('mc-today');
        else if (eventDates[key]) el.classList.add('mc-has-event');
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            selectMonthYear(m, y);
            document.getElementById('monthList').style.display = 'none';
        });
        grid.appendChild(el);
    }

    const totalCells = grid.children.length;
    const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= remaining; i++) {
        const d = document.createElement('div');
        d.className = 'mc-date mc-other';
        d.textContent = i;
        grid.appendChild(d);
    }
}

function selectMonthYear(month, year) {
    currentMonth = month;
    currentYear = year;
    updateMonthBtnLabel(month, year);
    renderMainCalendar(month, year);
}

function updateMonthBtnLabel(month, year) {
    document.getElementById('monthBtnLabel').textContent = MONTHS[month] + ' ' + year;
}

function renderMainCalendar(month, year) {
    const grid = document.querySelector('.calendar-grid');
    if (!grid) return;
    const dayNames = Array.from(grid.querySelectorAll('.day-name'));
    grid.innerHTML = '';
    dayNames.forEach(d => grid.appendChild(d));

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    for (let i = 0; i < firstDay; i++) {
        const cell = document.createElement('div');
        cell.className = 'date-cell';
        grid.appendChild(cell);
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const cell = document.createElement('div');
        cell.className = 'date-cell';
        const key = `${year}-${month}-${d}`;
        const isToday = (d === today.getDate() && month === today.getMonth() && year === today.getFullYear());
        if (isToday) cell.style.background = '#e8daef';
        if (eventDates[key]) {
            cell.classList.add('has-event');
            cell.innerHTML = d + '<div class="event-pill">Monthly Event</div>';
            const capturedKey = key;
            cell.onclick = () => showEventDetails(capturedKey);
        } else {
            cell.textContent = d;
        }
        grid.appendChild(cell);
    }
}

function showEventDetails(key) {
    const ev = eventDates[key];
    if (!ev) return;
    const ps = document.querySelectorAll('.modal-content p');
    document.querySelector('.modal-content h3').textContent = ev.title;
    ps[0].innerHTML = '<strong>Time:</strong> ' + ev.time;
    ps[1].innerHTML = '<strong>Location:</strong> ' + ev.location;
    document.getElementById('eventModal').style.display = 'flex';
}

function closeEventDetails() {
    document.getElementById('eventModal').style.display = 'none';
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) modal.style.display = 'none';
});