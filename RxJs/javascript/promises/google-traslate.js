import fetch from 'node-fetch';

const encodedParams = new URLSearchParams(); 
encodedParams.append("q", "English is hard, but detectably so");

const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '1ffb461e29mshb6a9fdfaf6e955ap1c270djsn25f8ffa9f768',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    body: encodedParams
}

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
    .then(response => response.json())
    .then(response => console.log(response.data.detections))
    .then(error => console.log(error))