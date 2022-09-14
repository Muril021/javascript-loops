let numb;
let sum=0;

do{
    numb=parseInt(prompt('Digite um número:'));
    if(numb!=0){
        sum=sum+numb;
    }
}while(numb!=0)

document.write(`A soma dos números inseridos é: ${sum}.`);