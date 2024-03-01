//Функция для проверки длины строки

const stringLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

stringLength('стрjj', 4);
stringLength('проверяемая строка', 20);
stringLength('проверяемая строка', 18);
stringLength('проверяемая строка', 10);

// Палиндром или нет
const definitionOfPalindrom = (string) => {
  string = string.replaceAll(' ', '');

  const modifiedString = string.toLowerCase();
  let newString = '';
  for (let i = modifiedString.length - 1; i >= 0; i--) {
    newString += modifiedString[i];

  }

  return modifiedString === newString ? 'true' : 'false';

};
definitionOfPalindrom('Лёша на полке клопа нашёл ');

//Извлекаем цифры
// let extractionOfNumber = (string) => {
// for (let i = 0; i <= string.length - 1; i++) {
//   let number = parseInt(string[i]);
//   console.log(number);
// }
// };
//  console.log(extractionOfNumber('2022'));
//  console.log(extractionOfNumber('s202s2d'));


