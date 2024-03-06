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

// функция Делу — время

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/


const convertToMinutes = (el) => {
  const time = el.split(':').map((elem) => parseInt(elem,10));
  time[0] *= 60;

  return time.reduce((sum, element) => sum + element, 0);
};
const isInDay = (startOfDay,endOfDay,startOfMeeting,durationOfMeeting) => {
  const timeOfStart = convertToMinutes(startOfDay);
  const timeOfEnd = convertToMinutes(endOfDay);
  const timeOfStartMeeting = convertToMinutes(startOfMeeting);
  const timeOfMeeting = timeOfStartMeeting + durationOfMeeting;

  return (timeOfMeeting <= timeOfEnd && timeOfStartMeeting >= timeOfStart);

};
isInDay('08:00', '17:30', '14:00', 90);
isInDay('8:0', '10:0', '8:0', 120);
isInDay('08:00', '14:30', '14:00', 90);
isInDay('14:00', '17:30', '08:0', 90);
isInDay('8:00', '17:30', '08:00', 900);


