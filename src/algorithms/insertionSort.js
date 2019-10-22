export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSort(array, animations);
  return animations;
}
function insertionSort(arr, animations) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      animations.push([j + 1, j]);
      animations.push([j + 1, j]);
      animations.push([j + 1, arr[j]]);
      arr[j + 1] = arr[j];
    }

    animations.push([j + 1, i]);
    animations.push([j + 1, i]);
    animations.push([j + 1, el]);
    arr[j + 1] = el;
  }
  //console.log(arr);
  return arr;
}
