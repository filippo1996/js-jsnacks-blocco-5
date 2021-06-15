/**
 * Creare un array di oggetti:
 *  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
 */


var bici = [
    {
        nome: 'speed',
        peso: 25
    },
    {
        nome: 'alvo',
        peso: 13
    },
    {
        nome: 'km',
        peso: 13
    }
];

//var pesoMin = bici[0];
var pesiLeggeri = [bici[0]];

for(var i = 1; i < bici.length; i++){
    if(bici[i].peso <= pesiLeggeri[0].peso){
        if(bici[i].peso !== pesiLeggeri[0].peso){
            pesiLeggeri.shift();
        }
        pesiLeggeri.push(bici[i]);
    }
}

//console.log(pesoMin);
console.log(pesiLeggeri);



/**
 * Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
 */


var squadre = [
    {
        nome: 'juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
];



for(var i = 0; i < squadre.length; i++){
    squadre[i].puntiFatti = getIntRandom(1, 20);
    squadre[i].falliSubiti = getIntRandom(1, 10);
}

console.log(squadre);



function getIntRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




/**
 * Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.
 */


var zucchine = [];

for(var i = 0; i < 10; i++){
    var obj = {};
    obj.varieta = 'Siciliane';
    obj.peso = getIntRandom(1, 8);
    obj.lunghezza = getIntRandom(5, 10);

    zucchine.push(obj);
}

console.log(zucchine);

var pesoTotale = 0;

for(var i = 0; i < zucchine.length; i++){
    pesoTotale += zucchine[i].peso;
}

console.log('Il peso totale di tutte le zucchine è ' + pesoTotale);



function getIntRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/**
 * Crea un array di 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine
 */


 var zucchine = [];

 for(var i = 0; i < 10; i++){
     var obj = {};
     obj.varieta = 'Siciliane';
     obj.peso = getIntRandom(1, 8);
     obj.lunghezza = getIntRandom(1, 30);
 
     zucchine.push(obj);
 }
 
 //console.log(zucchine);

var zucchineMinori = [], pesoMinore = 0;
var zucchineMaggiori = [], pesoMaggiore = 0;

for(var i = 0; i < zucchine.length; i++){
    if(zucchine[i].lunghezza <= 15){
        zucchineMinori.push(zucchine[i]);
        pesoMinore += zucchine[i].peso;
    }else{
        zucchineMaggiori.push(zucchine[i]);
        pesoMaggiore += zucchine[i].peso;
    }
}

console.log(zucchineMinori, zucchineMaggiori);
console.log('Il peso totalate delle zucchine di lunghezza inferiori o uguali a 15cm è ' + pesoMinore + ' kg');
console.log('Il peso totalate delle zucchine di lunghezza superiori a 15cm è ' + pesoMaggiore + ' kg');


 function getIntRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
