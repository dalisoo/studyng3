var fundo = document.getElementById('q1')
var song = "narutosong.mp3"


function narutoClassic() { 
    fundo.style.backgroundImage = 'url(naruto2.gif)'
}
function narutoShippuden() {    
    fundo.style.backgroundImage = 'url(maruto1.gif)'
    Audio(song).play()
}
function sakuraClassic() { 
    fundo.style.backgroundImage = 'url(sakura1.gif)'
}

function sasukeClassic () { 
    fundo.style.backgroundImage = 'url(sasukeClassic.gif)'
}
function sasukeShippuden() { 
    fundo.style.backgroundImage = 'url(sasukeShippuden.gif)'
    fundo.style.backgroundSize = '600px'

}