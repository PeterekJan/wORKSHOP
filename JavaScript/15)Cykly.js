//vypis bez cyklu

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

//vypis s cyklem

for(var i = 0; i < 10; i = i + 1 ){
    console.log(i);
}


for(var i = 1; i <= 5; i++){
    console.log(i + ":tada")

}

/*******************************************************/
var employees = ["David", "Jane", "Diana", "Peter", "Eduard"];
for(var i = 0; i < 3; i++ ){
    console.log(employees[i]);  // neumi se prispusobit zvetseni pole
}

/***********************************************/
var employees = ["David", "Jane", "Diana", "Peter", "Eduard"];
for(var i = 0; i < employees.length; i++ ){ // vypise vsechny cleny, podle poctu clenu
    console.log(employees[i]);  
}

/*********************************************/

//12x jmeno 


for(i = 0;i < 12; i++){
    console.log("David")
}

//vypis cisel od 0 do 10
for (var i = 0; i < 10; i++){
    console.log(i)
}



//vypiste cisla od 5 do 50 vcetne, ale nasobky 5

for(var i = 5; i <= 50; i = i + 5){
    console.log(i);
}


//vypiste cisla od 15 do 0

for(i = 15; i >= 0; i--){
    console.log(i)
}
////////////////////////////////////////////////
var toDo = ["Sestrihat video", "uklidit pokoj", "Vyluxovat"];
for(var i = 0; i < toDo.length; i++){
    console.log(`${i + 1}: ${toDo[i]}`);
}

var myArray = [];
for (var j = 0; j < 5; j++){
    myArray.push(j)
};
console.log(myArray)


/***************While cyklus**********************/


//while = dokud


for(var i = 0; i < 10; i++){
    console.log(i);
}

//toto je stejne jako var nahore
//while se pouziva pokud nezname presny pocet opakovani

var i = 0
while(i < 10){
    console.log(i);
    i++;
}


/*******************Do while cyklus************/
//for - musime znat pocet opakovani
for(var i = 0;i < 0; i++){
    console.log("David");    //nikdy se neprovede
}


//while - pocet opakovani muze byt pokazde ruzny, nemusi se provest ani 1x
var i = 0;
while(i < 0){
    console.log("David");
    i++;
}

//do while - nezname pocet opakovani, provede se minimalne 1x

var i = 0;
do {
    console.log("David");
    i++;
}while(i < 0);


/*********************BREAK, Continue***************************/

var wanted = ["Osoba1","Osoba2", "Osoba3"];
var traveler = prompt();

for(var i = 0; i < 3; i++){
    console.log(i);                             // zkouška ze vypise to, že cyklus pokracuje
    if( wanted[i] === traveler){
        console.log("Zadrzte ho")             ////Tady se neukonci cyklus a pokracuje dal pokud splni podminku 1(Osoba1)
    }
}


//////////////////////////////////////////////////////////

//break - zpusobi ukonceni cyklu

var wanted = ["Osoba1","Osoba2", "Osoba3"];
var traveler = prompt();

for(var i = 0; i < 3; i++){
    console.log(i);
    if( wanted[i] === traveler){
        console.log("Zadrzte ho")            
    break;                                          //Preruseni po prvnim pruchodu
    }
}


//////////////////////////////////////////

//continue - zastavi pruchod cyklem, ale cyklus pokracuje dal (zastavi prvni pruchod cyklem, ale pokracuje druhym opakovanim)
var wanted = ["Osoba1","Osoba2", "Osoba3"];
var traveler = prompt();

for(var i = 0; i < 3; i++){
    console.log(i);

    if( wanted[i] === traveler){
        console.log("Zadrzte ho")            
    continue;                                          //Preruseni po prvnim pruchodu a nasledne skoci zpatky nahoru a pak už projde cely
    }
    console.log("Toto se neprovede pote, co se narazi na continue")
}





let vysledok = 0;
function hodKockou(){
    for(let i = 0; i <= 5; i++){
        function jednotlivyHod(){
            for(let j = 0; j<=2; j++){
            let number = Math.ceil(Math.random() * 6);
            return number}}
        let result = jednotlivyHod();
        vysledok = vysledok + result;
}
}
hodKockou();
if(vysledok >= 25){
    console.log(`Ste vitaz, hodili ste ${vysledok}`);
}
else{
    console.log(`Skuste stastie znovu, hodili ste ${vysledok}`);
}

///////////////////////////FOR EACH - na vypis pole //////////////////////

var employees = ["David", "Harry", "Hermiona", "Ron", "Draco"];

employees.forEach(function(){
    console.log("Testujeme")    //vypise tolikrat kolik je clenu, forEach je cyklus 
})



/////////////////////////////////////////////////////

 employees.forEach(function(person){
     console.log(person)
 })

///////////////////////////////////////////////
 employees.forEach(function(person, index){

    console.log(index)
 })

 ///////////////////////////////////////////////////
 var toDo = ["vyvencit psa", "koupit kecup", "vymalovat pokoj", "udelat si svacu"];

 toDo.forEach(function(activity,index){
     var number = index + 1;
     console.log(`${number}. ${activity}`)
 });

 /////////////////////////////////////////////////////////////////


 