// Interface

interface card {
    suit: string,
    value: number,
    color: string,
    display: string,
}


// Create a deck of cards

function createDeck() {
    
    let deck: card[] = []

    let suits: string[] = ['&hearts;','&spades;','&clubs;','&diams;']

    for (let suit of suits as string[]){
        //ELLER  for(let suit of suits as Array<string>)

        for(let i: number = 2; i <= 14; i++){

        let display: string;

            switch(i){
                case 11:
                    display = 'J'
                    break;
                case 12:
                    display = 'Q'
                    break;
                case 13:
                    display = 'K'
                    break;
                case 14:
                    display = 'A'
                    break;
                    default:
                        display = `${i}`
            }
            
            let card: card = {
                suit: suit,
                value: i,
                color: (suit == "&hearts;" || suit == "&diams;") ? 'red' : 'black',
                display: display

            }
            deck.push(card)
            // console.log(suits)
        }
    }

    return deck;
}


const deck: card[] = createDeck();

let btn: any = document.querySelector("button")
// let btn = document.querySelector("button") as HTMLButtonElement

btn.addEventListener("click", () => {
    let card: card = pickCard()
    updateUI(card)
})

function pickCard(){
    // slumpa fram ett tal mellan 0 och deck.length
let rand: number = Math.floor(Math.random() * deck.length)


    // splica kortet från rand pos i deck
    let selectedCard: card = deck.splice(rand, 1)[0]

    // uppdatera UI med draget kort
    return selectedCard

}
function updateUI(card: card){
    let main = document.querySelector("main") as HTMLButtonElement
    main.innerHTML = ''

    let ui = 
    `<article class="card">
        <header>
            <h1></h1>
            <p class=${card.color}>${card.suit}</p>
            <p>${card.display}</p>
        </header>
        <!-- <main> -->
            <h1 class=${card.color}>${card.suit}</h1>
        <!-- </main> -->
        <footer>
                <p class=${card.color}>${card.suit}</p>
                <p>${card.display}</p>
        </footer>
    </article>`

    main.innerHTML = ui

}
// I KONSOLLEN
// tsc index.ts
// tsc --init