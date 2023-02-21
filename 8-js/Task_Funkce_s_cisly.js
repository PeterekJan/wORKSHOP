// f) Funkce s čísly
//    1. Vytvořte fci ```square```, která bude mít na vstupu parametr ```a``` 
//      (číslo musí být větší než 0), vypočítá obsah čtverce a toto číslo vypište pomocí ```console.log()```

function square(a){
    if(a <= 0){
        console.log("Invalid value");
    }else if(typeof a === 'string'){
        console.log("Value can't be string")
    }else{
        console.log(`The result is: ${a * a}`)
    }
   
}
square(2)

console.log("------------square -----------")

/////////////2.Metoda//////////////
// function square(a){
//     a <= 0 ? console.log("Invalid value ") : typeof a === 'string' ? console.log("Value can't be string") : console.log(a*a)
   
//     return

// };
// square("aaaa")


//    2. Vytvořte fci ```rectangle```, která bude mít dva vstupní parametry ```a``` a ```b``` 
//       (čísla musí být větší než 0), a která vypíše obsah obdélníku stejn ějako v předchozím bodě


function rectagle(i,j){
    if(typeof i === 'string' || typeof j === 'string' ){
        console.log("Value can't be string")
    }else if(typeof j === 'undefined'){
        console.log("Value j can't be undefined")
    }else {
        console.log(`Value of rectagle's content is: ${i * j}`)
    }

}

rectagle(2,3)

console.log("--------rectagle------------")

//    3. Vytvořte fci ``highest``, která bude mít na vstupu pole čísel.
//       Úkolem fce bude v tomto poli najít nejvyšší číslo a to vrátit / vypsat do konzole.




function highest(number){
   var max = number[0];
   for(var i = 0; i < number.length; i++){
        var element = number[i]
        if(element > max){
            max = element;
        }
    }
    return max;
}
var arr = [7,88,25,15,5,72,1.6,1,2,8]


console.log(`The highest elemenet is: ${highest(arr)}`)

console.log("------------------highest----------------")

///////////////////////////////////////////////////////////////////////

//    4. Vytvořte fci ``calculateGeometry``, která bude mít na vstupu dva parametry ``a`` a ``b``,
//       přičemž ``b`` může zůstat prázdné. Tato fce vypočte obsah čtverce nebo obdélníku na základě toho, jaká data přijdou z parametrů.
//       Tj, pokud nebude ``b`` vyplněno, jedná se pravděpodobně o čtverec


function calculateGeometry(a,b){
    //a= Number(a)
    //b= Number(b)
    
    if(!isNaN(a) && !isNaN(b)){
        console.log(`Content of rectagle is: ${(a * b).toFixed(2)}`)
    }else if(!isNaN(a) && typeof b === 'undefined'){
        console.log(`Content of square is: ${(a * a).toFixed(2)}`); //odfiltrovani vsech stringu => typeof a,b === 'string'
    }else if(isNaN(a) || isNaN(b)){
            console.log(`Value can't be string`);
    };
    
};
calculateGeometry(20,1)


//    5. Zajistěte, aby všechny geometrické fce bylo možno volat i s hodnotou 0.1 a zároveň aby jako argument akceptovaly pouze číselné typy.
//       Tzn aby nebylo možné zadat "xxx" jako hodnotu


//    6. Napište fci, která bude mít jako vstupní hodnotu pole čísel (reálná čísla). Tato fce vrátí objekt s parametry:
//        - ``count`` - počet prvků
//        - ``min`` - minimální hodnota
//        - ``max`` - maximální hodnota
//        - ``total`` - součet hodnot
//        - ``avg`` - aritmetický průměr
//        - ``modus`` - modus - nejčastejší vyskyt
//        - ``median`` - medián - střední hodnota seřazené posloupnosti
console.log("-------------CalculateGeometry-------------------")

var newArray = realNum([3,10,0.1,0.1,15,88,101,88,72,88,-5]);

function realNum(newArray){

    newObject = {
        count: newArray.length,
        min: 0,
        max: 0,
        total:0,
        avg: 0,
        modus:[],
        median:0
       
    };
    function minNum(number){
        var min = 0;
        for(var i = 0;i < newArray.length; i++){
            var element = number[i];
            if(element < min){
                min = number[i]
            }
        }
        return min;
      
};

var result = minNum(newArray)
newObject.min = result
    //console.log(result)
    console.log(element)


};
//console.log(newObject)

