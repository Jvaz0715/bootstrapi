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
            /*console.log('success!');
            console.log(data[0].first_brewed)
            console.log(data[0].abv)
            console.log(data[0].name)
            console.log(data[0].id)
            console.log(data[0].description)*/

            //query all the spots you need to update on click
            //updates the ABV
            const ABV = document.querySelector(".abv");
            ABV.innerText = "Alcohol content: " + data[0].abv + "%";

            //updates the year brewed
            const dateBrewed = document.querySelector(".brewdate");
            //below will only return year since some have months and years, we want all uniform to just years
            const yearBrewed = 
            `${data[0].first_brewed[data[0].first_brewed.length - 4]}${data[0].first_brewed[data[0].first_brewed.length - 3]}${data[0].first_brewed[data[0].first_brewed.length - 2]}${data[0].first_brewed[data[0].first_brewed.length - 1]}`;
            dateBrewed.innerText = "Year Started: " + yearBrewed;

             //updates the beer img
            const beerImg = document.querySelector(".beer-img");
            //not all beers have images, create a default for beers with no photos
            if (data[0].image_url === null) {
                beerImg.src = "https://cdn.dribbble.com/users/2443/screenshots/4237805/asset_14.png";
            } else {
                beerImg.src = data[0].image_url;
            }


             //updates the beer name
            const beerName = document.querySelector("#beer-name");
            beerName.innerText = data[0].name;


             //updates the beer tagline
            const beerTag = document.querySelector("#beer-tagline")
            const lastIndex = data[0].tagline[data[0].tagline.length - 1];
            if (lastIndex === "."){
                beerTag.innerText = `"${data[0].tagline.slice(0, -1)}"`;
            } else if (data[0].tagline === null) {
                beerTag.innerText = "";
            } else {
                beerTag.innerText = `"${data[0].tagline}"`;
            }
            

            // //updates the beer description
            const beerDescription = document.querySelector(".beer-description");

            beerDescription.innerText = data[0].description;
    

        })

})