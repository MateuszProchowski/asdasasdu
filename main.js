const number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11]
number.push (11 , "dwanascie")
let liczba = 10
number.push(liczba)
console.log(number)

const names = new Array ()
for (let i=1 ; i <= 10 ; i ++) {
    names.push("Piotr" + i)
}
console.log(names)


const tabliszyn = new Array("Marek" [0], "Łowca"[1] , 20 [2] , "MDA" [3] , 30 [4
])
tabliszyn.pop(tabliszyn , [0] , [1] , [2 , [3]])

console.log(tabliszyn)


const oneHundredElements = new Array()
    for (let i = 1 ; i <= 100 ; i++){
        oneHundredElements.push ("nothing" + i)
    }

    for ( let i = 1 ; i <=100; i++)
    oneHundredElements.pop(i)
    console.log(oneHundredElements)

    const odwrocenie = new Array()
    for (let i = 1 ; i <= 100 ; i++){
        odwrocenie.push ("nothing" + i)
    }
    odwrocenie.reverse()
    console.log(odwrocenie)

const liczeby = new Array() ; 
function odejmowanie() {
    for(let i = 100 ; i > 0 ; i--)
    liczeby.push(i)
}
odejmowanie()
console.log(liczeby)

const tablica = liczeby.filter(item => {
    if (item > 40 && item < 60) {
        return item
    }
})
console.log(tablica)


const konstowaty = new Array ()
