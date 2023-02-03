// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(driver=> driver.toUpperCase() === name.toUpperCase())
}

function  fuzzyMatch(drivers, starter){
  return drivers.filter(driver=> driver.startsWith(starter))
}

function matchName(drivers, name){
  return drivers.filter(driver=> driver.name === name)
}
