/** CORRECTION by Jacquet Dylan **/
(function () {
        class Player {
            constructor(name) {
                this.name = name;
                this.score = 0;
            }

            incScore() {
                this.score++;
            }
        }

        const game = {
            buttons: document.querySelectorAll('.play'),
            players: [new Player('Dylan'), new Player('Billy')],
            play(e) {
                const idx = parseInt(e.currentTarget.dataset.player);
                this.players[idx].incScore();
                e.currentTarget.textContent = `${this.players[idx].name} : ${this.players[idx].score}`
            },
            init() {
                for (const button of this.buttons) {
                    button.addEventListener('click', (e) => {
                        this.play(e);
                    });
                }
            },
        }
        game.init()
    }
)();