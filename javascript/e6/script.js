function verificar() {
    var bgImg = document.getElementById('res')
    var bgRes = document.getElementById('res1')
    var bgRes1 = document.getElementById('res2')
    var bgRes2 = document.getElementById('res3')
    var btn = document.getElementById('btn')
    var sex = document.getElementsByName('radsex')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
     
    const colecao_series_programacao = [ 
        { nome:"Erased", sinopse: "Depois de se deparar com a mãe morta, Satoru faz uso da sua habilidade de viajar no tempo para recuar 18 anos e tentar impedir a morte dela e a de três colegas seus.", ano: "2013"},
        { nome: " Hunter x Hunter", sinopse: "O jovem Gon sonha em ser um Hunter (caçador), assim como seu pai, que o abandonou quando ainda era pequeno. Decidido a ir atrás do que deseja, ele tem a chance de fazer um teste físico dificílimo para provar que ele é o melhor Hunter do mundo.", ano: "2011"},
        { nome:"Inazuma Eleven", sinopse: "Ramon Junior High School tem um programa de futebol horrível que está prestes a ser encerrado. Endou Mamoru, um jogador de estrelas que já teve problemas, e um bando de jogadores trapaceiros reconstituem o time e crescem juntos enquanto lutam para se tornarem formidáveis e sacudir o mundo do futebol.", ano:"2008"},
        { nome:"Naruto", sinopse:"Naruto é um jovem órfão habitante da Vila da Folha que sonha se tornar o quinto Hokage, o maior guerreiro e governante da vila. Ao se graduar como ninja, descobre que tem um demônio raposa selado dentro de si.", ano:"1997"}
    
    
    ];
    
     if ( sex[0].checked) { 
        bgImg.style.backgroundImage='url(erased.jpg)'
        bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
        bgRes.innerHTML = ` Nome: ${colecao_series_programacao[0].nome} `
        bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[0].ano} `
        bgRes2.innerHTML = `  Sinopse: <strong> ${colecao_series_programacao[0].sinopse}  </strong>`
    
    
     }
     else if ( sex[1].checked) { 
        bgImg.style.backgroundImage='url(hxh.jpg)'
        bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
        bgRes.innerHTML = ` Nome: ${colecao_series_programacao[1].nome} `
        bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[1].ano} `
        bgRes2.innerHTML = ` Sinopse: <strong>  ${colecao_series_programacao[1].sinopse} </strong> `
    
    
    
     }
     else if (sex[2].checked) { 
        bgImg.style.backgroundImage='url(inazuma.jpg)'
        bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
        bgRes.innerHTML = ` Nome: ${colecao_series_programacao[2].nome} `
        bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[2].ano} `
        bgRes2.innerHTML = ` Sinopse: <strong> ${colecao_series_programacao[2].sinopse} </strong>`
    
    
    
     }
     else if (sex[3].checked) { 
        bgImg.style.backgroundImage='url(naruto.jpg)'
        bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
        bgRes.innerHTML = ` Nome: ${colecao_series_programacao[3].nome} `
        bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[3].ano} `
        bgRes2.innerHTML = `  Sinopse: <strong>${colecao_series_programacao[3].sinopse} </strong>`
    
    
    
    
     }
    
    
     }