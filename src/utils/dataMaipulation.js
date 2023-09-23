/**
 * Add a 'Gamma' property to each object in an array based on provided properties.
 *
 * @param {Array} array - An array of objects.
 */
export const addGama = (array) => {
    array.forEach((wineObject) => {
      const { Ash, Hue, Magnesium } = wineObject;
      let newPropertyValue = (Ash * Hue) / Magnesium;
      wineObject["Gamma"] = newPropertyValue;
    });
  };
  