let yr_name = document.getElementById('yrname')
let show_name = document.getElementById('showname')



function showNameAlert() {
    alert(yr_name.value)
}

function showName() {
    show_name.innerHTML = yr_name.value

}

function notShowName() {
    show_name.innerHTML = '???'
}

function alartAge() {
    let age = new Date().getFullYear() - yr_byear.value
    console.log(age)
}

let yr_byear = document.getElementById('yrbyear')
let click_b = document.getElementById('clickB')
let show_age = document.getElementById('showage')

click_b.addEventListener('click', () => {
    let age = new Date().getFullYear() - yr_byear.value
    show_age.innerHTML = age
})

click_b.addEventListener('mouseover', alartAge)

let yr_sexm = document.getElementById('yrsexm')
let yr_sexf = document.getElementById('yrsexf')
let click_c = document.getElementById('clickC')
let showsex = document.getElementById('showsex')

click_c.onmouseover = () => {
    if(yr_sexm.checked == true) {
        //alert('You are Male')
        console.log('You are Male')
    }
    if(yr_sexf.checked == true){
        //alert('You are Female')
        console.log('You are Female')
    }
}

function showPerson(){
    if(yr_sexm.checked == true){
        showsex.innerHTML = 'Male'
    }
    if(yr_sexf.checked == true){
        showsex.innerHTML = 'Female'
    }
}

click_c.onclick = showPerson