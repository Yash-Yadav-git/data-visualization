export const addGama = (array) => {
    array.forEach((wineObject) => {
      const { Ash, Hue, Magnesium } = wineObject;
      let newPropertyValue = (Ash * Hue) / Magnesium;
      wineObject["Gamma"] = newPropertyValue;
    });
  };
  