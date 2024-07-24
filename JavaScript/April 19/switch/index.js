// // Switch : To select one of many options based on some condition

// /* 
// 1: January
// 2: February
// 3: March
// 4: April
// 5: May
// 6: June
// 7: July
// 8: August
// 9: September
// 10: October
// 11: November
// 12: December
// */

// let monthNumber = "A";

// switch (monthNumber) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid month number");
//     break;
// }


/* Grading System using switch */
/* 
"A": "90-100"
"B": "80-89"
"C": "70-79"
"D": "60-69"
"F": "0-59"
*/

let grade = 50;
switch (grade) {
  case "A":
    console.log("90-100");
    break;
  case "B":
    console.log("80-89");
    break;
  case "C":
    console.log("70-79");
    break;
  case "D":
    console.log("60-69");
    break;
  case "F":
    console.log("0-59");
    break;
  default:
    console.log("Invalid grade");
    break;
}