//*\\\\\\\\\\\\\\\\\\\\\\\\\завдання 1\\\\\\\\\\\\\\\\\\\\\\\\

//Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
// Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw",
// який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки
// “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити
// повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: 'Олексій',
  accountNumber: 'UA1234567890',
  balance: 1000,
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Ви внесли ${amount} грн. Залишок на рахунку: ${this.balance} грн.`);
    } else {
      console.log('Сума для внесення повинна бути більше 0.');
    }
  },
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Ви зняли ${amount} грн. Залишок на рахунку: ${this.balance} грн.`);
    } else if (amount > this.balance) {
      console.log('Недостатньо коштів на рахунку.');
    } else {
      console.log('Сума для зняття повинна бути більше 0.');
    }
  }
};

bankAccount.deposit(500);
bankAccount.withdraw(300);
bankAccount.withdraw(2000);
bankAccount.deposit(-100);

//*\\\\\\\\\\\\\\\\\\\\\\завдання 2\\\\\\\\\\\\\\\\\\\\\\\\
//Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed".
// Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія,
//  та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з
//  інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів
// Цельсія” і навпаки

const weather = {
    temperature: 8,
    humidity: 99,
    windSpeed: 77,
    compare(temperature) {
        if (temperature > 0) {
            console.log(true);
            
        } else {
            console.log(false);
            
        }
    }
}

weather.compare(77)
console.log(weather);


//*\\\\\\\\\\\\\\\\\\\\\\завдання 3\\\\\\\\\\\\\\\\\\\\\\\\
//Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
 //Додайте метод "login", який буде перевіряти правильність введеного email та password.
// Використайте інпути для запису значень властивостей в об’єкт

const user = {
  name: 'Іван',
  email: 'ivan@example.com',
  password: 'securepassword',
  login(inputEmail, inputPassword) {
    if (inputEmail === this.email && inputPassword === this.password) {
      console.log('Вхід успішний');
      return true;
    } else {
      console.log('Невірний email або пароль');
      return false;
    }
  }
};

user.login('ivan@example.com', 'securepassword'); // Вхід успішний
user.login('ivan@example.com', 'wrongpassword');  // Невірний email або пароль



//*\\\\\\\\\\\\\\\\\\\\\\завдання 4\\\\\\\\\\\\\\\\\\\\\\\\
//Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
// Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false",
//  якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку.
// Якщо метод повернув "true" то змінити колір тексту поля title на зелений.


const movie = {
    title: 6,
    director: 9,
    year: 0,
    rating: 1,
    method(rating) {
        if (rating > 8) {
            console.log('true');
            
        } else {
            console.log('false');
        }
    }
}
movie.method(7);











