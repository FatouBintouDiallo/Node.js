//Tache2
const http = require('http')
const server = http.createServer((req, res) => {
    // envoi la réponse au client
    res.end('Hello World from the server')
})
// Écouter le port 3000
server.listen(3000, 'localhost', () => {
    console.log('Le serveur écoute sur le port 3000')
})