const form = document.getElementById("form")
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const email = document.getElementById("mail")
const pass = document.getElementById("pass")
const btn = document.getElementById("btn")
const errF = document.querySelector(".first-name-erro")
const errL = document.querySelector(".last-name-erro")
const emailErr = document.querySelector(".email-erro")
const passErr = document.querySelector(".pass-erro")




function validFname(firstName) {
    
    if (firstName.value.length >= 2 && firstName.value.length < 25 ) {
        
        return true
    } else {
        
        
    } 
    
    
}

function validLname(lastName) {
    if (lastName.value.length >= 2) {
        return true
    } else {
        let item = document.createElement("p")
        item.textContent = "Invalid name"
        errL.appendChild(item)
        return false  
    }
}

function validEmail(email) {
    const regex = /^[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,6}$/
    if (regex.test(email.value)) {
        return true
    } else {
        let item = document.createElement("p")
        item.textContent = "Invalid email"
        emailErr.appendChild(item)
        return false
    }
}

function validPass(pass) {
    const passwordRegex = /^(?=.*[a-zA-Z]{2,})(?=.*[0-9]{6,}).+$/
    if (passwordRegex.test(pass.value)) {
        return true
    } else {
        let item = document.createElement("p")
        item.textContent = "Invalid password"
        passErr.appendChild(item)
        return false
    }    
}

function clearErros() {
    if(validFname(firstName) && validLname(lastName) && validEmail(email) && validPass(pass))  {
        
    }  
}



btn.addEventListener("click", function() {
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        if(validFname(firstName) && validLname(lastName) && validEmail(email) && validPass(pass)) {
            console.log("it sent")
            window.alert("successfully registered")
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            pass.value = "";
            errL.innerHTML = "";
            emailErr.innerHTML = "";
            passErr.innerHTML = "";     
        }   
    })
})