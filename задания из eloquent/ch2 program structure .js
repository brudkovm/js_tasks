let counter = 1;
let result = "#";
while (counter <=7){
counter += 1;
result += "#";
console.log(result);
}
/*Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
#
##
###
####
#####
######
#######
Будет полезно знать, что длину строки можно узнать, приписав к переменной
.length.
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
*/


let counter = 1;
while (counter <101){
	if (counter % 3 == 0 & counter % 5 == 0)
  	console.log('FizzBuzz')
  else if (counter % 3 == 0)
  	console.log('Fizz')
  else if (counter % 5 == 0)
  	console.log('Buzz')
  else
		console.log(counter);
	counter += 1;
}
/*Напишите программу, которая выводит через console.log все цифры от 1 до
100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна
выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех
чисел, которые делятся и на 3 и на 5.*/

/*Напишите программу, создающую строку, содержащую решётку 8х8, в
которой линии разделяются символами новой строки. На каждой позиции
либо пробел, либо #. В результате должна получиться шахматная доска.*/
let el1 = '# ';
let el2 = ' #';
let size = prompt("Введите размер доски (1 цифра) ");
let counter = 1
while (counter <=size/2){
  console.log(el1.repeat(size/2));
	console.log(el2.repeat(size/2));
  counter +=1;
}
	


	