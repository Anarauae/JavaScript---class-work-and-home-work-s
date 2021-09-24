// let isMarried = true;
//  console.log (married); -uncorrect

// let cart;
// console.log(cart);
// console.log(typeofcort);

//(let myNum = 123;

//let myStringNum - String)

//3

// let a="10";
// let b="2";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//4
// let Number="10";
// let Number="2";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//5 unarnye
// let a="10";
// let b="2";

// console.log(+a + + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);


//6 stroka ne rabotaet
// let a="10hgt;gf;";
// let b="2";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//7 JS raboteat - probely otsekaet i zifru chitaet esli simvol ne chitaet


// let a="     10    ";
// let b="2";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);



//8 - istina ili loj otlichaet - pustaya ona false - vse stroki true i numbers also true
//otrizatelnoe toje true
//minus or plud noll - false
//lubye chisla i stroki true
// let a=Boolen("1");
// console.log(a);


//8 operatory bolshe ili menshe 
//bolshe ravno
//menshe ravno
//a ne ravno b

// let a = 20;
// let b = 10;

// console.log(a == b);
// console.log(a != b);

//9 
//=== strogii vid

// let a = "10";
// let b = 10;
//console.log(a === b);


//10 =prisvaivanie
//peremennye vetvlenie

// let isMarried = true;

// if (isMarried === true) {
//     console.log("Ya ne budu znakomitsya");
// } else{
//     console.log("Privet menya zovut - Ivan!");
// }


//11 false
// let isMarried = false;

// if (isMarried === true) {
//     console.log("Ya ne budu znakomitsya");
// } else{
//     console.log("Privet menya zovut - Ivan!");
// }
//<br>

//12
// let age = 45;
// if (age < 3) {
//     console.log("Privet, Malysh");
// } else if (age < 18) {
//     console.log("Privet")
// } 

//13
// true znachenie vyvedet true , daje esly number or strok
// let password = false;
// if (password === true) {
//     console.log("dostup otkryt");
// } else{
//     console.log("dostup zakryt");
// }

//14
// ternarnye operator
// let password = true;
// password ? console.log("dostup otkyt") : console.log("dostup zakryt");

//15
// let lang = true;

// if (lang === true) {
//     console.log("ru");
// } else{
//     console.log("Я не знаю такого языка");
// }

//task 1
// let isMarried = true;

// console.log(isMarried);
// console.log(typeof isMarried);    

//task2
// let cart = null;

// console.log(cart);
// console.log(typeof cart);

//task3
// let userName;

// console.log(userName);
// console.log(typeof userName);

//task4
// alert(123);

// let myNum = 123;
// console.log(myNum);
// console.log(typeof myNum);

// let myStrNum = String(myNum);
// console.log(myStrNum);
// console.log(typeof myStrNum);

//task5
//Численное преобразование
//Численное преобразование происходит в математических функциях и выражениях.
// let a = "10";
// let b = "2";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//task6
//Мы можем использовать функцию Number(value), чтобы явно преобразовать value к числу:
// let a = Number("10");
// let b = Number("2");

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//task7
//Явное преобразование часто применяется, когда мы ожидаем получить число из строкового контекста, 
//например из текстовых полей форм.
//Если строка не может быть явно приведена к числу, то результатом преобразования будет **`NaN`**. Например:
// let a = Number("10sdf");
// let b = Number("hello");
// let c = Number("   10   ");

// console.log(a);
// console.log(b);
// console.log(c);

//task8
//Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefinedи NaN, становятся false.
//Все остальные значения становятся true.
// let a = Boolean("1");
// let b = Boolean(1);
// let c = Boolean("hello");
// let d = Boolean("");
// let e = Boolean("0");
// let f = Boolean(0);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

//task9
//Операторы сравнения
// let a = 20;
// let b = 10;

// console.log(a > b); // true
// console.log(a >= b); // true
// console.log(a < b); // false
// console.log(a <= b); // false
// console.log(a == b); // false
// console.log(a != b); // true

//task10
//Строгое сравнение ===
// let a = "10";
// let b = 10;

// console.log(a == b); // true
// console.log(a === b); // false
// console.log(a !== b); // true

//task11
// let isMarried = true;

// if (isMarried === true) {
//   console.log("Я не буду знакомиться");
// }

//task12
// let isMarried = true;

// if (isMarried) {
//     console.log("Я не буду с Вами знакомиться");
//   }

//task13
// let isMarried = false;

// if (isMarried) {
//   console.log("Я не буду с Вами знакомиться");
// } else {
//   console.log("Привет, меня зовут Иван");
// }

//task14
// let age = 101;

// if (age < 3) {
//   console.log("Здравствуй, малыш!");
// } else if (age < 18) {
//   console.log("Привет!");
// } else if (age < 100) {
//   console.log("Здравствуйте!");
// } else {
//   console.log("Какой необычный возраст!");
// }

//task15
//Тернарный оператор
//Единственный оператор в JavaScript, принимающий три операнда: условие, за которым следует знак вопроса (?),
// затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:), и, 
//наконец, выражение, которое выполняется, если условие ложно. Он часто используется в качестве укороченного
// варианта условного оператора if.
// let password = false;

// password ? console.log("Доступ открыт") : console.log("Доступ закрыт");

// let password = 123;

// password === 1234 ? console.log("Доступ открыт") : console.log("Доступ закрыт");

//class work1
//В переменную lang нужно получить данные от пользователя если пользователь введет “ru” нужно приветствовать
// его на русском если “ky” на кыргызском если будет другое значение нужно вывести сообщение “Я не знаю такого языка”
// let lang = prompt("Ведите ваш язык (ru,ky)");

// if (lang === "ru") {
//     document.write("Добро пожаловать в JavaScript");
// }
// else if (lang === "ky") {
//     document.write("Кош келиниз JavaScript дуйносуно");
// }
// else {
//     document.write("Добро пожаловать в мир айтишников!");
// }

//class work2
//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является
// буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let summ = "abcde";
// if (summ.charAt("0") ==="a") {
//     document.write("da");
// } else {document.write("no");
// }

//class work3
//Дано число с цифрами, например, 12345. Проверьте, что первая цифра числа 1, 2 или 3. Если это так - выведите 'да', 
//в противном случае выведите 'нет'.
// let number = "12345";
// if (number.slice(0, 3) === "123") {
//     document.write("da");
// }else {document.write("no");}

//home work1
//Определяем и выводим на экран информацию о том, четное введенное число или нечетное
//a
// let numD=+prompt("Введите любое число");
// if (numD%2==0){
//     document.write("четное <br>");
// } else document.write("нечетное <br>");

//b
// document.write(`<h2>Задача №1</h2>`)

// const numberInp = prompt(`Число четное или нечетное:`);
// const delenie = String(numberInp / 2);
// const ostatok1 = (delenie - delenie.slice(0));

// if (ostatok1.toFixed(2) === '0') {
//     document.write(`<h3>Введеное число ${numberInp} является четным</h3>`);
// } else {
//     document.write(`<h3>Введеное число ${numberInp} является нечетным</h3>`);
// }

//home work2
//2. Пользователь вводит название месяца исходя из введенного названия месяца нужно вывести сообщение
//с названием времени года. 
//Например:
//Пользователь: январь
//Компьютер: это зима

// let month = prompt("Введите название месяца, чтоб определить время года");
// if (month=="январь" || month=="февраль" || month=="декабрь"){
//     document.write("это зима <br>");
// }else if (month=="март" || month=="апрель" || month=="май"){
//     document.write("это весна <br>");
// }else if (month=="июнь" || month=="июль" || month=="август"){
//     document.write("это лето <br>");
// }else if (month=="сентябрь" || month=="октябрь" || month=="ноябрь"){
//     document.write("это осень <br>");
// } 

//home work3
//Определяем животное, ассоциированное с введенным годом в китайском гороскопе
//Например:
//Пользователь: 2021
//Компьютер: Бык

let yearsM=[2020, 2008, 1996, 1984, 1972, 1960, 1948, 1936];
let year=+prompt("Введите год рождения чтобы узнать зодиак");

for (let i = 0; i < yearsM.length; i++) {
  if (yearsM[i]==year){
      document.write("Rat, ");
  }
}

let yearsC=[2021, 2009, 1997, 1985, 1973, 1961, 1949, 1937];

for (let j = 0; j < yearsC.length; j++) {
  if (yearsC[j]==year){
      document.write("Cow, ");
  }
}

let yearsT=[2022, 2010, 1998, 1986, 1974, 1962, 1950, 1938];

for (let j = 0; j < yearsT.length; j++) {
  if (yearsT[j]==year){
      document.write("Tiger, ");
  }
}


let yearsRabbit=[2023, 2011, 1999, 1987, 1975, 1963, 1951, 1939];

for (let j = 0; j < yearsRabbit.length; j++) {
  if (yearsRabbit[j]==year){
      document.write("Rabbit, ");
  }
}


let yearsDragon=[2024, 2012, 2000, 1988, 1976, 1964, 1952, 1940];

for (let j = 0; j < yearsDragon.length; j++) {
  if (yearsDragon[j]==year){
      document.write("Dragon, ");
  }
}


let yearsSnake=[2025, 2013, 2001, 1989, 1977, 1965, 1953, 1941];
for (let j = 0; j < yearsSnake.length; j++) {
  if (yearsSnake[j]==year){
      document.write("Snake, ");
  }
}


let yearsHorse=[2026, 2014, 2002, 1990, 1978, 1966, 1954, 1942];
for (let j = 0; j < yearsHorse.length; j++) {
  if (yearsHorse[j]==year){
      document.write("Horse, ");
  }
}

let yearsGoat=[2027, 2015, 2003, 1991, 1979, 1967, 1955, 1943];
for (let j = 0; j < yearsGoat.length; j++) {
  if (yearsGoat[j]==year){
      document.write("Goat, ");
  }
}

let yearsMonkey=[2028, 2016, 2004, 1992, 1980, 1968, 1956, 1944];
for (let j = 0; j < yearsMonkey.length; j++) {
  if (yearsMonkey[j]==year){
      document.write("Monkey, ");
  }
}

let yearsRooster=[2029, 2017, 2005, 1993, 1981, 1969, 1957, 1945];
for (let j = 0; j < yearsRooster.length; j++) {
  if (yearsRooster[j]==year){
      document.write("Rooster, ");
  }
}

let yearsDog=[2030, 2018, 2006, 1994, 1982, 1970, 1958, 1946];
for (let j = 0; j < yearsDog.length; j++) {
  if (yearsDog[j]==year){
      document.write("Dog, ");
  }
}

let yearPig=[2031, 2019, 2007, 1995, 1983, 1971, 1959, 1947];
for (let j = 0; j < yearPig.length; j++) {
  if (yearPig[j]==year){
      document.write("Pig, ");
  }
}