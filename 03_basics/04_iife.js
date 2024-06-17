// immediately invoked function expressions (IIFE)

(function chai (){  // remove for globsl scopes polluction live ver lots things
    //console.log(` DB CONNECTED`);
})();// use semi colon for end the statement..! for excute net code
// chai()

(   (name) => { // namned iife
    console.log(`DB CONNECTED TWO ${name}`);
})(`yogesh`)
 

// for excute two iife remove semi colon from first code..!



