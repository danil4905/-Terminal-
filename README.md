# Тестовое задание Brave Developers

1. Рефакторинг

Функция находит максимальный индекс совпадения

function maxIndex(s, a, b) {

  let iMax = -1;
  for (let i = 0; i < s.length; i++) {
      
      if (s[i] == a || s[i] == b) 
      
      iMax = i;
      
  }
  return iMax;
  }

console.log(maxIndex("lolkek", "l", "o")); //test

2. Мобильный терминал  https://danil4905.github.io/-Terminal-/
