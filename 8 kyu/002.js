// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// DESCRIPTION:
// Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.

// Examples:
// evenOrOdd(2)  =>  "Even"
// evenOrOdd(7)  =>  "Odd"
// evenOrOdd(0)  =>  "Even"
// evenOrOdd(-1) =>  "Odd"

// VERSION 1: if/else
function evenOrOdd(number) {
  if(number % 2 === 0){
    return 'Even'
  } else {
    return 'Odd'
  }
}

// VERSION 2: Ternaire (active)
// const evenOrOdd = number => number % 2 === 0? 'Even' : 'Odd';

// Tests
console.log(evenOrOdd(2));   // Devrait afficher "Even"
console.log(evenOrOdd(7));   // Devrait afficher "Odd"
console.log(evenOrOdd(0));   // Devrait afficher "Even"
console.log(evenOrOdd(-1));  // Devrait afficher "Odd"

/*
=====================================
SOLUTIONS ALTERNATIVES (après succès)
=====================================

1️⃣ TES SOLUTIONS ✅ (Tu as trouvé les DEUX!)

VERSION A: if/else classique
function evenOrOdd(number) {
  if(number % 2 === 0){
    return 'Even'
  } else {
    return 'Odd'
  }
}

VERSION B: Ternaire avec arrow function
const evenOrOdd = number => number % 2 === 0? 'Even' : 'Odd';

Points positifs:
- ✅ EXCELLENT! Tu as exploré spontanément deux approches différentes!
- ✅ Utilisation parfaite de l'opérateur modulo (%)
- ✅ if/else bien structuré et lisible
- ✅ Ternaire concise et élégante
- ✅ Arrow function moderne (ES6+)
- ✅ Les deux versions sont parfaitement correctes
- ✅ Tu montres une vraie compréhension des différentes syntaxes JavaScript

Performance: Les deux versions ont exactement la même performance.
Le choix entre les deux est purement une question de style et de lisibilité.

---

2️⃣ CONCEPTS DÉCOUVERTS

L'opérateur modulo (%)
Le modulo retourne le RESTE d'une division:
- 10 % 2 = 0 (10 ÷ 2 = 5, reste 0)
- 7 % 2 = 1 (7 ÷ 2 = 3, reste 1)
- Tout nombre pair divisé par 2 donne un reste de 0
- Tout nombre impair divisé par 2 donne un reste de 1

Utilisation courante du modulo:
- Tester la parité (pair/impair)
- Obtenir le dernier chiffre: n % 10
- Cycles/rotations: index % array.length
- Alterner entre valeurs: i % 2 pour alterner 0 et 1

L'opérateur ternaire (condition ? vrai : faux)
Syntaxe compacte pour remplacer if/else simple:
- condition ? valeurSiVrai : valeurSiFaux
- Idéal pour les assignations et returns simples
- À éviter si la logique devient complexe

Arrow functions (ES6+)
Syntaxe moderne pour déclarer des fonctions:
- const nom = (params) => expression
- Return implicite si pas de {}
- Syntaxe très courante en JavaScript moderne

---

3️⃣ SOLUTION ALTERNATIVE (avec tableau)

const evenOrOdd = number => ['Even', 'Odd'][number % 2];

Explication:
- Crée un tableau ['Even', 'Odd']
- number % 2 donne 0 (pair) ou 1 (impair)
- Utilise ce résultat comme index du tableau
- ['Even', 'Odd'][0] → 'Even'
- ['Even', 'Odd'][1] → 'Odd'

Quand l'utiliser:
- Approche "clever" mais moins lisible
- Utile pour comprendre l'indexation
- En production, ta version ternaire est préférable

---

4️⃣ CE QUE TU AS APPRIS

Nouveaux concepts maîtrisés:
✅ Opérateur modulo (%)
✅ Conditions if/else
✅ Opérateur ternaire
✅ Arrow functions
✅ Comparaison stricte (===)

Progression notable:
- Exercice #001: Strings, tableaux, boucles
- Exercice #002: Nombres, conditions, deux syntaxes différentes!
- Tu explores maintenant spontanément plusieurs solutions → EXCELLENT!

*/
