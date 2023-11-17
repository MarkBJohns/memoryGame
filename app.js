// ----------------------------------------------------------------------------------------------------------------

//      SAVED VARIABLES

// ----------------------------------------------------------------------------------------------------------------

const body=document.querySelector('body');
const header=document.querySelector('h1');
const restart=document.getElementById('home');
const beginEasy=document.getElementById('beginEasy');
const twoSuits=document.getElementById('twosuits');
const beginHard=document.getElementById('beginHard');
const game=document.getElementById('game');
const hardGame=document.getElementById('hardgame');
const hearts=document.getElementById('hearts');
const hardHearts=document.getElementById('hardhearts');
const clubs=document.getElementById('clubs');
const hardClubs=document.getElementById('hardclubs');
const diamonds=document.getElementById('diamonds');
const hardDiamonds=document.getElementById('harddiamonds');
const spades=document.getElementById('spades');
const hardSpades=document.getElementById('hardspades');
const suitButtons=document.querySelectorAll('.suitbutton');
const suitButtonsArray=Array.from(suitButtons);
// working on making the counter work for both modes
const scoreCount=document.getElementById('counter');
const hardScoreCount=document.getElementById('hardcounter');
const hardMode=document.getElementById('hardmode');
const label=document.querySelector('label');
let counter=0;
let hardCounter=0;
const bestScore=document.getElementById('bestscore');
const hardScore=document.getElementById('hardscore');
let cardCount=24;
let matchedCount=document.querySelectorAll('.matched').length;
let newGame=document.querySelector('.newgame');
const cards=document.querySelectorAll('.card');
let firstTry=true;
let firstCard=null;
let secondCard=null;
let gameMode='easy';
let selections=0;
const doubleSuit=[];
const heartCards=[
'https://www.improvemagic.com/wp-content/uploads/2020/11/s2.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s3.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s4.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s5.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s6.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s7.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s8.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s9.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s10.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/sj.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/sq.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/sk.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s2.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s3.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s4.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s5.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s6.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s7.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s8.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s9.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/s10.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/sj.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/sq.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/sk.png?ezimgfmt=ng:webp/ngcb13'
];
const clubCards=
[
'https://www.improvemagic.com/wp-content/uploads/2020/11/k2.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k3.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k4.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k5.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k6.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k7.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k8.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k9.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k10.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/kj.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/kq.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/kk.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k2.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k3.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k4.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k5.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k6.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k7.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k8.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k9.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/k10.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/kj.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/kq.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/kk.png?ezimgfmt=ng:webp/ngcb13'
];
const diamondCards=[
'https://www.improvemagic.com/wp-content/uploads/2020/11/l2.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l3.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l4.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l5.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l6.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l7.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l8.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l9.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l10.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/lj.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/lq.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/lk.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l2.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l3.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l4.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l5.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l6.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l7.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l8.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l9.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/l10.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/lj.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/lq.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/lk.png?ezimgfmt=ng:webp/ngcb13'
];
const spadeCards=[
'https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png?ezimgfmt=ng:webp/ngcb13',
'https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png?ezimgfmt=ng:webp/ngcb13'
];

// ----------------------------------------------------------------------------------------------------------------

//      FUNCTIONS TO RECALL LATER

// ----------------------------------------------------------------------------------------------------------------

// goes back to the beginning
restart.addEventListener('click',function(e){
    location.reload();
})

// toggle between normal and hard modes
hardMode.addEventListener('change',function(){
    if(hardMode.checked){
        beginEasy.style.display='none';
        beginHard.style.display='grid';
        gameMode='hard';
        console.log('hard mode');
        body.style.backgroundColor='#161616'
        header.innerText='Select Two Suits';
    }else{
        beginEasy.style.display='grid';
        beginHard.style.display='none';
        gameMode='easy';
        console.log('easy mode');
        body.style.backgroundColor='maroon';
        header.innerText='';
    }
})

// sets the back of the cards
function cardBack(){
    const image='https://www.nicepng.com/png/full/121-1216797_card-back-png-download-seasons-playing-cards-magna.png';
    const cards=document.querySelectorAll('.card');
    for(let card of cards){
        card.style.backgroundImage='url('+image+')';
    }
}

// shuffles the cards
function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
}

// sets the hearts suit
function suitHearts(){
    const elements=document.querySelectorAll('.card');
    const doublePics=[heartCards.concat(heartCards)];
    shuffle(heartCards);
    elements.forEach(function(element,index){
        const imageUrl=heartCards[index];
        element.style.backgroundImage='url(' + heartCards[index] + ')';
        element.dataset.imageUrl=imageUrl;
    })
}

// sets the clubs suit
function suitClubs(){
    const elements=document.querySelectorAll('.card');
    const doublePics=[clubCards.concat(clubCards)];
    shuffle(clubCards);
    elements.forEach(function(element,index){
        const imageUrl=clubCards[index];
        element.style.backgroundImage='url(' + clubCards[index] + ')';
        element.dataset.imageUrl=imageUrl;
    })
}

// sets the diamonds suit
function suitDiamonds(){
    const elements=document.querySelectorAll('.card');
    const doublePics=[diamondCards.concat(diamondCards)];
    shuffle(diamondCards);
    elements.forEach(function(element,index){
        const imageUrl=diamondCards[index];
        element.style.backgroundImage='url(' + diamondCards[index] + ')';
        element.dataset.imageUrl=imageUrl;
    })
}

// sets the spades suit
function suitSpades(){
    const elements=document.querySelectorAll('.card');
    const doublePics=[spadeCards.concat(spadeCards)];
    shuffle(spadeCards);
    elements.forEach(function(element,index){
        const imageUrl=spadeCards[index];
        element.style.backgroundImage='url(' + spadeCards[index] + ')';
        element.dataset.imageUrl=imageUrl;
    })
}

// sets the cards for two suits (hard mode)
function hardCards(){
    const elements=document.querySelectorAll('.card');
    const doublePics=[doubleSuit.concat(doubleSuit)];
    shuffle(doubleSuit);
    elements.forEach(function(element,index){
        const imageUrl=doubleSuit[index];
        element.style.backgroundImage='url(' + doubleSuit[index] + ')';
        element.dataset.imageUrl=imageUrl;
    })
}

// create a glow effect so the user sees that the elements are interactable
beginEasy.addEventListener('mousemove',function(e){
    e.target.classList.remove('shadow');
    e.target.classList.add('glow');
})
beginHard.addEventListener('mousemove',function(e){
    e.target.classList.remove('shadow');
    e.target.classList.add('glow');
})

beginEasy.addEventListener('mouseout',function(e){
    e.target.classList.add('shadow');
    e.target.classList.remove('glow');
})
beginHard.addEventListener('mouseout',function(e){
    e.target.classList.add('shadow');
    e.target.classList.remove('glow');
})

// ----------------------------------------------------------------------------------------------------------------

//      SELECTING GAME MODES

// ----------------------------------------------------------------------------------------------------------------

// starts the easy mode based on which suit you chose, removes the begin button, and populates
//      the webpage with the 'game' element
beginEasy.addEventListener('click',function(e){
    const gameElements=document.querySelectorAll('.none');
    const oldHighScore=localStorage.getItem('highscore');
    const cardCount=24;
    hardGame.style.display='none';
        // populates the best score section
        if(oldHighScore===null){
            bestScore.innerText=`Best Score:
            ???`;
        }else{
            bestScore.innerText=`Best Score:
            ${oldHighScore}`;
        }
            // Score counter
        scoreCount.innerText=`Score:
        ${counter}`;
        // choose your suit
        if(e.target===hearts){
            for(let i=0;i<gameElements.length;i++){
                gameElements[i].classList.remove('none');
            }
            // set the front of the cards first, then the back of the cards second,
            //      so that when the window loads you see the back
            suitHearts();
            cardBack();
            beginEasy.remove();
            label.remove();
        } else if(e.target===clubs){
            for(let i=0;i<gameElements.length;i++){
                gameElements[i].classList.remove('none');
            }
            suitClubs();
            cardBack();
            beginEasy.remove();
            label.remove();
        } else if(e.target===diamonds){
            for(let i=0;i<gameElements.length;i++){
                gameElements[i].classList.remove('none');
            }
            suitDiamonds();
            cardBack();
            beginEasy.remove();
            label.remove();
        } else if(e.target===spades){
            for(let i=0;i<gameElements.length;i++){
                gameElements[i].classList.remove('none');
            }
            suitSpades();
            cardBack();
            beginEasy.remove();
            label.remove();
        }
})

// starts the hard mode

beginHard.addEventListener('click',function(e){
    const gameElements=document.querySelectorAll('.none');
    const oldHighScore=localStorage.getItem('hardhighscore');
    cardCount=48;
    hardScoreCount.innerText=`Score:
    ${counter}`;
    if(oldHighScore===null){
        hardScore.innerText=`Best Score:
        ???`;
    }else{
        hardScore.innerText=`Best Score:
        ${oldHighScore}`;
    }
    if(selections===0){
        if(e.target===hardHearts){
            e.target.classList.add('gameover');
            doubleSuit.push(...heartCards);
            selections++;
            console.log(`selection: ${selections},`);
        }else if(e.target===hardClubs){
            e.target.classList.add('gameover');
            doubleSuit.push(...clubCards);
            selections++;
            console.log(`selection: ${selections},`);
        }else if(e.target===hardDiamonds){
            e.target.classList.add('gameover');
            doubleSuit.push(...diamondCards);
            selections++;
            console.log(`selection: ${selections},`);
        }else if(e.target===hardSpades){
            e.target.classList.add('gameover');
            doubleSuit.push(...spadeCards);
            selections++;
            console.log(`selection: ${selections},`);
        }
    }else if(selections===1){
        if(e.target===hardHearts&&!hardHearts.classList.contains('gameover')){
            doubleSuit.push(...heartCards);
            console.log(doubleSuit);
            beginHard.remove();
            header.remove();
            game.remove();
            hardGame.style.display='grid';
            for(let i=0;i<gameElements.length;i++){
                gameElements[i].classList.remove('none');
            }
            hardCards();
            cardBack();
        }else if(e.target===hardClubs&&!hardClubs.classList.contains('gameover')){
            doubleSuit.push(...clubCards);
            console.log(doubleSuit);
            beginHard.remove();
            header.remove();
            game.remove();
            hardGame.style.display='grid';
            for(let i=0;i<gameElements.length;i++){
                gameElements[i].classList.remove('none');
            }
            hardCards();
            cardBack();
        }else if(e.target===hardDiamonds&&!hardDiamonds.classList.contains('gameover')){
            doubleSuit.push(...diamondCards);
            console.log(doubleSuit)
            beginHard.remove();
            header.remove();
            game.remove();
            hardGame.style.display='grid';
            for(let i=0;i<gameElements.length;i++){
                gameElements[i].classList.remove('none');
            }
            hardCards();
            cardBack();
        }else if(e.target===hardSpades&&!hardSpades.classList.contains('gameover')){
            doubleSuit.push(...spadeCards);
            console.log(doubleSuit);
            beginHard.remove();
            header.remove();
            game.remove();
            hardGame.style.display='grid';
            for(let i=0;i<gameElements.length;i++){
                gameElements[i].classList.remove('none');
            }
            hardCards();
            cardBack();
        }
    }
})

// ----------------------------------------------------------------------------------------------------------------

//      MATCHING FUNCTIONS FOR EACH OF THE CARDS

// ----------------------------------------------------------------------------------------------------------------

cards.forEach(function(card){
    card.addEventListener('click',function(e){
        let cardFace=card.dataset.imageUrl;
        // If you click a card that's already been matched, you can't interact with it
        if(card.classList.contains('matched')||card===firstCard){
            return;
        }
        // clicking a card will make animate it via the 'flipped' class, and it will change the background to match the 
        //      meta-data of which specific card it is
        if(!firstCard){
            firstCard=card;
            card.style.backgroundImage='url('+cardFace+')';
            card.classList.add('flipped');
            card.classList.remove('unflipped');
        // Same process for the second card, adds 1 to the counter to show a turn has taken place.
        }else if(!secondCard){
            secondCard=card;
            card.style.backgroundImage='url('+card.dataset.imageUrl+')';
            card.classList.add('flipped');
            card.classList.remove('unflipped');
            counter++;
            hardCounter++;
            scoreCount.innerText=`Score:
            ${counter}`;
            hardScoreCount.innerText=`Score:
            ${hardCounter}`;
            // logs in the console the amount of tries have been attempted
            if(firstTry){
            console.log(`First try`);
            firstTry=false;
            }else if(!firstTry){
                console.log(`${counter} tries`);
            }
            // checks to see if a match has been made, adds the 'matched' class to both cards, adds 2 to the matchedCount
            //      that we use later to determine if the game is over
            if(firstCard.dataset.imageUrl===secondCard.dataset.imageUrl){
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                firstCard=null;
                secondCard=null;
                matchedCount+=2;
                console.log(`${matchedCount} cards paired`);
                // when the amount of cards matched is the same as the amount of cards, we go through each of the card 
                //      elements and grey them out with the 'gameover' class.
                if(cardCount===matchedCount){
                    const cards=document.querySelectorAll('.card');
                    cards.forEach(function(card){
                        card.classList.add('gameover');
                    })
                    hardScore.remove();
                    scoreCount.remove();
                    cardBack();
                    // the score is added to local storage, and if the current score is lower than the previous score,
                    //      that becomes our new best score
                    const oldHighScore=localStorage.getItem('highscore');
                    if(oldHighScore===null||counter<oldHighScore){
                        localStorage.setItem('highscore',counter);
                        localStorage.setItem('hardhighscore',hardCounter);
                        bestScore.innerText=`Best Score:
                        ${counter}`;
                        hardScore.innerText=`Best Score (Hard):
                        ${hardCounter}`;
                    }else{
                        bestScore.innerText=`Best Score:
                        ${oldHighScore}`;
                    }
                    // we create a new button that refreshes the page and allows for a new game.
                    const newGame=document.createElement('button');
                    newGame.innerText='Play again?';
                    newGame.classList.add('newgame');
                    document.body.appendChild(newGame);
                    newGame.addEventListener('click',function(){
                        location.reload();
                    });
                }
            }else{
                // when two cards do not match, we revert both of them to the card back background with an animation that
                //      last one second
                setTimeout(function(){
                    firstCard.style.backgroundImage=`url('https://www.nicepng.com/png/full/121-1216797_card-back-png-download-seasons-playing-cards-magna.png')`;
                    secondCard.style.backgroundImage=`url('https://www.nicepng.com/png/full/121-1216797_card-back-png-download-seasons-playing-cards-magna.png')`;
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    firstCard.classList.add('unflipped');
                    secondCard.classList.add('unflipped');
                    firstCard=null;
                    secondCard=null;
                },1000);
            }
        }
    })
})

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
