const openModal = document.getElementById('open-modal')
const closeModal = document.getElementById('close-modal')
const modal = document.getElementById('modal')
const f = document.getElementById('f')
const ff = document.getElementById('ff')
const sex = document.getElementsByName('radsex')



if (f[0].checked) { 
  const abrirModal = ()=> { 
    modal.style.top='0'
  
  }
  const fecharModal = ()=> { 
    modal.style.top='-100%'
  
  
  }
}
else if ( f[1].checked) { 
  const abrirModal = ()=> { 
    modal.style.top='0'
  
  }
  const fecharModal = ()=> { 
    modal.style.top='-100%'
  
  
  }
}

