const form = document.getElementById("form")
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const email = document.getElementById("mail")
const pass = document.getElementById("pass")
const btn = document.getElementById("btn")


function validFname(firstName) {
    if (firstName.value.length >= 2) {
        return true
    } else {
        return false
    }
}

function validLname(lastName) {
    if (lastName.value.length >= 2) {
        return true
    } else {
        return false
    }
}

function validEmail(email) {
    if(email.value.length > 8) {
        return true
    } else {
        return false
    }
}

function validPass() {
    if (pass.value.length > 8) {
        return true
    } else {
        return false
    }
}





btn.addEventListener("click", function() {
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        if(validFname(firstName) && validLname(lastName) && validEmail(email) && validPass(pass)) {
            console.log("enviou")
        }

        
    })
})