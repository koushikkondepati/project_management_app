function toggleMenu() {
    var toggle = document.getElementById('board-menu');
    if ( toggle.style.display == "none") {
        toggle.style.display = "";
    } else {
        toggle.style.display = "none";
    }
}

var ProjectListObject = [
    {
        name: "project 1"
    },
    {
        name: "project 2"
    }    
]
showProjectCards();
function showProjectCards() {
    ProjectListObject.forEach(function(value,index){
        var template = '<div class="project-card">'+
            value.name+
            '<ul>'+
                '<li>Task one</li>'+
                '<li>Task two</li>'+
            '</ul>'+
        '</div>';
        document.getElementById('project-list').innerHTML += template;

    });
        
}

function removeCards(){
    document.getElementById('project-list').innerHTML = "";
}

function addBoard(id) {
    var templateBlock = '<section class="board-block">'+
    '<div>' +id.value+ '<button type="button" onclick="removeCards()">Remove Card</button></div>'+
    '<div class="project-Block" id="project-list">'+
        
    '</div>' +
    '</section>';
    document.getElementById('boardBlockList').innerHTML += templateBlock;
}