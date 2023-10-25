function insertionSort(arr) {
  const n = arr.length;
  
  for (let i = 2; i < n; i++) {
      let currentElement = arr[i]; //mảng tại index 1  với giá trị 2
      let j = i - 1; // j === 1
      
      while (j >= 0 && arr[j] > currentElement) {
          arr[j + 1] = arr[j]; // arr[j+1] là arr[1] với giá trị 2 sẽ bằng với arr[i] === arr[1] = 2
          j--; //giảm j đi 1 đơn vị j = 0
      }
      
      arr[j + 1] = currentElement; // arr[j+1] tương đương a[1] = 7
  }
}
const arrayToSort1 = [2, 7, 4, 1, 5, 3];

const arrayToSort = [7, 2, 4, 1, 5, 3];

insertionSort(arrayToSort);

console.log("Sorted array:", arrayToSort);