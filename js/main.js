const buttonsSelector = document.querySelectorAll('button');
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    incScore() {
        this.score ++ ;
    }
}
const players = [new Player('Dylan'),new Player('Billy')];
for (const buttonSelectorElement of buttonsSelector) {
    buttonSelectorElement.addEventListener('click', (e)=>{
        players[parseInt(e.currentTarget.dataset.player)].score++;
        console.table(players);
    });
}

/**************************************************************************************/
// CORRECTION