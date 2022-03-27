const findMatching = function (array, string){
    let selectedDrivers = array.filter(function(driver){
        return driver.toLowerCase() == string.toLowerCase();
    })
    return selectedDrivers;
}
const fuzzyMatch = function(array, letters){
    let selectedDrivers = array.filter(function(driver){
        return driver.slice(0, letters.length)==letters;
    })
    return selectedDrivers;
}
const matchName = function(arrayOfObjects, string){
    let selectedDrivers = arrayOfObjects.filter(function(driver){
        return driver['name']==string;
    })

    return selectedDrivers;
}