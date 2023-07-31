let menu = document.getElementById("menu")
let aside = document.getElementById("aside")
let sombra = document.getElementById("sombra")
let body = document.getElementById("body")



addEventListener("resize", () => {
    if (window.innerWidth >= "768"){
        aside.style.left = "0px"
    }
    else{
        aside.style.left = "-140px"

    }
});


function mostrarMenu() {
    if (window.getComputedStyle(aside).left == "0px") {
        aside.style.left = "-140px"
        sombra.style.right ="110vw"
        body.style.overflow = "auto"
    }
    else {
        aside.style.left = "0px"
        sombra.style.right = "0px"
        body.style.overflow = "hidden"
    }
}
//variaveis globais
let mes = 0
let clicar = null
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []

const semanas = ['domingo','segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'] 



function load (){ 
  const data = new Date() 
  

  //mudar titulo do mês:
  if(mes !== 0){
    data.setMonth(new Date().getMonth() + mes) 
  }
  
  const day = data.getDate()
  const month = data.getMonth()
  const year = data.getFullYear()

  
  
  const daysMonth = new Date (year, month + 1 , 0).getDate()
  const firstDayMonth = new Date (year, month, 1)
  

  const dateString = firstDayMonth.toLocaleDateString('pt-br', {
    weekday: 'long',
    year:    'numeric',
    month:   'numeric',
    day:     'numeric',
  })
  

  const paddinDays = semanas.indexOf(dateString.split(', ') [0])
  
  //mostrar mês e ano:
  document.getElementById('monthDisplay').innerText = `${data.toLocaleDateString('pt-br',{month: 'long'})}, ${year}`

  
  calendar.innerHTML =''

  // criando uma div com os dias:
  for (let i = 1; i <= paddinDays + daysMonth; i++) {
    const dayS = document.createElement('div')
    dayS.classList.add('day')

    const dayString = `${month + 1}/${i - paddinDays}/${year}`

    //condicional para criar os dias de um mês:
    if (i > paddinDays) {
      dayS.innerText = i - paddinDays
      

      const eventDay = events.find(event=>event.data === dayString)
      
      if(i - paddinDays === day && mes === 0){
        dayS.id = 'currentDay'
      }


      if(eventDay){
        const eventDiv = document.createElement('div')
        eventDiv.classList.add('event')
        eventDiv.innerText = eventDay.title
        dayS.appendChild(eventDiv)

      }

      dayS.addEventListener('click', ()=> openModal(dayString))

    } else {
      dayS.classList.add('padding')
    }

    
    calendar.appendChild(dayS)
  }
}

// botões 
function buttons (){
  document.getElementById('backButton').addEventListener('click', ()=>{
    mes--
    load()
    
  })

  document.getElementById('nextButton').addEventListener('click',()=>{
    mes++
    load()
    
  })
}
buttons()
load()


