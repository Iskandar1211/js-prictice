"use strict";

/*
### Уникальность всех символов в строке
Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
**Input**: String
**Output**: Boolean
*/

function isUnique(string) {
  //   for (let i = 0; i < string.length; i++) {
  //     if (string.lastIndexOf(string[i]) !== i) {
  //       return false;
  //     }
  //     return true;
  //   }
  return new Set(string).size === string.length;
}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false

/*
### Плоский массив
Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.
**Input**: Array
**Output**: Array
*/

function flatten(array) {
  const res = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i]);
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j]);
      }
    } else {
      res.push(array[i]);
    }
  }

  return res;
}

function flatten2(array) {
  const res = [];
  array.forEach((arr) => {
    if (Array.isArray(arr)) {
      const flat = flatten(arr);
      flat.forEach((el) => {
        res.push(el);
      });
    } else {
      res.push(arr);
    }
  });
  return res;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
console.log("flatten2", flatten2([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

/*
### Удаление всех повторяющихся значений в строке
Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
**Input**: String
**Output**: String
*/

function removeDupes(str) {
  // const chars = {}
  // const res = []

  // for (let i = 0; i < str.length; i++) {
  // if (!chars[str[i]]) {
  // chars[str[i]] = true
  // res.push(str[i])
  // }
  // }

  // return res.join('')

  return Array.from(new Set(str)).join("");
}
console.log(removeDupes("abcd")); // -> 'abcd'
console.log(removeDupes("aabbccdd")); // -> 'abcd'
console.log(removeDupes("abcddbca")); // -> 'abcd'
console.log(removeDupes("abababcdcdcd")); // -> 'abcd'

/*
Вам будет предоставлен массив объектов, передоставленые данные о разработчиках которые подписовались, на участие 
следующей встречи программистов, которые вы организуете
*/

const list = [
  {
    firstName: "Iskandar",
    lastName: "Gadoyboev",
    country: "Tajikistan",
    age: 32,
    language: "JavaScript",
  },
  {
    firstName: "Akbar",
    lastName: "Khushnourov",
    country: "Dushanbe",
    age: 26,
    language: "C",
  },
  {
    firstName: "Bakhodur",
    lastName: "Kandikov",
    country: "Dushanbe",
    age: 32,
    language: "Ruby",
  },
  {
    firstName: "Hasan",
    lastName: "Soliev",
    country: "Istaravshan",
    age: 26,
    language: "C",
  },
];

const countLanguages = (list) => {
  let count = {};
  list.forEach((el) => {
    count[el.language] = (count[el.language] || 0) + 1;
  });

  return count;
};

console.log(countLanguages(list));

/**
 * Function to count the occurrences of different programming languages in a list.
 * @param {Array} list - An array of objects, each representing a developer's information.
 * @return {Object} - An object with the count of occurrences for each language.
 */
const countLanguagesTwo = (list) => {
  // Initialize variables to count the occurrences of each language
  let C = 0;
  let JavaScript = 0;
  let Ruby = 0;

  // Iterate over each element in the list
  for (const lang of list) {
    // Check the language and increment the respective counter
    if (lang.language === "C") {
      C++;
    } else if (lang.language === "JavaScript") {
      JavaScript++;
    } else {
      Ruby++;
    }
  }

  // Return the count of occurrences for each language
  return { C, JavaScript, Ruby };
};

console.log("countLanguagesTwo", countLanguagesTwo(list));

/*
Реализуйте функцию, которая складывает два числа и возвращает их сумму в двоичном виде.
Преобразование может быть выполнено до или после добавления.
Возвращаемое двоичное число должно быть строкой.
*/

function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log("addBinary", addBinary(1, 2));

/*
Тролли атакуют ваш раздел комментариев!
Распространенный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, из которой удалены все гласные.
Например, строка «Этот сайт для неудачников LOL!» станет «Ths wbst s fr lsrs LL!».
Примечание: для этой ката yне считается гласной.
*/

function disemvowel(str) {
  return str
    .split("")
    .filter((char) => !"aeiouAEIOU".includes(char))
    .join("");
}

console.log("disemvowel", disemvowel("This website is for losers LOL!"));

/*
Камень ножницы Бумага
Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.
*/

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "rock") {
    return "Player 2 won!";
  } else if (p1 === "paper" && p2 === "scissors") {
    return "Player 2 won!";
  } else if (p1 === "rock" && p2 === "paper") {
    return "Player 2 won!";
  }
};

const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
