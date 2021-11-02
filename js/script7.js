function multiplyTable() {

    let number = document.getElementById("num").value

    let showResault = '';

    for (let i = 1; i <= 12; i++) {
        //console.log(i*number);
        showResault += number + ' x ' + i + ' = ' + (number*i) + '<br>'
        //showResault = showResault + number + ' x ' + i + " = " + (number*i) + '<br>'
    }

    document.getElementById('show').innerHTML = showResault
}