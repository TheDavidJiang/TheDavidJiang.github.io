function changeDescription(value){
    document.getElementById("descriptions").innerHTML=value;
}

let myDescriptions = ["hi", "hello", "wassup"];
let index = 0;

function nextDescription(){
    if (index < myDescriptions.length - 1){
        index+=1
        
    }
    else{
        index = 0
    }
}


//this is the timer event
setInterval(() => {
    changeDescription(myDescriptions[index]);
    nextDescription();
    console.log("this is index: ", index)
}, 3000);