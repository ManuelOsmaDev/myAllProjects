import fetch from 'node-fetch';

async function showAvatar() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let user = await response.json();
    console.log(user);
}

showAvatar()

