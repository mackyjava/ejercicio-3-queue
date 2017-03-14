function Queue(){
  this.nombres = Array.prototype.slice.call(arguments,0);
  this.enqueue= enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.print = print;

  function enqueue(elemento){
    this.nombres.push(elemento);
  };
  function dequeue(){
    return this.nombres.shift();
  };
   function empty(){
    return this.nombres.length == 0;
  };
   function print(elemento){
     return document.write(this.nombres)
   };
}
var usuario = parseInt(prompt("Introduzca el numero de usuarios"));
var numero = new Queue();
for(var i = 1; i<=usuario;i++){
  numero.enqueue(i);
}console.log(numero);
var nombres = new Queue();
for (var i= 1; i<=usuario;i++)
nombres.enqueue(prompt("Introduce nombre de usuario"+i));

var prioridad =[];
for( var i= 1; i<=usuario; i++){
prioridad.push( this.numero.dequeue()+" "+this.nombres.dequeue());
}
document.write(prioridad);
