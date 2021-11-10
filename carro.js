"use strict";
var Cambio;
(function (Cambio) {
    Cambio["m"] = "Manual";
    Cambio["a"] = "Automatico";
})(Cambio || (Cambio = {}));
function logModelo(carro) {
    if (carro.cor) {
        return "Carro " + carro.modelo + " - " + carro.marca + ", ano " + carro.ano + ", cambio " + carro.cambio + ", cor " + carro.cor;
    }
    return "Carro " + carro.modelo + " - " + carro.marca + ", ano " + carro.ano + ", cambio " + carro.cambio;
}
var carroDoLucas = NovoCarro('BMW', '320i', 2020, Cambio.a, 'preta');
console.log(logModelo(carroDoLucas));
function returnCambio(cambio) {
    return cambio;
}
function NovoCarro(marca, modelo, ano, cambio, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cambio = cambio;
    this.cor = cor;
    return this;
}
var carroDoLucas2 = new NovoCarro(carroDoLucas2, 'Audi', 'A3', 2008);
