
// console.log("one");

// setTimeout(()=>{
//     console.log("one.one");  output - one
// },2000);                              two
                                    //   two.two
// console.log("two");                   one.one
// setTimeout(()=>{
//     console.log("two.two");

// },0);

let a = true;
setTimeout(()=>{
    let count = 0;                      // output - nothing 
    while(a){
        count++;
        console.log(count);
    }
},0)
a=!a;