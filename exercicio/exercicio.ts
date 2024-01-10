function multiplicacao(a: number, b: number): number {
    return a * b; 
}

function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const resultadoDaMultiplicacao: number = multiplicacao(22, 4);
const mensagemSaudacao:string = saudacao("Ramon Galdino");

console.log("Resultado da multiplicação:", resultadoDaMultiplicacao);
console.log("Mesagem de saudação:", mensagemSaudacao)