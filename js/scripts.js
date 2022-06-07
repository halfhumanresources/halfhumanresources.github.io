document.addEventListener('DOMContentLoaded', function() {
    var modeSwitch = document.querySelector('.mode-switch');

    modeSwitch.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
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
});