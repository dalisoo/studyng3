function tabuada() { 
var num = document.getElementById('txtn')
var tab = document.getElementById('seltab')

 if ( num.value.length == 0 ) { 
    window.alert(' número incorreto, preencha corretamente. ')
 }
 else { 
    tab.innerHTML = ''
    var c = 1 
    var n = Number(num.value)
    while ( c <=10) { 
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c} `
        tab.appendChild(item)
        c++
    }
 }
}