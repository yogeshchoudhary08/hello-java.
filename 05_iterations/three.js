// for of loop

["","",""] // strings
[{},{},{}] //obj

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(arr);
}

let greetings = "hello devlopers"
for (const greet of greetings) {
    // if (greetings == 0 ) {
        // console.log(`detacted o  ${greetings}`);
    
    //console.log(`each char is ${greet}`);
    
}

//maps 

const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "UNITED SATATE OF AMERICA")
map.set("FR","FRANCE")
//console.log(map);

for (const [key,value] of map) { // key will cover output into []
    //console.log(key , `:-` , value);
}


const myObject = {
    game1 : 'NFS',
    game2: 'mustafa',
    game3: 'dragon ball'

}
// for (const [key , value] of myObject) {
    // console.log(key , `:-`,value);
    // 
// }

