function init() {
    var container_element = document.createElement('div');
    container_element.setAttribute('id', 'container');

    var table = document.createElement('table');
    table.setAttribute('id', 'game-of-life-grid');

    container_element.appendChild(table);
    
    var body = document.getElementsByTagName('body')[0];
    
    var width = 25;
    var height = 25;

    var gol = new GameOfLife(width,height);
    var blocks = gol.populate();
    console.log(blocks);

    for(var i = 0; i < width; i++) {
        table.appendChild(document.createElement('tr'));
        for(var j = 0; j < height; j++) {
            var cell = document.createElement('td');
            table.childNodes[i].appendChild(cell);
        }
    }

    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if(gol.isLive(i,j)) {
                col.setAttribute('class', 'dead');
            }  
        }
     }

    body.appendChild(container_element);

    console.log(table);
}

document.addEventListener('DOMContentLoaded', init, false);