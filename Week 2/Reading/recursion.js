var isEven = function(num) {
num = Math.abs(num);
if (num === 0)
return true;
else if (num === 1)
return false;
else
return isEven(num - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(22));
console.log(isEven(18));
console.log(isEven(45));

