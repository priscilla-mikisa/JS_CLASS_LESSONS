function greet(userName, calme){
    console.log(`Hello there ${userName}`);
    calme();
};

function intro(){
    console.log("This is me")
};

greet("Hellen", intro);

setTimeout(intro,1000);

setInterval(function(){
    console.log("This is an interval");
},3000);
