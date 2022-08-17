
// Back in the stone age (before CSS), we used 
// spaces to align things on the screen. If we 
// have a 40-character wide table of Flintstone 
// family members, how can we center the following 
// title above the table with spaces?

let title = "Flintstone Family Members";

const length = 40;

const leftover = length - title.length;
const left = parseInt(leftover / 2);
title = title.padStart(left + title.length, ' ');
console.log(title);

