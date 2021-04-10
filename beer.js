// FYK: the beers urls go up to 325 beers
// https://api.punkapi.com/v2/beers/1 - https://api.punkapi.com/v2/beers/325

//========
//========Beer App section========

//query the beer randomizer button
const getBeerButton = document.querySelector("#beer-button");

//build out button event
getBeerButton.addEventListener('click', function(){
    //test event listener to make sure click works
    console.log("Beer button clicked");
    //API Request Below
    // =================
    // This is the random beer api URL
    const URL = "https://api.punkapi.com/v2/beers/random";

    //make a request to the URL
    fetch(URL)
        // Now process the raw response into an object
        .then((res) => res.json())
        // Now process the above JSON, we will first console log a message
        //but we want to use this space to change the img src
        .then((data) => {
            console.log('success!');
            console.log(data[0].id)
            console.log(data[0].name)

        })

})