/*
1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/
const people = [
    {name: 'Shuvo', age: 19},
    {name: 'Hridoy', age: 20},
    {name: 'Ariful', age: 18}
]
// reduce for loop:
let sum = 0;
for(const peo  of people){
    sum = sum + peo.age;

}
console.log(sum);