// Promise.all(
//     [
//         new Promise(resolve => setTimeout(() => resolve(1),3000)),
//         new Promise(resolve => setTimeout(() => resolve(2),2000)),
//         new Promise(resolve => setTimeout(() => resolve(3),1000)),
//     ]
// ).then(alert)

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadScript('/my/script.js');


