// data.js
export const spicyFoods = [
    {
      id: 1,
      name: "Spicy Chicken Wings",
      heatLevel: "Hot",
      cuisine: "American",
    },
    {
      id: 2,
      name: "Sichuan Mapo Tofu",
      heatLevel: "Medium",
      cuisine: "Chinese",
    },
    {
      id: 3,
      name: "Spicy Green Curry",
      heatLevel: "Hot",
      cuisine: "Thai",
    },
    {
      id: 4,
      name: "Spicy Tacos",
      heatLevel: "Medium",
      cuisine: "Mexican",
    },
  ];
  
  export function getNewRandomSpicyFood() {
    const cuisines = ["American", "Chinese", "Thai", "Mexican"];
    const heatLevels = ["Mild", "Medium", "Hot"];
    const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
    const randomHeatLevel = heatLevels[Math.floor(Math.random() * heatLevels.length)];
  
    return {
      id: Date.now(),
      name: `New Spicy Food`,
      heatLevel: randomHeatLevel,
      cuisine: randomCuisine,
    };
  }
  