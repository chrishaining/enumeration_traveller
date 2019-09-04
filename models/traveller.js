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



Traveller.prototype.getUniqueModesOfTransport = function () {
const modesOfTransport = this.journeys.map(journey => journey.transport);

const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

return modesOfTransport.filter(unique)

};


module.exports = Traveller;
