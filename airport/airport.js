function createAirport(name, airlines, availableGates) {
  var airport = {
    name,
    airlines,
    availableGates,
  }
  return airport
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, planes) {
  if (airport.availableGates > planes) {
    airport.availableGates = airport.availableGates - planes
    return `Success! Current availability is ${airport.availableGates}.`
  } else {
    var overflow = -(airport.availableGates - planes)
    airport.availableGates = 0;
    return `Oh no! Not enough gates available. Current overflow is ${overflow}.`
  }
}

function checkAirlineLocations(allAirports, airportName) {
  var carriers = [];
  for (var i = 0; i < allAirports.length; i++){
    if (allAirports[i].airlines.includes(airportName)){
      carriers.push(allAirports[i].name)
    }
  }
  return carriers
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
