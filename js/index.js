"use strict";
// Interface
// Create a deck of cards
function createDeck() {
    var deck = [];
    var suits = ['&hearts;', '&spades;', '&clubs;', '&diams;'];
    for (var _i = 0, _a = suits; _i < _a.length; _i++) {
        var suit = _a[_i];
        //ELLER  for(let suit of suits as Array<string>)
        for (var i = 2; i <= 14; i++) {
            var display = void 0;
            switch (i) {
                case 11:
                    display = 'J';
                    break;
                case 12:
                    display = 'Q';
                    break;
                case 13:
                    display = 'K';
                    break;
                case 14:
                    display = 'A';
                    break;
                default:
                    display = "" + i;
            }
            var card = {
                suit: suit,
                value: i,
                color: (suit == "&hearts;" || suit == "&diams;") ? 'red' : 'black',
                display: display
            };
            deck.push(card);
            // console.log(suits)
        }
    }
    return deck;
}
var deck = createDeck();
var btn = document.querySelector("button");
// let btn = document.querySelector("button") as HTMLButtonElement
btn.addEventListener("click", function () {
    var card = pickCard();
    updateUI(card);
});
function pickCard() {
    // slumpa fram ett tal mellan 0 och deck.length
    var rand = Math.floor(Math.random() * deck.length);
    // splica kortet från rand pos i deck
    var selectedCard = deck.splice(rand, 1)[0];
    // uppdatera UI med draget kort
    return selectedCard;
}
function updateUI(card) {
    var main = document.querySelector("main");
    main.innerHTML = '';
    var ui = "<article class=\"card\">\n        <header>\n            <h1></h1>\n            <p class=" + card.color + ">" + card.suit + "</p>\n            <p>" + card.display + "</p>\n        </header>\n        <!-- <main> -->\n            <h1 class=" + card.color + ">" + card.suit + "</h1>\n        <!-- </main> -->\n        <footer>\n                <p class=" + card.color + ">" + card.suit + "</p>\n                <p>" + card.display + "</p>\n        </footer>\n    </article>";
    main.innerHTML = ui;
}
// I KONSOLLEN
// tsc index.ts
// tsc --init
