var util = require('util');

function Parent(){

}
Parent.prototype.salHello = function (){
    console.log('Hello world, from parent class');

}
var obj = new Parent();
function Child(){


}
util.inherits(Child, Parent);
var obj2 = new Child();
obj2.salHello();