const Traveller = function(journeys) {
  this.journeys = journeys;
};

//function to return an array of strings. the strings are the start locations, which in journey are the property .startLocation. we want an array of parts of objects, which suggests a .map function
Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(journey => journey.startLocation);
  return startLocations
};

//function to get the end locations. this will use the same idea as for getJourneyStartLocations, but accessing the end location property instead.
Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(journey => journey.endLocation);
  return endLocations
};

//function to get an array of all the objects that have the same .transport value as the parameter/argument. that sounds like a filter
Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter(journey => journey.transport === transport);
  return result;
};

//expecting an array of journey objects.
Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })

};

//the result will be a number - total distance travelled. this suggests a reduce method
Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0)
  return total
};

//this method should return an array of strings. Each string should be a mode of transport. Each string should only be included in the array once. first, map this.journeys to get only the modes of transport. then, get rid of duplicates.
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let modesOfTransport = this.journeys.map(journey => journey.transport);
//   let unique = modesOfTransport[0]
//   for (const mode of modesOfTransport) {
//     let index = modesOfTransport.indexOf(mode)
//     if (index === unique) {
//       modesOfTransport.splice(index, 1)
//     }
//
//   }
//   return modesOfTransport
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
const modesOfTransport = this.journeys.map(journey => journey.transport);

const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

return modesOfTransport.filter(unique)

};
// const unique = (value, index, self) => {
//   return self.indexOf(value) === index
// }
//
// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
// const uniqueAges = ages.filter(unique)

// console.log(uniqueAges)

// Park.prototype.removeBySpecies = function (species) {
//   const newDinosaurs = [];
//
//   for (const dinosaur of this.dinosaurs) {
//     if (dinosaur.species !== species) {
//       newDinosaurs.push(dinosaur);
//     }
//   }
//
//   this.dinosaurs = newDinosaurs;


// const index = this.dinosaurs.indexOf(dinosaur);
// this.dinosaurs.splice(index, 1);
//
//
// Park.prototype.findMostAttractiveDinosaur = function () {
//   let mostAttractiveDino = this.dinosaurs[0];
//
//   for (const dino of this.dinosaurs) {
//     if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay) {
//       mostAttractiveDino = dino;
//     }
//   }
//
//   return mostAttractiveDino;
// }


// Park.prototype.numberOfDinosaursByDiet = function () {
//   const numberOfDinosaursByDiet = {};
//
//   for (const dinosaur of this.dinosaurs) {
//     if (numberOfDinosaursByDiet[dinosaur.diet]) {
//       numberOfDinosaursByDiet[dinosaur.diet] += 1;
//     }
//     else {
//       numberOfDinosaursByDiet[dinosaur.diet] = 1;
//     }
//   }
//
//   return numberOfDinosaursByDiet;
// }





module.exports = Traveller;
