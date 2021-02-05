const ages1 =[15, 14, 17, 21];
const ages2 =[14,65,12,31];
const ages3 =[14,65,12,31,45,58];
// const allAges = ages1.concat(ages2).concat('knight').concat(ages3);
// console.log(allAges);
const allAges =[...ages1,...ages2,5,...ages3];
console.log(allAges);