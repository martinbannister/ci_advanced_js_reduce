
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
// acc means accumulator, represents the value that will ultmately be returned from the reduce method
// curr means current value

// the reduce below can be made more concise as the line below (without the extra logging)
/* let sum = nums.reduce((acc, curr) => acc + curr, 0); */
let sum = nums.reduce((acc, curr) => {
  console.log(
    'Accumulator:', acc,
    'Current Value:', curr,
    'Total:', acc + curr
  );
  return acc + curr
}, 0);
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);


// Grouping by a property, and totaling it too
// Totals the years experience for each person in the same profession
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession; //Sets the variable key to the current profession in the object being evaluated
  if (!acc[key]) { //uses square bracket notation to check if the profession exists as a key in the accumulator object
    // if the profession isn't a ket then create it by assigning it the years experience of the current object
    acc[key] = curr.yrsExperience;
  } else {
    // if the profession key does exist then add the current object years experience to it
    acc[key] += curr.yrsExperience;
  }
  return acc; // return the accumulator object
}, {});

console.log(experienceByProfession);
