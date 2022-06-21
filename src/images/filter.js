// EXAMPLE OF FILTERS ONLY

import photos from "./original.js";

// City filter 
let filter1 = photos.filter(function (el) {
    return el.attributes[0].value === "Barcelona";
});

let filter2 = filter1.filter(function (el) {
    return el.attributes[1].value === "Day";
});

// console.log(filter2);

// module.exports = filter2;

export default filter2;
