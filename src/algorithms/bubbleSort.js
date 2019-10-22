export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  doBubble(array, animations);
  return animations;
}
// function doBubble(a, animations) {
//   let swapped;
//   let array = a.slice();
//   do {
//     swapped = false;
//     for (let i = 0; i < array.length; i++) {
//       animations.push([i, i + 1]);
//       animations.push([i, i + 1]);
//       if (array[i] > array[i + 1]) {
//         animations.push([i, array[i + 1]]);

//         let temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//         swapped = true;
//       } else {
//         animations.push([i, array[i]]);
//       }
//     }
//   } while (swapped);
//   // console.log(array);
//   return array;
// }

function doBubble(a, animations) {
  let array = a.slice();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        animations.push([j, array[j + 1]]);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      } else {
        animations.push([j, array[j]]);
      }
    }
  }
  return array;
}
