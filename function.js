function sayhello(){
    console.log("hello");
}                                 // output - 
                                       // hello             
sayhello();






   
function  add(a,b){
    return a+b;                           //output -
                                        // 10000
}                                       // ab    
console.log(add(4000,6000));
console.log(add("a","b"));







// function product(a,b){
//     return a*b;              // if  we not write function it will still give output 
// }

let product1=(a,b)=>a*b;         // because of this line the output is still coming 

                                            //  output -
console.log(product1(2,6));                            // 12
console.log(product1(65,78));                          // 5070
console.log(product1(12,2))                            // 24


function a(d){
    d();
    console.log("inside a")
}
                                // output - inside b 
                                         // inside a 
function b(){
    console.log("inside b");
} 
a(b);






function outer(){
    let count = 0;                            //     output -
    function inner(){                           //              1
        count++;                                  //            2
        console.log(count);                        //           3
    }                                               //          4
    return inner;
}

let res=outer();
res();
res();
res();
res();