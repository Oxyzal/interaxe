const index =document.querySelector('.index')
const intro = document.querySelector('.intro')
const regle = document.querySelector('.regle1')
const regle2 = document.querySelector('.regle2')
const game = document.querySelector('.game')
const game2 = document.querySelector('.game2')


const validate = () => {
    const checkboxs = [...document.getElementsByTagName('input')]

    let response = []

    checkboxs.forEach(checkbox => {
        if (checkbox.checked) {
            response.push(checkbox.value)

        }
    })

    if (JSON.stringify(response) == JSON.stringify(['C'])) {  /*'C','E', 'I', 'N', 'P', 'R' , 'X' */
        index.style.display = 'none'
        intro.style.display = 'none'
        regle.style.display = 'none'
        regle2.style.display = 'none'
        game.style.display = 'none'
        game2.style.display = 'flex'
    } else {
        alert('Pas les bon symboles')
    }
}

document.querySelector('#validator').addEventListener('click', (event) => {
    validate()
})



const supp = () =>{
    document.querySelector('.effacer').addEventListener('click', () => {
        index.style.display = 'none'
        intro.style.display = 'flex'
    })
}


const supp1 = () =>{
    document.querySelector('.effacer1').addEventListener('click', () => {
        index.style.display = 'none'
        intro.style.display = 'none'
        regle.style.display='flex'
    })
}

const supp2 = () => {
    document.querySelector('.effacer2').addEventListener('click', () => {
        index.style.display = 'none'
        intro.style.display = 'none'
        regle.style.display = 'none'
        regle2.style.display = 'flex'
    })
}

const supp3 = () => {
    document.querySelector('.effacer3').addEventListener('click', () => {
        index.style.display = 'none'
        intro.style.display = 'none'
        regle.style.display = 'none'
        regle2.style.display = 'none'
        game.style.display = 'flex'
    })
}

supp()
supp1()
supp2()
supp3()

const enigme = document.querySelector('.enigme1')
const indice = document.querySelector('.indice1')
enigme.addEventListener("input" , (e) =>{
    e.preventDefault()

    const searchTerm1 = document.querySelector('.enigme1').value

    if (searchTerm1.toLowerCase() == 'aventure'){
        enigme.style.backgroundColor='green'
        indice.style.display = 'block'
    }
    else{
        enigme.style.backgroundColor='red'
    }
})

const enigme2 = document.querySelector('.enigme2')
const indice2 = document.querySelector('.indice2')
enigme2.addEventListener("input" , (e) =>{
    e.preventDefault()

    const searchTerm2 = document.querySelector('.enigme2').value

    if (searchTerm2.toLowerCase() == 'experience'){
        enigme2.style.backgroundColor='green'
        indice2.style.display = 'block'
    }
    else{
        enigme2.style.backgroundColor='red'
    }
})


const enigme3 = document.querySelector('.enigme3')
const indice3 = document.querySelector('.indice3')
enigme3.addEventListener("input" , (e) =>{
    e.preventDefault()

    const searchTerm3 = document.querySelector('.enigme3').value

    if (searchTerm3.toLowerCase() == 'batir'){
        enigme3.style.backgroundColor='green'
        indice3.style.display = 'block'
    }
    else{
        enigme3.style.backgroundColor='red'
    }
})

function page_redirect(){  
    const codeAvenir= document.querySelector('.avenir').value
    if(codeAvenir.toLowerCase() == 'avenir'){
        window.location = "https://admissions.leonard-de-vinci.net/ecole/IIM";
    }
    else{
        alert('Code Invalid !') 
    }
      
}

// const avenir = document.querySelector('.envoyer')

// avenir.addEventListener('click', () => {
//     const codeAvenir= document.querySelector('.avenir').value
//     console.log(codeAvenir)

//     if(codeAvenir.toLowerCase() == 'avenir'){
//         return page_redirect()
//     }
//     else{
//         alert('Code Invalid !')
//     }
// })


