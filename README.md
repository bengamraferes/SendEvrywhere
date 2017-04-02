# SendEvrywhere
le programme consiste à envoyer des messages partout sur slack , mail , twiteer et facebook .

**Préparation**

1-Création d'une API facebook.
2-Création d'une API twiteer.
3-Création d'un URl incoming-webhooks slack.
4-Autoriser dans le parametre du mail les applications moin sécurisée.

**Partie cilent**

1-Dans le fichier Index.html création des inputs pour tous les entrées nécessaires .
2-Un boutton sera nécessaire pour envoyer le message .
3-Dans le fichier appClient.js utulisation de jaquery pour récuprérer tous les inputs en cliquant sur le button envoyer .
4- Un post sera nessaire pour envoiyer les donnés sur la partie server .

**Partie server**

1-Utulisation d'Express avec un post pour la récuperation des variables deja présentes dans la partie cilient .
2-On va pouvoir affecter nos variables qui contienent du string  dans les functions nécessaires à envoyer les messages .
3-Recupération du message et la date et l'heure et le suvgarder dans un fichier .
