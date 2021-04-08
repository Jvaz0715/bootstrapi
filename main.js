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
            console.log(data.message);
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
    // to change the city label
    const cityName = document.querySelector("#city-name");

    cityName.innerText = cityInput.value;
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
        .then((data) => {
            console.log('success!');
            //const to bring back hidden content
            const weatherContainer = document.querySelector(".weather-container");
            weatherContainer.setAttribute("id", "weather-container-revealed");
            // this will be where you query each info spot and change based on data
            const temp = document.querySelector(".temp-info");
            //changes the temperature
            temp.innerText = data.temperature;

            const wind = document.querySelector(".wind-info");

            wind.innerText = data.wind;

            const description = document.querySelector(".weather-description");

            description.innerText = data.description;

            //check to print array info

            //work on each day
            //day one weather
            const dayOneImage = document.querySelector("#day-one-img");
            const dayOneDegrees = document.querySelector("#day-one-degrees");
            const dayOneDescribe = document.querySelector("#day-one-describe");
            dayOneDegrees.innerText = data.forecast[0].temperature.replace(/\D/g,'') + "°";
            dayOneDescribe.innerText = data.forecast[0].wind;
            
            //day two weather
            const dayTwoImage = document.querySelector("#day-two-img");
            const dayTwoDegrees = document.querySelector("#day-two-degrees");
            const dayTwoDescribe = document.querySelector("#day-two-describe");
            dayTwoDegrees.innerText = data.forecast[1].temperature.replace(/\D/g,'') + "°";
            dayTwoDescribe.innerText = data.forecast[1].wind;

            //day three weather
            const dayThreeImage = document.querySelector("#day-three-img");
            const dayThreeDegrees = document.querySelector("#day-three-degrees");
            const dayThreeDescribe = document.querySelector("#day-three-describe");
            dayThreeDegrees.innerText = data.forecast[2].temperature.replace(/\D/g,'') + "°";
            dayThreeDescribe.innerText = data.forecast[2].wind;

            randomNumber1 = Math.floor(Math.random() * 3);
            randomNumber2 = Math.floor(Math.random() * 3);
            randomNumber3 = Math.floor(Math.random() * 3);

            if (randomNumber1 === 0) {
                dayOneImage.src = "https://media1.giphy.com/media/fwR54Wq7dYu9VXKiAF/giphy.gif";
            } else if (randomNumber1 === 1) {
                dayOneImage.src = "https://thumbs.gfycat.com/RapidDimEider-max-1mb.gif";
            } else if (randomNumber1 === 2) {
                dayOneImage.src = "https://lh3.googleusercontent.com/proxy/sxFHwsKREbuuVGKN7K3iEI2oyPsle-14PG1QKMJT3himY7VbGXTrJK5f3Ec5NEf6Ad_SpQPJgA33DoQ5N-UvXtSKFGnUp1M";
            }
            
            if (randomNumber2 === 0) {
                dayTwoImage.src = "https://media1.giphy.com/media/fwR54Wq7dYu9VXKiAF/giphy.gif";
            } else if (randomNumber2 === 1) {
                dayTwoImage.src = "https://thumbs.gfycat.com/RapidDimEider-max-1mb.gif";
            } else if (randomNumber2 === 2) {
                dayTwoImage.src = "https://lh3.googleusercontent.com/proxy/sxFHwsKREbuuVGKN7K3iEI2oyPsle-14PG1QKMJT3himY7VbGXTrJK5f3Ec5NEf6Ad_SpQPJgA33DoQ5N-UvXtSKFGnUp1M";
            }

            if (randomNumber3 === 0) {
                dayThreeImage.src = "https://media1.giphy.com/media/fwR54Wq7dYu9VXKiAF/giphy.gif";
            } else if (randomNumber3 === 1) {
                dayThreeImage.src = "https://thumbs.gfycat.com/RapidDimEider-max-1mb.gif";
            } else if (randomNumber3 === 2) {
                dayThreeImage.src = "https://lh3.googleusercontent.com/proxy/sxFHwsKREbuuVGKN7K3iEI2oyPsle-14PG1QKMJT3himY7VbGXTrJK5f3Ec5NEf6Ad_SpQPJgA33DoQ5N-UvXtSKFGnUp1M";
            }
        
        })
})
