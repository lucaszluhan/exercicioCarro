enum Cambio {
   m = 'Manual',
   a = 'Automatico',
}

interface Carro {
   marca: string;
   modelo: string;
   ano: number;
   cambio: Cambio;
   cor?: string;
}

function logModelo(carro: Carro): string {
   if (carro.cor) {
      return `Carro ${carro.modelo} - ${carro.marca}, ano ${carro.ano}, cambio ${carro.cambio}, cor ${carro.cor}`;
   }
   return `Carro ${carro.modelo} - ${carro.marca}, ano ${carro.ano}, cambio ${carro.cambio}`;
}

let carroDoLucas: Carro = NovoCarro('BMW', '320i', 2020, Cambio.a, 'preta');

console.log(logModelo(carroDoLucas));

function returnCambio(cambio: Cambio) {
   return cambio;
}

function NovoCarro(marca: string, modelo: string, ano: number, cambio: Cambio, cor?: string): Carro {
   this.marca = marca;
   this.modelo = modelo;
   this.ano = ano;
   this.cambio = cambio;
   this.cor = cor;
}

let carroDoLucas2 = new NovoCarro(carroDoLucas2, 'Audi', 'A3', 2008);
