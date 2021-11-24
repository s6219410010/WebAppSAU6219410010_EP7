let weight = document.querySelector('#weight')
let height = document.getElementById('height')
let calBMI = document.getElementById('calBMI')
let bmiValue = document.getElementById('bmiValue')
let bmiResault = document.getElementById('bmiResault')

function calculateBMI(){
    if(weight.value.trim().lenght == 0){
        alert('Please Input Weight')
    }else if (height.value.lenght == 0){
        alert('Please Input Height')
    }else{
        let bmiValueShow = Number(weight.value) / 
        ((Number(height.value)/100)**2 )
        
        bmiValue.innerHTML = bmiValueShow.toFixed(2)

        if(bmiValueShow < 18.50){
            bmiResault.innerHTML = 'Thin'
        }else if(bmiResault <=22.90){
            bmiResault.innerHTML = " GOOD"
        }else if(bmiResault <=24.90){
            bmiResault.innerHTML = " Fat"
        }else if(bmiResault <=29.90){
            bmiResault.innerHTML = " Very Fat"
        }else {
            bmiResault.innerHTML = " Super Fat"
        }
    }
}

calBMI.addEventListener('click' ,calculateBMI)

