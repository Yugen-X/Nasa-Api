// identify and store the button element
let searchButton = document.querySelector("#search");

// listen to the button being pressed, if so, console log 'button pressed' and run function 'sendApiRequest'
searchButton.addEventListener('click', () => {
    console.log("button Pressed");
    sendApiRequest();
});

// this is async, we called the function when the button clicks, and we wait for the response
async function sendApiRequest(){
    // api key
    let api_Key = "OagY7eBOWb7A2MOeyO9UHuWbOkKPxdLnZbNqJmqT";
    // fetch the api object or data
    let respone = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_Key}`);
    // log info
    console.log(respone);
   // store this data as a varable we can use which will act as an object, and i say object since the api address shows its an object when you view it as a website or the console log
    let data = await respone.json();
    // console log again.
    console.log(data);
    // run a function which applies that data to some elements
    useApiData(data);
}

function useApiData(data) {
    document.querySelector('#content').innerHTML += data.explanation
    document.querySelector('#img').innerHTML += `<img src="${data.url}">`
}