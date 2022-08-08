let searchButton = document.querySelector("#search");

searchButton.addEventListener('click', () => {
    console.log("button Pressed");
    sendApiRequest();
});

async function sendApiRequest(){
    let api_Key = "OagY7eBOWb7A2MOeyO9UHuWbOkKPxdLnZbNqJmqT";
    let respone = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_Key}`);
    console.log(respone);
    let data = await respone.json();
    console.log(data);
    useApiData(data);
}

function useApiData(data) {
    document.querySelector('#content').innerHTML += data.explanation
    document.querySelector('#img').innerHTML += `<img src="${data.url}">`
}