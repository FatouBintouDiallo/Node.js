// Tache4 :creer un fichier 'generateur de password'
const generatepassword = require('generate-password')
var password=generatepassword.generate ({
    length:10,
    Number:true
})
console.log(password)
   
