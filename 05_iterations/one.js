// for loop 

for (let i  = 0; i  <= 10; i ++) {
    const element = i ;
    if (element==5) {
        //console.log(`5 is best`);
    }
    //console.log(element);
}

//console.log(element);


for (let i = 1; i <= 10; i++) {
    //console.log(`inner loop value ${i}`);
  for (let j = 1; j <=10; j++) {
   //console.log(`inner loop value ${j} , and inner loop ${i}`);
    //console.log( i + `*`+ j  + `= ` +  i*j );
  }
    
}  

let myArray = [ "batman","chota bheem", "maharani indumati"]
//console.log(`array length is ,` + myArray.length);

for (let i = 1; i <   myArray.length; i++){
   // const element = myArray[i];
    

    //console.log(element);
   
}

//break and cont

// for (let i = 1; i < 20; i++) {
//   console.log(`value of i is ${i}`);
//     if (i == 5  ) {
//       console.log(`ditacted 5  `);
//       break ;  
//     }
// }


for (let i = 1; i < 20; i++) {
  console.log(`value of i is ${i}`);
    if (i ===5  ) {
      console.log(`ditacted 5  `);
    continue;
    }
}



