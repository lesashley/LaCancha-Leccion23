
var content = document.getElementById("section");
function crearBalon(clase) {
  var pelota = document.createElement("div");
  pelota.setAttribute("class",clase);
  return pelota;
}

var cancha = document.createElement("div");
cancha.setAttribute("class","box-cancha");

var arco1= document.createElement("div");
arco1.setAttribute("class","arco-derecho");

var arco2=document.createElement("div");
arco2.setAttribute("class","arco-izquierdo");

var circuloCancha = document.createElement("div");
circuloCancha.setAttribute("class","circulo-cancha");

var text = document.createElement("span");

content.appendChild(cancha);
content.appendChild(text);
text.appendChild(document.createTextNode("Laboratoria 2017 - Leslie Avendaño Lopez"));
cancha.appendChild(arco1);
cancha.appendChild(arco2);
cancha.appendChild(circuloCancha);
cancha.appendChild(crearBalon("pelota-3"));
arco1.appendChild(crearBalon("pelota-1"));
arco2.appendChild(crearBalon("pelota-2"));
