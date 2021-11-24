// get element
let money = document.getElementById('money');
let person = document.getElementById('person');
let btnOk = document.getElementById('btnOk');
let btnCancel = document.getElementById('btnCancel');
let result = document.getElementById('result');


btnOk.addEventListener('click',() => {
    //alert(money.value)
    //result.innerHTML = 'WoW WoW WoW '
    if( money.value.trim().length ==0){
        alert('Please Input Money')
    }else if (person.value.trim().length == 0){
        alert('Please Input Person')
    }else{
        let moneyshare = Number(money.value) / Number(person.value)
        result.innerHTML = moneyshare.toFixed(2)
    }
})
btnCancel.addEventListener('click',() => {
    //alert(person.value)
    money.value = ''
    person.value = ''
    result.innerHTML = '0.00'
})
