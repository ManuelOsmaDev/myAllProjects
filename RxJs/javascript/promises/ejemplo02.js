new Promise( (resolver,rechazar)=>{
    console.log("inicial");
    resolver();
})
.then( ()=>{
    throw new Error("error fallo esta vaina");

    console.log("haz esto");
})
.catch( ()=>{
    console.log("haz Aquello");
})

.then( ()=>{
    console.log("por ultimo");
})