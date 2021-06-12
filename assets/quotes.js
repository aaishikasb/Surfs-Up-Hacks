let quotes = [
  '"The waves of the sea help me get back to me."',
  '"Sky above, sand below, peace within."',
  '"B.E.A.C.H.: Best Escape Anyone Can Have."',
  '"Feeling stressed? There’s a beach for that."',
  '"Catch a wave and you’re sitting on top of the world."',
  '"Leave footprints of love and kindness wherever you go."',
  '"An ocean breeze puts a mind at ease."',
  '"I dream in colors borrowed from the sea."',
  '"I’m all about palm trees and 80 degrees!"',
  '"The oceans roar is music to the soul."',
  '"Less worries, more sunshine."',
];

function displayQuote() {
  //create an index of a random number
  //convert it into between 0 to length of quotes[]
  let index = Math.floor(Math.random() * quotes.length);

  //display the quote of that index
  let div = document.querySelector("#quote");
  let quote = `
        <h1 class="display-6">${quotes[index]}</h1>
        `;
  div.innerHTML = quote;
}
