const JOKE_API_ENDPOINT="https://icanhazdadjoke.com/"
const quoteElement=document.getElementById("quote");
function fetchJoke(){
    //AJAX Request
    const Request = new XMLHttpRequest();
    Request.open("GET",JOKE_API_ENDPOINT);
    Request.setRequestHeader("Accept","application/json");
    Request.send();

    Request.onreadystatechange=function(){
        if(Request.readyState===4 && Request.status==200 ){
            const response=this.responseText;
            const parsedResponse=JSON.parse(response);
            console.log(parsedResponse.joke);
            quoteElement.textContent = parsedResponse.joke;
        }
         else {
                console.error=("Error");
             }
    }

 }
fetchJoke();