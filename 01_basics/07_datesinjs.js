/// dates


let myDate = new Date()

//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());

//let myCreatedDate = new Date(2024 , 0,13)
//let myCreatedDate = new Date(2024 , 0,25,5,13)
//let myCreatedDate = new Date("2024-06-13")//yy mm dd 

//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//console.log(Math.floor(Date.now()/1000));// sec


let newDate = new Date()
//console.log(newDate.getMonth);// months ,years , hours , days..etc..



//`${newDate.getDay()} and the time`

newDate.toLocaleString('default ', {
    weekday:"long"//timeZone:'' etc..
})