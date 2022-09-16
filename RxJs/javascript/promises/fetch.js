import fetch from "node-fetch";

const placeholder = fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => console.log(data))



