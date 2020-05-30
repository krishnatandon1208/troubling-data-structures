function linearSearch(arr, val){
    for(var i=0; i<arr.length; i++) {
        if (arr[i] === val) {
            return i;
        } else {
            continue;
        }
    }
    return -1;
}

linearSearch([10, 15, 20, 25, 30], 15);
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4);