console.log('Hi js 9 . .')

function showname(name){
    console.log('สวัสดี' + name );
}


showname('แมว')
showname('มด')

function calsum(a,b){
    console.log('a+b ได้ค่าเป็น')
    return a+b;
}
console.log (calsum(10,20))

//alert(calsum(100,99))

let test1 = () => {
    console.log('Hello . . . ')
}

/*function test1(){
    console.log('Hello . . . ')
}*/

let test2 = (number) => {
    console.log('Hi . . . ' + number)
}

test1()
test1()
test2(200)