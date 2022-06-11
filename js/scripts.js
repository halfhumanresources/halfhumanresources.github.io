document.addEventListener('DOMContentLoaded', function() {
    var modeSwitch = document.querySelector('.mode-switch');
    
    modeSwitch.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    });
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var insertdate = document.getElementById("current-date");
    insertdate.innerHTML = today.toLocaleDateString("en-US", options);

});
const sidebarclick = document.querySelectorAll(".app-sidebar-link");
sidebarclick.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        sidebarclick.forEach(f => f.classList.remove("active"));
        e.target.classList.toggle("active");
    });
});
const moonicon = document.querySelector(".moon-icon");
moonicon.addEventListener('click', function() {
    if (moonicon.classList.contains('fa-moon')) {
        moonicon.classList.remove('fa-moon');
        moonicon.classList.add('fa-lightbulb');
    } else {
        moonicon.classList.add('fa-moon')
        moonicon.classList.remove('fa-lightbulb');
    }
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
