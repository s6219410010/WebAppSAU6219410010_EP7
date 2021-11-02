//Function
//ไม่ทำงานถ้าไม่ call

//1. ไม่ส่งค่ากลับ ไม่มีพารามิเตอร์
function funcNa( ){
    console.log('Na na na . . .');
}



//2. ไม่ส่งค่ากลับ มีพารามิเตอร์
function funcNi( x , y){
    let a = x+y
    console.log("a มีต่าเท่ากับ" + a)
}



//3. ส่งค่ากลับ ไม่มีพารามิเตอร์
function funcWow( ){


    return 999+1;
}



//4. ส่งค่ากลับ มีพารามิเตอร์
function funcWee(x, y, z ){
    let sum = x+y+z

    return 555 + sum;

}


funcNa()
funcNi(10,20)

console.log(funcWow())

let total = funcWee(10,20,30)
//alert( total )

//---------------------------------
function funcNa(x,y = 20){
    console.log(x,y)
}
funcNa(10,100)
funcNa(50)

//----------------------------------
