const fs = require('fs');
//Tache4 
// Tâche 1: Créer un fichier "welcome.txt" 
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.log('Erreur lors de la création du fichier :', err);
  } else {
    console.log('Le fichier "welcome.txt" a été créé avec succès.');
  }
});

// Tâche 2: Lire le fichier "welcome.txt" 
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Erreur lors de la lecture du fichier :', err);
  } else {
    console.log('Contenu du fichier "welcome.txt" :', data);
  }
});
