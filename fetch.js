const display = document.getElementById("authers");
const data = "https://jsonplaceholder.typicode.com/posts";


fetch(data)
    //handling feched data (promise)
    .then(response => {
        return response.json();
    })
    .then((data) => {
        let authers = data;
        display.innerHTML = data;
    })
    //handling an error incase it occures (reject)
    .catch(error => {
        return alert("an error occured");
        console.log("there was an error trying to fetch your data", error);
    })
