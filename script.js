 let starRadius, 
    // это флаг что число соответствует условиям
    flagOk,
     // звездочка будет представлена как массив строк
     star = [];
// проверка ввода
 inputStarRadius.addEventListener('keyup', function (evt) {
     let checkInput = this.value;
     starRadius = undefined; 
     flagOk = false;

     if (checkInput == '') msg.innerHTML = 'введите  число';
     else if (checkInput < 7) msg.innerHTML = 'маловато будет!<br>эта программа не работает с цифрами меньше 7 !';
     else if (checkInput > 6 && checkInput < 20 && Number.isInteger(+checkInput)) {
         msg.textContent = 'OK !';
         flagOk = true;
     } else if (checkInput > 19) msg.innerHTML= 'это много!<br>эта программа не работает с цифрами больше 19 !';
     else msg.innerHTML = 'Ведите целое число от 7 до 19<br>буквы и символы недопустимы для этого кода';
 });

 function makeStar() {

     for (let i = 0; i < (starRadius); i++) {

         let starString = [];

         //  заполняем массив строки пробелами
         for (let j = 0; j < (starRadius * 2 - 1); j++) {
             starString[j] = ' ';
         }
         // расставляем звездочки на свои места
         starString[i] = starString[starRadius - 1] =
             starString[(starRadius * 2 - 2) - i] = "*";

         // делаем верхнюю и нижнюю похожие строки из массива
         star[i] = star[(starRadius * 2 - 2) - i] =
             starString.join("");
     }

 }


 function drawStar() {

     if (flagOk) starRadius = document.getElementById("inputStarRadius").value;

     clearStarDiv();
     makeStar();

     for (let e = 0; e < (starRadius * 2 - 1); e++) {     
               
         //отрисовка звездочки  в div
         document.getElementById("star").
         insertAdjacentHTML('beforeend', '<pre>' + star[e] + '</pre>');


     }
 }

 function clearStarDiv() {
     document.getElementById("star").innerHTML = "";
    if (flagOk) document.getElementById("msg").innerHTML = "";
    // document.getElementById("msg").innerHTML = "";
 }