//let davhar = 3, ail = 3,orts = 3,toot = 26
//let orts1 = Math.ceil(toot/(ail*davhar))
//console.log(orts1,"orts");
//let x = toot-(orts1-1)*davhar*ail
//console.log(Math.ceil(x/ail),"davhar");
//if (x%ail == 0) {
//    console.log("3");
//} else{
//    console.log(x%ail);
//}



//let a = 10
//console.log((1+a)/2*a);

//let a = 2
//console.log((a*(a+1)*(2*a+1)/6)
//);

//let a = 5
//console.log((2+(((a+1)/2)-1)*2)/2*((a+1)/2));

//let a = 7200
//while (a>=10) {
//    a = a/10
//}
//console.log(Math.floor(a));






//*************/ Цифрүүдийн нийлбэр
//let a = 1258
//const b = a
//let oron = 0, x = 0
//while (a>1) {
//   a = a/10
//    oron = oron + 1
//}
//let oron2 = oron
//while (oron2>0) {
//   x = x + Math.floor((b%Math.pow(10, oron2))/Math.pow(10, oron2-1))
//  oron2 = oron2 - 1
//} 
//console.log(x);



//let a = 254
//const b = a
//let sda = 0
//let oron = 0, x = 0
//while (a>1) {
//   a = a/10
//  oron = oron + 1
//}
//let oron2 = oron
//while (oron2>0) {
//x = Math.floor((b%Math.pow(10, oron2))/Math.pow(10, oron2-1))
//if (x%2<1) {
//    sda = sda + x   
//} 
//oron2 = oron2 - 1
//} 
//console.log(sda);


//let a = 123477
//const b = a
//let sda = 0
//let oron = 0, x = 0
//while (a>1) {
//   a = a/10
//  oron = oron + 1
//}
//let oron2 = oron
//while (oron2>0) {
//x = Math.floor((b%Math.pow(10, oron2))/Math.pow(10, oron2-1))
//if (x%2==1) {
//    sda = sda + x   
//} 
//oron2 = oron2 - 1
//} 
//console.log(sda);

//*****Цифрийн давталт
//let a = 11231,too = 1, sda = 0
//const b = a
//let oron = 0, x = 0
//while (a>=1) {
//   a = a/10
//    oron = oron + 1
//}
//let oron2 = oron
//while (oron2>0) {
//   x =  Math.floor((b%Math.pow(10, oron2))/Math.pow(10, oron2-1))
//   if (x==too) {
//         sda = sda + 1  
//    } 
//  oron2 = oron2 - 1
//}
//console.log(sda);

//let a = 12320
 // let b = 0 //oron
 // const c = a 
  //let d = 0
 //let ar =[]
 //while (a>1) {
  //a = a / 10
 //b=b+1
  //}
  //while (b>=1) {
  //ar.push(Math.floor((c/Math.pow(10,b-1))%10));
  //b = b - 1  
 //}
  //console.log(Math.min(...ar));


//let a = 12320
 // let b = 0 //oron
//  const c = a 
//  let d = 0
// let ar =[]
// while (a>1) {
 // a = a / 10
 //b=b+1
  //}
  //while (b>=1) {
  //ar.push(Math.floor((c/Math.pow(10,b-1))%10));
  //b = b - 1  
 //}
  //console.log(Math.max(...ar));





 let a = 123402
 let b = 0 //oron
 const c = a 
 let d = 0, x = 0 
 while (a>1) {
 a = a / 10
 b=b+1
 } 
 const test = b
 while (b>=1) { 
 d = Math.floor((c/Math.pow(10,b-1))%10)
 x = x+ Math.floor((c/Math.pow(10,b-1))%10)*Math.pow(10,-b)    
 b = b - 1  
 }
     console.log(x*(Math.pow(10, test)));


//let a = 16
//const c = a
//let b = 0
//while (a>1) {
 //   a = a/2
 //   b = b + 1
//} 
//if (Math.pow(2, b)==c) {
 //   console.log("yes");
//} else{
  //  console.log("no");
//}



3iin zereg    
//let a = 9
//const b = a 
//let p = 0
//while (a>9) {
//p = p + 1
//a = a/3
//console.log(1);
//}
//console.log(b/Math.pow(3,p));


//let a = 120
//let n = 1
//if (a%2==0) {
//    while (a>1){
//        a = a/n
//        n = n + 1         
//   } console.log(n-1);
//} else{
//    console.log("no");    
//}






































































