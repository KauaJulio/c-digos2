var weight = [35,38,42,45,43,34,36,41,48,32];
var soma = 0

for(var k = 0; k <weight.length; k++) {
  soma = soma + weight[k]
}

media = soma / weight.length
console.log(media)

function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

