// Write a program that ask for a week day number and prints it's actual weekday!

/* 
1: Sunday
2: Monday
3: Tuesday
4: Wednesday
5: Thursday
6: Friday
7: Saturday
*/

// Using If statement

/* let dayNum = 6;

if (dayNum == 1) {
  console.log("Sunday");
} else if (dayNum == 2) {
  console.log("Monday");
} else if (dayNum == 3) {
  console.log("Tuesday");
} else if (dayNum == 4) {
  console.log("Wednesday");
} else if (dayNum == 5) {
  console.log("Thursday");
} else if (dayNum == 6) {
  console.log("Friday");
} else if (dayNum == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid input");
} */

// Using Switch

let num = 1;

switch (num) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid input");
    break;
}
