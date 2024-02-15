/*
 * Time Complexity - O(N^2)
 * Space Complexity - O(1)
 */
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; i < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

/*
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        else if (sum > 0) right--;
        else left++;
    }
}

/*
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
function countUniqueValuesFn(arr) {
    if (arr.length === 0) return 0;
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i += 1;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

let arr = [-3, -2, -1, 0, 1, 2, 3];
let arr2 = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
let countUniqueValues = [1, 1, 1, 1, 1, 2]; // 2
let countUniqueValues2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; // 7
let countUniqueValues3 = []; // 0
let countUniqueValues4 = [-2, -1, -1, 0, 1]; // 4
console.log(sumZero(arr))
console.log(sumZero2(arr2))
console.log(countUniqueValuesFn(countUniqueValues2))