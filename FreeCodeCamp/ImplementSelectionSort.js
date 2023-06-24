// Implement Selection Sort
// Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function selectionSort(array) {
    // Only change code below this line
    for (let i = 0; i < array.length; i++) {
        let copy = array.slice(i);
        let min = copy[0];
        for (let j = 0; j < copy.length; j++) {
            if (copy[j] < min) {
                min = copy[j];
            }
        }
        let minIndex = array.indexOf(min, i);
        let tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
        console.log("i:", i, "min=", min, "array:", array);
    }
    return array;
    // Only change code above this line
}

// Test
let a = selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(a);