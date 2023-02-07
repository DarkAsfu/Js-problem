// function findSecondLargest(numbers) {
//     numbers.sort((a, b) => b - a);
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] !== numbers[0]) {
//         return numbers[i];
//       }
//     }
//   }
  
//   console.log(findSecondLargest([4, 5, 2, 3, 1]));
  function findSecondLargest(numbers) {
    let max = -Infinity;
    let secondMax = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        secondMax = max;
        max = numbers[i];
      } else if (numbers[i] > secondMax && numbers[i] !== max) {
        secondMax = numbers[i];
      }
    }
    return secondMax;
  }
  
  console.log(findSecondLargest([4, 5, 2, 3, 1]));
  