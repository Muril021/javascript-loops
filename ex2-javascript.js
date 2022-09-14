let numPar=0;
let par=Number(numPar);
let numImpar=0;
let impar=Number(numImpar);

for(let i=0; i<10; i++){
    numText=prompt('Digite um número:');
    num=Number(numText);

    if(num%2==0){
        par++
    }else if(num%2==1){
        impar++
    }
}
document.write(`A quantidade de números pares é de: ${par}.`);
document.write(`<br>`);
document.write(`A quantidade de números ímpares é de: ${impar}.`);