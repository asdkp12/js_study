
for (var i = 1; i < 50; i++) {
  console.log(i);
  if (i > 9)
  break;
console.log('??')
}

console.log('===========')

grape: for (var i = 0; i < 3; i++) {
 strawberry: for (var j = 0; j < 2; j++){
    if (i===j){
      break strawberry;
    }
    console.log (`${i},${j}`)
  }
}