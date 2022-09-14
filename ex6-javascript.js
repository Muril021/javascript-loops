let numb;
let media=0;
let numbs=0;

do{
    numb=parseInt(prompt('Digite um número:'));
    if(numb%3==0){
        media=media+numb
        numbs=numbs+1
    }
}while(numb!=0)

document.write(`A média dos múmeros múltiplos de 3 é: ${media/numbs}.`);