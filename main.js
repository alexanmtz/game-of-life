function init() {
    var container_element = document.createElement('div');
    container_element.setAttribute('id', 'container');

    var grid_element = document.createElement('table');
    grid_element.setAttribute('id', 'game-of-life-grid');

    container_element.appendChild(grid_element);
    
    var body = document.getElementsByTagName('body')[0];

    var gol = new GameOfLife(9,9);
    gol.fill()

    var blocks = gol.getCells();

    for(var i = 0; i < blocks.length; i++) {
        grid_element.appendChild(document.createElement('tr'));
        for(var j = 0; j < blocks[i].length; j++) {
            grid_element.childNodes[i].appendChild(document.createElement('td'));
        }
    }
    body.appendChild(container_element);
}

document.addEventListener('DOMContentLoaded', init, false);