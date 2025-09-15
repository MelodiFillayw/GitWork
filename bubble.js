function bubbleSort(arr) {

//this is the outer loop
    let n = arr.length;
    for (let i = 0; i < n -1; i++) {
    
//thsi is the inner loop to allow for swapping and comapring
    
        for(let j =0; j< n - 1 - i ; j++){
    
        if (arr[j] > arr[j + 1]){
        
//swapping
        
           let temp = arr[j];
           arr[j]  = arr[j + 1];
           arr[j + 1] = temp;

        }
    }
}

    return arr;

}
module.exports = bubbleSort;