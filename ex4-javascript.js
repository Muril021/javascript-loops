let idade
let sexo
let humor
let i=0
let calmo=0
let nervosa=0
let agressivo=0
let otcalmo=0
let nervoso40=0
let calmo18=0

while(i<=5){
    idade=parseInt(prompt('Digite a sua idade:'));
    sexo=parseInt(prompt('Digite o seu sexo: \n\n1) Feminino\n2) Masculino\n3) Outro'));
    humor=parseInt(prompt('Digite seu humor: \n\n1) Calmo\n2) Nervoso\n3) Agressivo'));

    if(humor==1){
        calmo=calmo+1;
    }
    if(sexo==1 && humor==2){
        nervosa=nervosa+1;
    }
    if(sexo==2 && humor==3){
        agressivo=agressivo+1;
    }
    if(sexo==3 && humor==1){
        otcalmo=otcalmo+1;
    }
    if(humor==2 && idade>40){
        nervoso40=nervoso40+1;
    }
    if(humor==1 && idade<18){
        calmo18=calmo18+1;
    }
    i=i+1;
}
document.write(`O número de pessoas calmas é de: ${calmo}.`);
document.write(`\nO número de mulheres nervosas é de: ${nervosa}.`);
document.write(`\nO número de homens agressivos é de: ${agressivo}.`);
document.write(`\nO número de pessoas de outro sexo calmas é de: ${otcalmo}.`);
document.write(`\nO número de pessoas nervosas com mais de 40 anos é de: ${nervoso40}.`);
document.write(`\nO número de pessoas calmas com menos de 18 anos é de: ${calmo18}.`);
