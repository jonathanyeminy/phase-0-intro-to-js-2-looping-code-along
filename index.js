
  /*const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
      for (let i = 0; i < gifts.length; i++) {
          console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
  }
  wrapGifts(gifts);
 */


function writeCards(array, name){
  
    let thankYouMessageArray = []
    for (let n = 0; n < array.length; n++) {
        let thankYouMessage = `Thank you, ${array[n]}, for the wonderful ${name} gift!`
        thankYouMessageArray.push(thankYouMessage)
    }
    return thankYouMessageArray
}

let number = 10
function countDown(number){
while (number >= 0) {
    console.log(number)
        number--
}}

