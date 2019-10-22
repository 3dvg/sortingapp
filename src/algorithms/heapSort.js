export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  let arraytowork = array.slice();
  heapSort(arraytowork, animations);

  return animations;
}
export function getSortedArray(array) {
  let arraytowork = array.slice();
  const _animations = [];
  return heapSort(arraytowork, _animations);
}
let arrLength;

function maxHeap(input, i, animations) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrLength && input[left] > input[max]) {
    max = left;
  }

  if (right < arrLength && input[right] > input[max]) {
    max = right;
  }

  if (max !== i) {
    swap(input, i, max, animations);
    maxHeap(input, max, animations);
  }
}

function swap(input, indexA, indexB, animations) {
  animations.push([indexA, indexB]);
  animations.push([indexA, indexB]);
  animations.push([indexA, input[indexB], indexB, input[indexA]]);
  const temp = input[indexA];
  input[indexA] = input[indexB];
  input[indexB] = temp;
}

function heapSort(input, animations) {
  arrLength = input.length;

  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    maxHeap(input, i, animations);
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i, animations);
    arrLength--;

    maxHeap(input, 0, animations);
  }
  return input;
}
