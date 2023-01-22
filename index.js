function changeDescription(value){
    document.getElementById("descriptions").innerHTML=value;
}

let myDescriptions = ["Medical Assistant", "Pokemon Master", "Archery Enthusiast", "Yayas Tea Enjoyer", "Software Developer"];
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
}, 3000);