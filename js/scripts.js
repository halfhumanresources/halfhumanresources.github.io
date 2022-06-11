document.addEventListener('DOMContentLoaded', function() {
    /*
    var modeSwitch = document.querySelector('.mode-switch');
    
    modeSwitch.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    });*/

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

    /* disable grid/list view for now, -R
        var listView = document.querySelector('.list-view');
        var gridView = document.querySelector('.grid-view');
        var projectsList = document.querySelector('.project-boxes');

        listView.addEventListener('click', function() {
            gridView.classList.remove('active');
            listView.classList.add('active');
            projectsList.classList.remove('jsGridView');
            projectsList.classList.add('jsListView');
        });

        gridView.addEventListener('click', function() {
            gridView.classList.add('active');
            listView.classList.remove('active');
            projectsList.classList.remove('jsListView');
            projectsList.classList.add('jsGridView');
        });*/
