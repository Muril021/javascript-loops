let numText;
let num=Number(numText);

for(num=1000; num<=1999; num++){
    if(num%11==5){
        document.write(`${num}<br>`);
    }
}