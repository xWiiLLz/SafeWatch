English below,
## Inspiration
Avec le drame survenu à Québec récemment, nous étions motivés à augmenter la vitesse à laquelle la population peut répondre à une telle situation.
## Ce que l'application fait
Notre API reçoit des snapshots de flux vidéos et renvoi un niveau de menace, correspondant à la possible présence d'armes dans l'image. Si une menace est détectée, l'interface web est tout de suite notifiée, ainsi que toute personne pouvant être pertinente d'aviser via messagerie texte. (Par exemple, l'application pourrait envoyer ces informations au poste de police le plus proche de l'événement en question) ## Comment l'avons-nous construit?
Le back-end roule sous Node.js et Express, et utilise Watson de IBM pour analyser le niveau de menace à l'aide du deep learning.
## Obstacles/défis rencontrés
L'entrainement de Watson fut le plus gros défi de ce projet.
Premièrement, nous n'avions pas beaucoup de crédits Bluemix, ce qui nous forçait à rationner les requêtes que nous faisions (y compris pour l'entraînement).
Deuxièmement, il n'y a pas beaucoup de ressources graphiques impliquant un individu qui dégaine son arme en public qui sont disponibles sur le web (ce qui est une très bonne chose en soit).
## Ce dont nous sommes fiers
Nous avons un produit final à présenter. Certes, il n'est pas parfait, mais nous sommes capables d'émettre des alertes pour certains flux vidéos, qui représentent de réels cas de crise imminente. 
## Ce que nous avons appris 
Que le deep learning peut être très ardu, et qu'il faut requérir une foule de données pour définir des modèles personnalisés qui fonctionnent.
Aussi, 3 hackathons de suite, c'est de la folie!
## Quelles sont les prochaines étapes pour SafeWatch
La prochaine étape serait de fournir un plus grand nombre de données à notre application deep learning, pour qu'elle puisse fournir de meilleures analyses.
Aussi, nous aimerions connecter notre API avec des flux de caméras de surveillance en direct.



## Inspiration
Given the recent events in Quebec city, we were inspired to change how quickly we are able to respond to threat.
## What it does
Our api receives snapshots from video feeds and sends back a threat level, corresponding to the likeliness of seeing a weapon in the picture. We then send notifications to the web client, and to whomever might be concerned by the event via text message. (This would be a good way to quickly contact the nearest police department, for instance)
## How we built it
The back-end is written in Node.js and Express, and uses IBM's Watson to analyse the threat with deep learning.
## Challenges we ran into
Training watson was the most challenging part. 
First of all, we did not have a lot of Bluemix credits, so we had to really limit the amount of queries we made (including training of course).
Secondly, there is not a lot of footage to get online where people are about to commit such acts (which is probably good, IMO).
## Accomplishments that we're proud of
We have a final product and something to show. And even though it is not perfect, we are able to get some kind of response.
## What we learned
That deeplearning can be really challenging, and that you need to gather a lot of data to make custom models work.
Also, 3 hackathon week-ends in a row is mad.
## What's next for SafeWatch
The next step would be to populate our deep learning application with more accurate data, so it can give better analysis.
Also, we would like to connect our API to live feeds of security footage.