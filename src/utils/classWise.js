import { wineData } from "../constants/wine-Data";

export const classWise = wineData.reduce(
  (acc, curr) =>
    acc[curr.Alcohol]
      ? { ...acc, [curr.Alcohol]: [...acc[curr.Alcohol], { ...curr }] }
      : { ...acc, [curr.Alcohol]: [{ ...curr }] },
  {}
);

export const groupDataByClassAndProperty = (wineData, className, propertyName) => {
  let returnObject = {};
  wineData.forEach((item) => {
    if (returnObject[item[className]]) {
      returnObject[item[className]] = [...returnObject[item[className]], item[propertyName]]
    } else {
      returnObject[item[className]] = [item[propertyName]]
    }
  })
  return returnObject;
};

function getMean(array) {
  let value = array.reduce((acc, curr) => acc + parseFloat(curr), 0);
  return value / array.length;
}

function quickSort(arr) {
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
}
function getMedian(array) {
  const sortedArray = quickSort(array);
  const length = sortedArray.length;
  if (length % 2 !== 0) {
    return sortedArray[Math.floor(length / 2)];
  } else {
    const medianFirstValue = sortedArray[length / 2 - 1];
    const medianSecondValue = sortedArray[length / 2];
    return (medianFirstValue + medianSecondValue) / 2;
  }
}

function getMode(array) {
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
}

export const getEvaluatedValues = (groupedData) => {
  let  groupedValues= {};
  for (const key in groupedData) {
    groupedValues[key] = {
      mean: getMean(groupedData[key]).toFixed(3),
      median: getMedian(groupedData[key]),
      mode: getMode(groupedData[key]),
    };
  }
  return groupedValues;
};
