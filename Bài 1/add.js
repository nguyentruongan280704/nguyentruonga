// Bài 4;
// debugger;
// console.log(`1. ${age}`); // undefined
// var age = 20;
// console.log(`2. ${age}`); //20

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// console.log(`3. ${calAge(yearOfBirth)}`) //1995
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) // peter , parker , 1995

// console.log(`5. ${getFullName(firstName, lastName)}`); // peter, parker
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
// console.log(`6. ${getFullName(firstName, lastName)}`); // perter, parker

// bai 5
// debugger;
// console.log(age);  // undefined
// let age = 27;
// console.log(age); // 27
// {
// console.log(firstName); //undefined
// console.log(age);//undefined
// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";
// console.log(firstName);//peter
// console.log(lastName);//parker
// console.log(job);// spider man
// }

// bai 6
// debugger;
// a = 2;
// var a;
// console.log( a );// 2

// bai 7
// debugger;
// console.log( a );
// var a = 2; //undefined

//bai 8 
// debugger;
// function foo() {
//     var a;
//     console.log( a ); //underfind
//     a = 2;
//     }
//     foo();


// bai 11
// function xoaPhanTuCuoi (arr,n){
//     for (i=0; i<n; i++){
//         arr.pop()
//     } return arr
// }
// console.log(xoaPhanTuCuoi ([1,5,2,6,4,8,6,1,25,33],3));

// bai 12
//  function trave (arr,n){
// //     arr.length = n;
// //     return arr
//  }
//  console.log(trave([1,2,3,4,5,6], 2));
 
// return Array.splice(n, arr.length - n);

// bai 13
// const users = [
//     {
//       name: "Angelina Jolie",
//       age: 80
      
//     },
//     {
//       name: "Eric Jones",
//       age: 2
      
//     },
//     {
//       name: "Paris Hilton",
//       age: 5
      
//     },
//     {
//       name: "Kayne West",
//       age: 16
      
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100
      
//     }
//   ]

//   let newArr = users.map(function(users) {
//     return {
//         name: `<h1>${users.name}</h1>`,
//         age: `<h2>${users.age}</h2>`,
//     }
// })

// console.log(newArr);

// bài 14

// const users = [
//     {
//       name: "Angelina Jolie",
//       age: 80
      
//     },
//     {
//       name: "Eric Jones",
//       age: 2
      
//     },
//     {
//       name: "Paris Hilton",
//       age: 5
      
//     },
//     {
//       name: "Kayne West",
//       age: 16
      
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100
      
//     }
//   ]

// let newAdd = users.map(function(users){
//     return{
//        name:`<h1> ${users.name} </h1>`,
//     }
    
// })
// console.log(newAdd);


// let neww = users.map(function(users){
//     return{
//        age:`<h2> ${users.age} </h2>`,
//     }
    
// })
// console.log(neww);

// bai 15

// let arr = [5];
 
// function trible(num) {
//   return num * 3;
// }
// console.log( arr.map(trible) );

// bai 16

// let arr = [1,4,6,5,7,8,9,2]
// function taito(num){
//     return num > 5;
// }
// console.log(arr.filter(taito));

// bai 17
// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
//   ];
// let yasua = members.filter(function(members){
//     return members.gender === "female"
// })
// console.log(yasua);

// Bài 18. Viết một hàm nhận vào một mảng số tự nhiên, sử dụng find method của array trả về số
// chẵn đầu tiên của mảng đó, nếu không tìm thấy trả về undefined

// let arr = [1,2,6,4,8,11,22,3,5]
// let newArr= arr.find(function(arr){
//   return arr%2 == 0
// })
// console.log(newArr);

//---------------------------------------------------------------------------------------------------------

// Bài 19. Viết một hàm nhận vào 2 tham số, tham số đầu tiên là một mảng số tự nhiên, tham số
// thứ 2 là số cần chia hết. Sử dụng find method của array, trả về số đầu tiên trong mảng
// đầu vào chia hết cho tham số thứ 2. Nếu không tìm thấy trả về undefined

// function findDivisibleNum(array, x) {
//     return array.find(function(array){
//       return array % x == 0
//     })
//   }

// console.log(findDivisibleNum([1,2,3,4,5,6,7,8,9,10], 7));

//---------------------------------------------------------------------------------------------------------

// Bài 20
// Viết một hàm nhận vào một mảng ngẫu nhiên. Sử dụng phương thức reduce của array,
// trả về object mới với các phần tử trong mảng là key,
// và value sẽ là số lần xuất hiện của chúng ở trong mảng

// Input:
// countOccurrences(['a', 'b', 'c', 'b', 'a'])
// Expected output:
// { a: 2, b: 2, c: 1 };

// let arr = ["a", "b", "c", "b", "a"];

// function countOccurrences(arr) {
//   let result = {};

//   for (let i = 0; i <= arr.length - 1; i++) {
//     let element = arr[i];
//     if (!result[element]) {
//       result[element] = 1;
//     } else {
//       result[element] = result[element] + 1;
//     }
//   }
//   return result;
// }
// countOccurrences(arr);

// C2:
// let arr = ["a", "b", "c", "b", "a"];

// arr.reduce(function (previousValue, currentValue) {
//   console.log(previousValue, currentValue);
//   if (!previousValue[currentValue]) {
//     previousValue[currentValue] = 1;
//   } else {
//     previousValue[currentValue] = previousValue[currentValue] + 1;
//   }
//   return previousValue;
// });

// bai 21

// function flatternArr(arr){
//     return arr.reduce(function(pre, cur){
    //     for(let i = 0; i <= cur.length - 1; i++){
    //         pre.push(cur[i]);
    //     }
    //     return pre;
    // },[]);
    // -------------------------------
    // return pre.concat(cur);
//     return [...pre, ...cur];
//     });
// }

// let result = flatternArr([
//     [1, 2, 3],
//     [4, 5],
// ]);
// console.log(result);
// [1,2,3].concat([4,5]);

// concat ; dung để nối các mảng với nhau
// ba Chấm ... ; coppi nhanh 1 phần của object, array

// ------------------------------------------------

//bai 22
// function sum(arr){
//   let result = 0;
//   for(let i=arr[0]; i<=arr[1]; i++){
//     result = result + i;
//   }
//   return result;
// } 
// console.log(sum([4,1]));

// bai 23;
// function diff(arr1, arr2){
//     // lọc những phần tử ở trong arr1 chưa tồn tại trong arr2
//     let result1 = arr1.filter(function(e , i){
//         return arr2.indexOf(e) !== -1;
//     });
//     // lọc những phần tử ở 
//     let result2 = arr2.filter(function(e , i){
//         return arr1.indexOf(e) !== -1;
//     });
//     console.log(result1);
//     console.log(result2);
    // nối 2 mảng result lai và retunr
//     return result1.concat(result2);
// }
// let result = diff([1,2,3,4], [1,2,1]);
// console.log(result);    


// bài 24
// function sumFib(n){
// let num1 = 1;
// let num2 = 1;
// let temp;
// let result = [];
// for(let i = 1; i <= n; i++){
//     if(num1 <= n){
//         result.push(num1);
//     }
//     temp = num1;
//     num1 = num2;
//     num2 = temp + num2;
// }
// let sum = 0;
// for (let e of result){
//     if(e % 2 == 1){
//         sum = sum + e;
//     }
// }
// return sum;
// }
// console.log(sumFib(10));

// bai 26
function flatternArr(arr) {
    return arr.reduce(function (pre, cur) {
      return [...pre, ...cur]; //Spread operator
      // Copy nhanh 1 phần obj hoặc array đang tồn tại
    });
  }
  
  function uniqueArray() {
    let result = [];
    for (let i = 0; i <= arguments.length - 1; i++) {
      result.push(arguments[i]);
    }
    result = flatternArr(result);
    return result.filter(function (e, i) {
      return result.indexOf(e) === i;
    });
  }
  
  let result = uniqueArray([1, 2, 3, 3], [3, 4, 5, 6], [3, 7, 8, 9]);
  console.log(result);





