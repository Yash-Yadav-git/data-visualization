/**
 * Calculate the mean (average) of an array of numeric values.
 *
 * @param {Array} array - An array of numeric values.
 * @returns {number} The mean (average) of the values in the array.
 */
export const getMean = (array) => {
  let value = array.reduce((acc, curr) => acc + parseFloat(curr), 0);
  return value / array.length;
};

/**
 * Calculate the mean (average) of an array of numeric values.
 *
 * @param {Array} array - An array of numeric values.
 * @returns {number} The mean (average) of the values in the array.
 */
export const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

/**
 * Calculate the median of an array of values.
 *
 * @param {Array} array - An array of numeric values.
 * @returns {number} The median of the values in the array.
 */
export const getMedian = (array) => {
  const sortedArray = quickSort(array);
  const length = sortedArray.length;
  if (length % 2 !== 0) {
    return sortedArray[Math.floor(length / 2)];
  } else {
    const medianFirstValue = sortedArray[length / 2 - 1];
    const medianSecondValue = sortedArray[length / 2];
    return (medianFirstValue + medianSecondValue) / 2;
  }
};

/**
 * Calculate the mode of an array of values.
 *
 * @param {Array} array - An array of values.
 * @returns {any} The mode (most frequent value) in the array.
 */
export const getMode = (array) => {
  let frequency = {};
  let highestVlaue = -Infinity;
  quickSort(array).forEach((value) => {
    if (frequency[value]) {
      frequency[value]++;
    } else {
      frequency[value] = 1;
    }
    highestVlaue = Math.max(highestVlaue, frequency[value]);
  });
  let result = Object.keys(frequency).find(
    (x) => frequency[x] === highestVlaue
  );
  return result;
};

/**
 * Calculate mean, median, and mode for an array of values.
 *
 * @param {Array} array - An array of numeric values.
 * @returns {Object} An object containing Mean, Median, and Mode.
 */
export const calculateAll = (array) => {
  return {
    Mean: Number(getMean(array)).toFixed(3),
    Median: Number(getMedian(array)).toFixed(3),
    Mode: Number(getMode(array)).toFixed(3),
  };
};
