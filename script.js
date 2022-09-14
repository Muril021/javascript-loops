// WHILE
let ageText=prompt('Digite a sua idade:');
let age=Number(ageText);    // "let" foi usada porque a variável pode ser alterada dentro do "while".

while(age<18){
    ageText=prompt('O site só pode ser acessado por maiores de idade! Digite sua idade novamente:');
    age=Number(ageText);
}

document.write('Seja bem vindo!');

// DO-WHILE
let optionText

do{
    optionText=prompt('Escolha uma opção:\n\n1 - Caviar\n\n2 - Almôndegas\n\n3 - Feijoada com Fígado');
    option=Number(optionText);
}while(option<1||option>3)

document.write('<br><br>');

// SWITCH-CASE
switch(option){
    case 1:
        document.write('Você escolheu caviar!');
        break;
    case 2:
        document.write('Você escolheu almôndegas!');
        break;
    case 3:
        document.write('Você escolheu feijoada com fígado!');
        break;
}

// FOR/VETORES E MATRIZES
const boletim=[];
const qtdMaterias=3;
const qtdProvas=3;

for(let i=0; i<qtdMaterias; i++){
    boletim[i]=[];
    for(let j=0; j<qtdProvas; j++){
        const nota=prompt(`Digite a nota da ${j+1}ª prova da ${i+1}ª matéria`);
        boletim[i][j]=Number(nota);
    }
}

for(let i=0; i<qtdMaterias; i++){
    document.write(`<br>${i+1}ª Matéria: `);
    for(let j=0; j<qtdProvas; j++){
        document.write(`${boletim[i][j]} `);
    }
}