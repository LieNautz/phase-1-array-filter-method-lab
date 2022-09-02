// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

//This code returns all drivers that match the passed in name
//Returns matching drivers if case(lower case, upper case etc) does not match but letters do (i.e. SArah, SarAH, Sarah etc)
//Returns an empty array if there is no match.
function findMatching(haystack, needle) {
  const newDriversArr = haystack.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === needle.toLowerCase()
  );
  return newDriversArr;

  // haystack.filter(function(el) {
  //     return el.toLowerCase() === needle.toLowerCase()
  // })
}

//returns a driver if beginning provided letters (ie.e a, b, c, d etc ) match.
//does not return drivers if only middle or ending letters match
//Does not return drivers if only middle or ending letters match
function fuzzyMatch(haystack, needle) {
  const newArr = haystack.filter((possibleMatch) => {
    // return possibleMatch.toLowerCase().indexOf(needle.toLowerCase()) == 0;
    return possibleMatch.toLowerCase().startsWith(needle.toLowerCase());
  });
  return newArr;
}

// console.log(fuzzyMatch(drivers, "Sa"));

//access the data structure to check if name matches
function matchName(haystack, needle) {
  const newObj = haystack.filter((obj) => obj["name"] == needle);
  return newObj;
}
