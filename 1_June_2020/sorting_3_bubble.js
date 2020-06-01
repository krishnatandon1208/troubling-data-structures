//WAP to sort an array using bubble sort.
//This will be non-optimized solution.

var arr = [5, 3, 1, 4, 2];

for(var i = 0; i<arr.length; i++) {
    for(var j=0; j< arr.length; j++){
        if (arr[j] > arr[j+1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

alert(arr);