/*Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, 
который содержит все числа из него, включая начальное и конечное.*/

function range(start,end){
var total = []
while (start<=end) {
total.push(start); start ++;
}
return total
}
console.log(range(1,5))

/*Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. */

function sum(range){
let total = 0
for(var i = 0; i<range.length; i++) {
	total += range[i]  
}
return total
}
console.log(sum([1,3,5]))

/*повернуть массив вспять
function reverseArray(array){
let newArray = []
for(let i =  array.length-1; i>-1; i-- ){
	newArray.push(array[i])
}
return newArray
}
console.log(reverseArray(range(3,10)))
*/
