//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  let strArray = str.split('');
  let reverse = [];
  for(let i = 0; i < strArray.length; i++){
    reverse.unshift(strArray[i]);
  }
  return reverse.join('');
}

/*
=====================================
SOLUTIONS ALTERNATIVES (après succès)
=====================================

1️⃣ TA SOLUTION ✅
function solution(str){
  let strArray = str.split('');
  let reverse = [];
  for(let i = 0; i < strArray.length; i++){
    reverse.unshift(strArray[i]);
  }
  return reverse.join('');
}

Points positifs:
- ✅ Logique très claire et facile à suivre
- ✅ Bonne compréhension de split() et join()
- ✅ Utilisation correcte de unshift() pour construire le tableau inversé
- ✅ Variables bien nommées (strArray, reverse)
- ✅ Excellente approche pour apprendre les bases

Performance: Correcte, mais unshift() doit décaler tous les éléments
du tableau à chaque ajout, ce qui peut être lent sur de grandes chaînes.

---

2️⃣ SOLUTION OPTIMISÉE (la plus courante sur Codewars)
function solution(str){
  return str.split('').reverse().join('');
}

Explication ligne par ligne:
- str.split('') → Transforme 'world' en ['w','o','r','l','d']
- .reverse() → Méthode native qui inverse le tableau : ['d','l','r','o','w']
- .join('') → Recolle en string : 'dlrow'
- Le tout sur une seule ligne avec chaînage de méthodes

Avantages:
- ✅ Code très concis (1 ligne au lieu de 7)
- ✅ Plus rapide : .reverse() est optimisé en interne par JavaScript
- ✅ Style idiomatique JavaScript (ce que les développeurs écrivent)
- ✅ Facile à lire une fois qu'on connaît les méthodes

Nouveaux concepts découverts:
- .reverse() : méthode native des tableaux qui inverse l'ordre
- Chaînage de méthodes : enchaîner .split().reverse().join()
- Code déclaratif vs impératif (quoi faire vs comment le faire)

---

3️⃣ SOLUTION ALTERNATIVE (avec boucle décroissante)
function solution(str){
  let result = '';
  for(let i = str.length - 1; i >= 0; i--){
    result += str[i];
  }
  return result;
}

Explication:
- On part de la fin de la string (str.length - 1)
- On parcourt à l'envers jusqu'à 0 (i--)
- On construit la nouvelle string en ajoutant chaque caractère
- Pas besoin de split/join

Quand l'utiliser:
- Bon pour comprendre les boucles décroissantes
- Utile quand on veut éviter de créer des tableaux intermédiaires
- Intéressant pour des algorithmes qui nécessitent un parcours inversé

Performance: Similaire à ta solution, mais évite la création de tableau

*/