import React, { Component } from "react";
import "./Visualizer.css";
import * as algorithm_MS from "../algorithms/mergeSort";
import * as algorithm_BS from "../algorithms/bubbleSort";
import * as algorithm_HS from "../algorithms/heapSort";
import * as algorithm_QS from "../algorithms/quickSort";
import * as algorithm_IS from "../algorithms/insertionSort";
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 100;

// This is the main color of the array bars.
const PRIMARY_COLOR = "black";
let buttonClass = "button";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "magenta";
class Visualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];

    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(this.randomIntFromInterval(1, 100));
    }
    document.getElementById("btnBubble").disabled = false;
    document.getElementById("btnReset").disabled = false;
    document.getElementById("btnMerge").disabled = false;
    document.getElementById("btnQuick").disabled = false;
    document.getElementById("btnHeap").disabled = false;
    document.getElementById("btnInsertion").disabled = false;

    document.getElementById("btnBubble").classList.remove("disabled");
    document.getElementById("btnReset").classList.remove("disabled");
    document.getElementById("btnMerge").classList.remove("disabled");
    document.getElementById("btnQuick").classList.remove("disabled");
    document.getElementById("btnHeap").classList.remove("disabled");
    document.getElementById("btnInsertion").classList.remove("disabled");
    this.setState({ array });
    this.colorBarsDefault(array);
  }
  colorBarsDefault(arr) {
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < arr.length; i++) {
      if (arrayBars[i] !== undefined) {
        arrayBars[i].style.backgroundColor = "black";
      }
    }
  }
  randomIntFromInterval = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  mergeSort() {
    document.getElementById("btnBubble").disabled = true;
    document.getElementById("btnReset").disabled = true;
    document.getElementById("btnMerge").disabled = true;
    document.getElementById("btnQuick").disabled = true;
    document.getElementById("btnHeap").disabled = true;
    document.getElementById("btnInsertion").disabled = true;

    document.getElementById("btnBubble").classList.add("disabled");
    document.getElementById("btnReset").classList.add("disabled");
    document.getElementById("btnMerge").classList.add("disabled");
    document.getElementById("btnQuick").classList.add("disabled");
    document.getElementById("btnHeap").classList.add("disabled");
    document.getElementById("btnInsertion").classList.add("disabled");
    const animations = algorithm_MS.getMergeSortAnimations(this.state.array);
    const sortedArray = algorithm_HS.getSortedArray(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}%`;
          let count = 0;
          for (let i = 0; i < sortedArray.length; i++) {
            if (parseInt(arrayBars[i].style.height) === sortedArray[i]) {
              arrayBars[i].style.backgroundColor = "lime";
              count++;
            }
          }
          if (count === NUMBER_OF_ARRAY_BARS) {
            document.getElementById("btnReset").disabled = false;
            document.getElementById("btnReset").classList.remove("disabled");
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  bubbleSort() {
    document.getElementById("btnBubble").disabled = true;
    document.getElementById("btnReset").disabled = true;
    document.getElementById("btnMerge").disabled = true;
    document.getElementById("btnQuick").disabled = true;
    document.getElementById("btnHeap").disabled = true;
    document.getElementById("btnInsertion").disabled = true;

    document.getElementById("btnBubble").classList.add("disabled");
    document.getElementById("btnReset").classList.add("disabled");
    document.getElementById("btnMerge").classList.add("disabled");
    document.getElementById("btnQuick").classList.add("disabled");
    document.getElementById("btnHeap").classList.add("disabled");
    document.getElementById("btnInsertion").classList.add("disabled");
    const animations = algorithm_BS.getBubbleSortAnimations(this.state.array);
    const sortedArray = algorithm_HS.getSortedArray(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (arrayBars[barTwoIdx] !== undefined) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}%`;
          let count = 0;
          for (let i = 0; i < sortedArray.length; i++) {
            if (parseInt(arrayBars[i].style.height) === sortedArray[i]) {
              arrayBars[i].style.backgroundColor = "lime";
              count++;
            }
          }
          if (count === NUMBER_OF_ARRAY_BARS) {
            document.getElementById("btnReset").disabled = false;
            document.getElementById("btnReset").classList.remove("disabled");
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  insertionSort() {
    document.getElementById("btnBubble").disabled = true;
    document.getElementById("btnReset").disabled = true;
    document.getElementById("btnMerge").disabled = true;
    document.getElementById("btnQuick").disabled = true;
    document.getElementById("btnHeap").disabled = true;
    document.getElementById("btnInsertion").disabled = true;

    document.getElementById("btnBubble").classList.add("disabled");
    document.getElementById("btnReset").classList.add("disabled");
    document.getElementById("btnMerge").classList.add("disabled");
    document.getElementById("btnQuick").classList.add("disabled");
    document.getElementById("btnHeap").classList.add("disabled");
    document.getElementById("btnInsertion").classList.add("disabled");
    const animations = algorithm_IS.getInsertionSortAnimations(
      this.state.array
    );
    const sortedArray = algorithm_HS.getSortedArray(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (arrayBars[barTwoIdx] !== undefined) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}%`;
          let count = 0;
          for (let i = 0; i < sortedArray.length; i++) {
            if (parseInt(arrayBars[i].style.height) === sortedArray[i]) {
              arrayBars[i].style.backgroundColor = "lime";
              count++;
            }
          }
          if (count === NUMBER_OF_ARRAY_BARS) {
            document.getElementById("btnReset").disabled = false;
            document.getElementById("btnReset").classList.remove("disabled");
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  heapSort() {
    document.getElementById("btnBubble").disabled = true;
    document.getElementById("btnReset").disabled = true;
    document.getElementById("btnMerge").disabled = true;
    document.getElementById("btnQuick").disabled = true;
    document.getElementById("btnHeap").disabled = true;
    document.getElementById("btnInsertion").disabled = true;

    document.getElementById("btnBubble").classList.add("disabled");
    document.getElementById("btnReset").classList.add("disabled");
    document.getElementById("btnMerge").classList.add("disabled");
    document.getElementById("btnQuick").classList.add("disabled");
    document.getElementById("btnHeap").classList.add("disabled");
    document.getElementById("btnInsertion").classList.add("disabled");
    const animations = algorithm_HS.getHeapSortAnimations(this.state.array);
    const sortedArray = algorithm_HS.getSortedArray(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight1, barTwoIdx, newHeight2] = animations[i];

          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;

          barTwoStyle.height = `${newHeight2}%`;
          barOneStyle.height = `${newHeight1}%`;

          let count = 0;
          for (let i = 0; i < sortedArray.length; i++) {
            if (parseInt(arrayBars[i].style.height) === sortedArray[i]) {
              arrayBars[i].style.backgroundColor = "lime";
              count++;
            }
          }
          if (count === NUMBER_OF_ARRAY_BARS) {
            document.getElementById("btnReset").disabled = false;
            document.getElementById("btnReset").classList.remove("disabled");
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  quickSort() {
    document.getElementById("btnBubble").disabled = true;
    document.getElementById("btnReset").disabled = true;
    document.getElementById("btnMerge").disabled = true;
    document.getElementById("btnQuick").disabled = true;
    document.getElementById("btnHeap").disabled = true;
    document.getElementById("btnInsertion").disabled = true;

    document.getElementById("btnBubble").classList.add("disabled");
    document.getElementById("btnReset").classList.add("disabled");
    document.getElementById("btnMerge").classList.add("disabled");
    document.getElementById("btnQuick").classList.add("disabled");
    document.getElementById("btnHeap").classList.add("disabled");
    document.getElementById("btnInsertion").classList.add("disabled");

    const animations = algorithm_QS.getQuickSortAnimations(this.state.array);

    const sortedArray = algorithm_HS.getSortedArray(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight1, barTwoIdx, newHeight2] = animations[i];

          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;

          barTwoStyle.height = `${newHeight2}%`;
          barOneStyle.height = `${newHeight1}%`;

          let count = 0;
          for (let i = 0; i < sortedArray.length; i++) {
            if (parseInt(arrayBars[i].style.height) === sortedArray[i]) {
              arrayBars[i].style.backgroundColor = "lime";
              count++;
            }
          }
          if (count === NUMBER_OF_ARRAY_BARS) {
            document.getElementById("btnReset").disabled = false;
            document.getElementById("btnReset").classList.remove("disabled");
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.state.array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}%` }}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="btnContainer">
          <button
            id="btnReset"
            className={buttonClass}
            onClick={() => this.resetArray()}
          >
            New Array
          </button>
          <button
            id="btnQuick"
            className={buttonClass}
            onClick={() => this.quickSort()}
          >
            Quick Sort
          </button>

          <button
            id="btnHeap"
            className={buttonClass}
            onClick={() => this.heapSort()}
          >
            Heap Sort
          </button>
          <button
            id="btnMerge"
            className={buttonClass}
            onClick={() => this.mergeSort()}
          >
            Merge Sort
          </button>
          <button
            id="btnBubble"
            className={buttonClass}
            onClick={() => this.bubbleSort()}
          >
            Bubble Sort
          </button>
          <button
            id="btnInsertion"
            className={buttonClass}
            onClick={() => this.insertionSort()}
          >
            Insertion Sort
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Visualizer;
