const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
//marvel_heros.push(dc_heros)

//console.log(marvel_heros);

 const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros);\

const all_new_heros = [... marvel_heros, ...dc_heros]
//console.log(all_new_heros);  foe indivisulllay array print..

const anothr_array = [1,2,3,[4,5,6],7,[8,9]]// you can also give the deepth of the array..
const real_another_array = anothr_array.flat(Infinity)// infinity is for server is look after at the end of array..!
console.log(real_another_array);



/// for data sellection..!
console.log(Array.isArray("yogesh")); // for asking quwstions to Array. Is it array or not..!
console.log(Array.from("yogesh"));// it will convert it into array...!
console.log(Array.from({name : "yogesh"}));// intersting case it will only print empty array []..!


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));