//========Dog Image Section========

// query the image in html to make it easier to change later on
// you might need to put it in the actual click eventlistener
const dogImage = document.querySelector(".card-img-top");

// Query change dog image button
const changeDogButton = document.querySelector("#change-dog-button");
//add eventListener to dogbutton
changeDogButton.addEventListener('click', function(){
    console.log("button was clicked");
    //API Request Below
    // =================
    // This is the random dog api URL
    const URL = "https://dog.ceo/api/breeds/image/random";
    //make a request to the URL
    fetch(URL)
        // Now process the raw response into an object
        .then((res) => res.json())
        // Now process the above JSON, we will first console log a message
        //but we want to use this space to change the img src
        .then((data) => {
            console.log('success!');
            //const dogImage = document.querySelector("#card-img-top");
            //console.log(data.message);
            dogImage.src = data.message;
        })
})

////=============================
//========Weather Section========

//Query check weather button
const checkWeatherButton = document.querySelector("#weather-button");

// test button
checkWeatherButton.addEventListener('click', function(){
    console.log("button was clicked");
    //API Request Below
    // =================
    //query the city input
    const cityInput = document.querySelector("#city-input");
    //get the city input converted to lowercase string and no spaces to append later on url for search
    const citySearched = cityInput.value.toLowerCase().replace(/ /g, '');
    //console.log(citySearched)
    // This is the weather api URL
    // This also  will append the city searched to the end of the url in order to get the city
    const URL = "https://goweather.herokuapp.com/weather/" + citySearched;
    console.log(URL)
    //make a request to the URL
    fetch(URL)
        // Now process the raw response into an object
        .then((res) => res.json())
        // Now process the above JSON, we will first console log a message
        //but we want to use this space to change the img src
        .then((data) => {
            console.log('success!');
            // this will be where you query each info spot and change based on data
            console.log(data.temperature);
            console.log(data.wind);
            console.log(data.description);
        })
})