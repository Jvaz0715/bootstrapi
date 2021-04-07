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