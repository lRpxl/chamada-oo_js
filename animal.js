class Animal {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }

    emitirSom() {
    console.log(`${this.nome} está fazendo um som.`);
    }
}
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
    }

    emitirSom() {
    console.log(`${this.nome} está latindo.`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
    }

    emitirSom() {
    console.log(`${this.nome} está miando.`);
    }
}

const cachorro1 = new Cachorro('Rex', 3, 'Labrador');
const gato1 = new Gato('Mia', 2, 'Cinza');
const cachorro2 = new Cachorro('Bolt', 4, 'Pastor Alemão');

cachorro1.emitirSom(); // Rex está latindo.
gato1.emitirSom();      // Mia está miando.
cachorro2.emitirSom();  // Bolt está latindo.
