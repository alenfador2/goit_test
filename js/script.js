const score = document.getElementById('score');
const button = document.querySelector('.clear');
const cards = document.querySelectorAll('.card');
const uncounted = document.querySelector('.uncounted');
let points = 0;
for(const card of cards){
    card.addEventListener('click', (event) =>{
        incrementScore();
        pickedCard();
        
    });
    function pickedCard(){
        if(!card.classList.contains('visited')){
            card.classList.add('visited');
        }
    }
    function incrementScore(){
        points++;
        score.innerHTML = `Prawidłowa karta! Punkty: ${points}`;
        console.log(points);
    }
    function handleUncounted(event){
        const phase = event.eventPhase;
        if(phase === event.CAPTURING_PHASE){
            score.innerHTML = `Blokowana karta! Punkty: ${points}`;
            event.stopPropagation();
        }
    }
    uncounted.addEventListener('click', handleUncounted, { capture: true });

}
function clear() {
    points = 0;
        score.innerHTML = `Punkty: ${points}`;
    cards.forEach(card => {
        if (card.classList.contains('visited')){
            card.classList.remove('visited');
            }
        })
    }
    button.addEventListener('click', clear);
