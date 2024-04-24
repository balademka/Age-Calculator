function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}
function calculateAge(dateOfBirth) {
  // Парсим строку даты рождения в объект Date
  var dob = new Date(dateOfBirth);
  // Получаем текущую дату
  var currentDate = new Date();
  
  // Вычисляем разницу между текущей датой и датой рождения в миллисекундах
  var timeDiff = currentDate.getTime() - dob.getTime();
  
  // Конвертируем разницу в миллисекундах в годы, округляя до целого числа
  var age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
  
  // Возвращаем возраст
  return age;
}

// Пример использования функции calculateAge
function testCalculateAge() {
  var dateOfBirth = "1990-05-15"; // Замените на дату рождения пользователя
  var age = calculateAge(dateOfBirth);
  Logger.log("Возраст пользователя: " + age);
}
