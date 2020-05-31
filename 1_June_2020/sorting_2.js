//WAP to sort the array based on the length of the string.

var stringArr = ["Steele", "Colt", "Algorithms", "DSA"];

function sortByLength(str1, str2) {
    return (str1.length - str2.length);
}

stringArr.sort(sortByLength);