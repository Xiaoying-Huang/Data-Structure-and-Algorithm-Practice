// Pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise

/**************************************************Solution****************************************************/
//1. find out the pair 
//2. Seek index of the pair using indexOf() method, start searching from i+1, so that the return value could be as low as possible
//3. Save the indices found into an array pair indices, so that when next pair is found, the indices of the pair could be checked so that it's not used duplicated
//4. Sum up the indices array

function pairwise(arr, arg) {
    let pairIndices = [];
    for (let i = 0; i < arr.length; i++) {
        let pair = arg - arr[i];
        let pairIndex = arr.indexOf(pair, i + 1);//start searching from i+1, so that the previous elements not to be used. If pairIndex===-1, it meant that the pair element doesn't exist.
        while (pairIndex < arr.length && pairIndex !== -1) {
            if (!pairIndices.includes(pairIndex) && (!pairIndices.includes(i))) {
                pairIndices.push(i, pairIndex);
                break;
            } else {
                pairIndex = arr.indexOf(pair, pairIndex + 1);
            }
        }
    }
    let sumOfPairIndices;
    if (pairIndices.length==0) {
        sumOfPairIndices = 0;
    } else {
        sumOfPairIndices = pairIndices.reduce((previous, current) => previous + current);
    }

    console.log(pairIndices);
    console.log(sumOfPairIndices);
    return sumOfPairIndices;
}

pairwise([], 100);