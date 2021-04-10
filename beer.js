// FYK: the beers urls go up to 325 beers
// https://api.punkapi.com/v2/beers/1 - https://api.punkapi.com/v2/beers/325

//========
//========Beer App section========

//query the beer randomizer button
const getBeerButton = document.querySelector("#beer-button");
//test event listener to make sure click works
getBeerButton.addEventListener('click', function(){
    console.log("Beer button clicked");
})