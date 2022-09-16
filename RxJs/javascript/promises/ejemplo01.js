// function exitoCallback(resultado) {
//     console.log("exitoCallback" + resultado);
// }

// function falloCallback(error) {
//     console.log("fallo"+ error);
// }



// crearArchivoAudioAsync(audioConfig).then(falloCallback, exitoCallback);

// let promesa2 = hazAlgo().then(exitoCallback,falloCallback);
// // const promesa = crearArchivoAudioAsync(audioConfig)
// // promesa.then(falloCallback,exitoCallback)


// // const promesa2 = hazAlgo();



// //TODO: piramide callBack
// // hazAlgo(function(resultado) {
// //     hazAlgoMas(resultado, function(nuevoResultado) {
// //       hazLaTerceraCosa(nuevoResultado, function(resultadoFinal) {
// //         console.log('Obtenido el resultado final: ' + resultadoFinal
// //       }, falloCallback);
// //     }, falloCallback);
// //   }, falloCallback);

hazAlgo().then(function(resultado){
    return hazAlgoMas(resultado);
})
.then(function(nuevoResultado){
    return hazLaTerceraCosa(nuevoResultado);
})

.then(function(resultadoFinal) {
    console.log('obtenido el resultado final', resultadoFinal);
})
.catch(falloCallback);