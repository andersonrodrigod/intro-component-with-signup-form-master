
// element
const form = document.getElementById("form")
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const email = document.getElementById("mail")
const pass = document.getElementById("pass")
const btn = document.getElementById("btn")

// div ERRO
const errF = document.querySelector(".first-name-erro")
const errL = document.querySelector(".last-name-erro")
const emailErr = document.querySelector(".email-erro")
const passErr = document.querySelector(".pass-erro")

// p erro
const firstErro = document.querySelector(".name-erro-1")
const lastErro = document.querySelector(".name-erro-2")
const emailErro = document.querySelector(".email-name-erro")
const passwErro = document.querySelector(".password-erro")


function validFname(firstName) {
    if (firstName.value.length >= 2 && firstName.value.length < 25 ) {
        errF.style.display = "none"
        return true 
    } else {
        firstErro.style.display = "block"
    } 
}

function validLname(lastName) {
    if (lastName.value.length >= 2 && lastName.value.length < 25 ) {
        errL.style.display = "none"
        return true
    } else {
        lastErro.style.display = "block" 
    }
}

function validEmail(email) {
    const regex = /^[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,6}$/
    if (regex.test(email.value)) {
        emailErr.style.display = "none"
        return true
    } else {
        emailErro.style.display = "block"
    }
}

function validPass(pass) {
    const passwordRegex = /^(?=.*[a-zA-Z]{2,})(?=.*[0-9]{6,}).+$/
    if (passwordRegex.test(pass.value)) {
        passErr.style.display = "none"
        return true
    } else {
        passwErro.style.display = "block"
    }    
}




btn.addEventListener("click", function() {
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        if(validFname(firstName) && validLname(lastName) && validEmail(email) && validPass(pass)) {
            window.alert("successfully registered")
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            pass.value = "";
            
               
        }   
    })
})