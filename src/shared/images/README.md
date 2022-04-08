# Test Technique Agily

## Contexte

Les buts de ce test technique sont les suivants :

- Nous permettre de voir ton niveau technique
- Essayer de déterminer tes capacités concernant la résolution de problèmes
- Voir si tu pourras t’intégrer au sein de notre équipe technique

L'objectif de ce test technique est créer une webapp avec un des framework suivants : Vue, Nuxt, React, Next.

Il est important de respecter les consignes suivantes :

- Tu n’as pas besoin d'utiliser un service externe pour les exercices, sauf quand c'est explicitement demandé
- Il est très facile de trouver des solutions de ce test en ligne, aussi tu seras jugé sur ta capacité de structurer ton code
- Certaines consignes ne sont pas claires, tu devras trouver la solution par toi même

## Livrables

Les livrables minimum sont les suivants :

- Un nouveau repo gitlab ou github public, qui contiendra un readme.md mis a jour, les fichiers que tu vas écrire.
- Un ensemble de dossiers/fichiers selon une nomenclature claires
- Pour chacun des exercices, écrire le temps que tu auras mis à le réaliser au travers d'un README que tu essayeras de détailler (le markdown est recommandé), de préférences individuellement pour chaque partie

Dans le README, tu devras essayer de répondre aux question suivantes :

- Quels sont les principes que tu as appliqué
- Peux-tu expliquer les décisions que tu as prise et pourquoi c'est la meilleure approche
- Quelles sont tes recommandations pour un travail futur

## Exercice 1

L'objectif de ce test est de créer en 2 pages une application météo, la première page contiendra un input qui servira à recevoir le nom d'une ville, la deuxième page servira à afficher la météo sur les 7 prochains jours.

Contraintes :
- Seul **Axios** est permis.
- L'utilisation des librairies de style est **interdite**.
- La webapp doit être **responsive**.


Attentes sur la deuxième page:

1. La possibilité de revenir sur la première page

2. Le background-image doit être dynamique, il devra changer selon la ville qui sera entrée
 
3. La page est divisée en deux parties, à gauche la carte affiche les informations météorologiques d’aujourd’hui, à droite une liste des sept prochains jours
 
4. Les icônes qui sur les cartes de droite sont à récupérer sur l'api

5. Les dates sur les cartes doivent être dynamiques
 
6. Lorsque je clique la première fois sur une des cartes de la liste de droite, le contenu de la carte de gauche devra être remplacée par celle-ci, lorsque je clique une seconde fois sur cette même carte à droite, le contenu de gauche doit revenir à son état d'origine (avec les informations d’aujourd’hui)


Voici la clé api: db988691faf182dfc3750cd1e57f3718

Tu trouveras les images correspondantes au design dans ce repo

Tu devras utiliser l'api openweathermap
- https://openweathermap.org/api/one-call-api
- https://openweathermap.org/api/geocoding-api

Icones:
- https://openweathermap.org/img/wn/{Nom de l'icone}@4x.png

## Exercice 2

L'objectif de cet exercice est de créer l’api de ton app météo, les calls openweathermap devront être fait depuis celle-ci.

Tu vas devoir utiliser Express comme framework et le package node-cache.

Attentes sur l’api:

- La data retournée par openweathermap devra être mise en cache.
- Lorsque ton app météo fera des calls sur ton API, tu devras regarder si la data demandée est déjà dans le cache, si oui cette data sera retournée.
- La data retournée à ton app météo devra être assainie, seule la data nécessaire devra être retournée.


Si tu n'as pas compris l'une des consignes, tu peux me contacter ici : 0651276885

Pour rappel le test est à rendre 2 jours maximum après reception de ce mail.
