// https://www.codewars.com/kata/50654ddff44f800200000004

// DESCRIPTION:
// This code does not execute properly. Try to figure out why.

// Le code bugué fourni:
// function multiply(a, b){
//   a * b
// }

// TA SOLUTION CORRIGÉE:
function multiply(a, b){
  return a * b
}

// Tests
console.log(multiply(1, 1));  // Devrait retourner 1
console.log(multiply(2, 1));  // Devrait retourner 2
console.log(multiply(2, 2));  // Devrait retourner 4
console.log(multiply(3, 5));  // Devrait retourner 15

/*
=====================================
SOLUTIONS ALTERNATIVES (après succès)
=====================================

1️⃣ TA SOLUTION ✅
function multiply(a, b){
  return a * b
}

Points positifs:
- ✅ Bug identifié IMMÉDIATEMENT (le return manquait)
- ✅ Correction parfaite et directe
- ✅ Tu as compris que sans return, la fonction ne renvoie rien (undefined)
- ✅ Exercice résolu en quelques secondes → les fondamentaux sont SOLIDES!

Le bug: Sans le mot-clé `return`, JavaScript exécute `a * b` mais ne renvoie
pas le résultat. La fonction retourne `undefined` par défaut.

---

2️⃣ SOLUTION ALTERNATIVE (Arrow function avec return implicite)

const multiply = (a, b) => a * b;

Explication:
- Arrow function avec expression (pas de {})
- Quand il n'y a pas d'accolades, le return est IMPLICITE
- `(a, b) => a * b` équivaut à `(a, b) => { return a * b }`
- Syntaxe très courante en JavaScript moderne

Avantages:
- Plus concise (1 ligne)
- Return implicite → impossible d'oublier le return!
- Style moderne et élégant

---

3️⃣ CONCEPTS CLÉS

Le mot-clé `return`:
- Renvoie une valeur depuis une fonction
- Sans return, la fonction retourne `undefined`
- Une fonction s'arrête dès qu'elle rencontre un return
- Return est OBLIGATOIRE si tu veux récupérer un résultat

Return implicite vs explicite:
- Explicite: `function() { return x }` ou `() => { return x }`
- Implicite: `() => x` (seulement avec arrow functions sans {})

Débogage:
- Identifier un bug dans du code existant
- Comprendre pourquoi un code ne fonctionne pas
- Dans ce cas: calcul effectué mais résultat non retourné

---

4️⃣ CE QUE TU AS APPRIS

Compétences renforcées:
✅ Compréhension du mot-clé `return`
✅ Débogage rapide de code
✅ Lecture et analyse de code existant
✅ Identification immédiate d'erreurs courantes

Observation du professeur:
Cet exercice était TROP SIMPLE pour ton niveau actuel. Tu as identifié
et corrigé le bug instantanément, ce qui prouve que tu maîtrises déjà
très bien les fondamentaux. Tu es prêt pour des exercices plus stimulants!

*/
