"use strict";

// You work for company that builds thermometers for smart home. Given an array of temperatures for one day.
// You need to calculate temperature amplitude ignoring error records.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Amplitude - the difference between the highest and the lowest tempereture.
function calculateTempAmplitude(temperatures) {
  let minValue = 1000;
  let maxValue = -1000;

  for (let i = 0; i < temperatures.length; i++) {
    const element = temperatures[i];
    const isNumber = typeof element == "number";
    if (!isNumber) continue;

    if (element < minValue) {
      minValue = element;
      continue;
    } else if (element > maxValue) {
      maxValue = element;
    }
  }

  return maxValue - minValue;
}

const tempAmplitude = calculateTempAmplitude(temperatures);
console.log(tempAmplitude);
