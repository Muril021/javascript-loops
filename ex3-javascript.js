let young=0;
let old=0;
let age=0;

while(age>=0){
    age=parseInt(prompt('Digite a sua idade:'));

    if(age<21){
        young++
    }else if(age>50){
        old++
    }
}

document.write(`O total de pessoas com menos de 21 anos é de: ${young}.`);
document.write(`<br>`);
document.write(`O total de pessoas com mais de 50 anos é de: ${old}.`);