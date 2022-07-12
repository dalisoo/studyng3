function calcular() { 
var res = document.getElementById('res')
var nomeAluno = document.getElementById('txtnome').value
var altura = document.getElementById('txtn1')
var peso = document.getElementById('txtn2')

if (altura.value.length == 0 || peso.value.length == 0 ) { 
        window.alert('[ERROR] PRENCHA CORRETAMENTE')
}
    else  { 
    var pesoAluno = Number(peso.value)
    var alturaAluno = Number(altura.value)
    var imcAluno = pesoAluno /  ( alturaAluno * alturaAluno) 
    res.innerHTML = `<p>  Calculando o IMC do aluno <strong>${nomeAluno} </strong>.. </p>`
    res.innerHTML += `<p> O IMC do aluno equivale a: ${Math.trunc(imcAluno)}kg.</p>`
}
    if ( imcAluno < 18.5 )
    { 
        res.innerHTML += ` O aluno está Magro.`
        res.style.backgroundColor = 'rgb(49, 234, 255)'
    }
        else if ( imcAluno >=18.5 && imcAluno <= 24.9 ) { 
            res.innerHTML += ` O aluno está Saudável.`
            res.style.backgroundColor = 'rgb(0, 250, 71)'

        }
            else if ( imcAluno >=25 && imcAluno <29.9) { 
                res.innerHTML += ` O aluno está Sobrepeso.`
                res.style.backgroundColor = 'rgb(242, 250, 0)'

            }
                else if ( imcAluno >=30 && imcAluno <= 34.9 ) { 
                    res.innerHTML += ` O aluno está em Obesidade Grau I `
                    res.style.backgroundColor = 'rgb(250, 192, 0)'
                    
                }
                    else if ( imcAluno >=35 && imcAluno <=39.9) {
                        res.innerHTML += ` O aluno está em Obesidade Severa Grau II`
                        res.style.backgroundColor = 'rgb(250, 75, 0)'

                    }
                        else if ( imcAluno >= 40) {
                            res.innerHTML += ` O aluno está em Obesidade Morbida Grau III`
                            res.style.backgroundColor = 'rgb(200, 0, 250)'

                        }
            }


