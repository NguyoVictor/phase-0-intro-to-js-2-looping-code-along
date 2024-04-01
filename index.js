// Code your solutions in this file
const cards = ["Guadalupe","Ollie","Aki"];

function writeCards(){
   const thankYouMessages = [];
    for(let i = 0; i < cards.length; i++){
        thankYouMessages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
       }
       return thankYouMessages;
}

writeCards();

function countDown(count){
    while (count >= 0 ){
        console.log(count);
        count--;
    }
}
countDown();