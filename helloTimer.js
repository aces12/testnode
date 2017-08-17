function sayHello(){
    console.log('Hello World');
}

//sayHello();
//setTimeout(function(){
//    sayHello();
//}, 3*1000);

setInterval(function(){
    sayHello();
    }
, 2*1000);