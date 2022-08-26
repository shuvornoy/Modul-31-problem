/*
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/
//reduce:
const array = [ 1, 9, 17, 22 ];
const total = numbers.reduce( (previous, current) => previous + current , 0);
console.log(total);

// reduce for loop:
let sum = 0;
for(const num  of array){
    sum = sum + num;

}
console.log(sum);