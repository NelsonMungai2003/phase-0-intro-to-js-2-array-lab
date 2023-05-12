// Write your solution here!
const cats=['Milo','Otis','Garfield']
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    
    return[...cats.slice(),name]

}
function prependCat(name){
    let copyCats=[];
    copyCats=[name,...cats.slice()]
    return copyCats

}
function removeLastCat(){
    let copyCats=[]
    copyCats=cats.slice(0,-1)
    return copyCats
}
function removeFirstCat(){
    let copyCats=[]
    copyCats=cats.slice(1)
    return copyCats
}