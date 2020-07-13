function toggleMenu() {
    var toggle = document.getElementById('board-menu');
    if ( toggle.style.display == "none") {
        toggle.style.display = "";
    } else {
        toggle.style.display = "none";
    }
}
showProjectCards();
function showProjectCards() {
        var template = '<div class="project-card">'+
            'Project 1'+
            '<ul>'+
                '<li>Task one</li>'+
                '<li>Task two</li>'+
            '</ul>'+
        '</div>';
        document.getElementById('project-list').innerHTML = template;
}