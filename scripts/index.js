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
showProjectCards('project-list');

function showProjectCards(ListId) {
    ProjectListObject.forEach(function(value,index){
        var template = '<div class="project-card">'+
            value.name+
            '<ul>'+
                '<li>Task one</li>'+
                '<li>Task two</li>'+
            '</ul>'+
        '</div>';
        if(ListId){
            document.getElementById(ListId).innerHTML += template;
        }else {
            document.getElementById(project-list).innerHTML += template;
        }

        

    });
        
}

function removeCards(){
    document.getElementById('project-list').innerHTML = "";
}

var idName = 1;
function addBoard(id) {
    idName++;
    var ListId = "project-list_" + idName;
    var templateBlock = '<section class="board-block">'+
    '<div>' +id.value+ '<button type="button" onclick="removeCards()">Remove Card</button></div>'+
    '<div class="project-Block" id=' +ListId+'>'+
        
    '</div>' +
    '</section>';
    document.getElementById('boardBlockList').innerHTML += templateBlock;
    showProjectCards(ListId);
}