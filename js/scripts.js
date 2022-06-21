document.addEventListener('DOMContentLoaded', function() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var insertdate = document.getElementById("current-date");
    insertdate.innerHTML = today.toLocaleDateString("en-US", options);

    const darkswitch = document.getElementById('darkbutton');

    darkswitch.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    if (localStorage.getItem('darkMode') == 'enabled') {
        document.documentElement.classList.toggle('dark');
    }
});

const sidebarclick = document.querySelectorAll(".app-sidebar-link");
sidebarclick.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        sidebarclick.forEach(f => f.classList.remove("active"));
        e.target.classList.toggle("active");
    });
});
