# Binary Search
### What is Binary Search?
* Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. 
* The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 
* A binary search allows us to find the insertion index for a target number in a sorted array.
* Note that a sorted array is a precondition for binary search.  

### Example
<img src="./binary search example.jpg" alt="an example" />
Given the above example, if we want to search a tarfet with a value 13, there are three cases in total:
* case 1: target == Array[mid]
* case 2: target < Array[mid]
* case 3: target > Array[mid]

#### We can define our sudo code as below:
`binarySearch(Array, n, target){
    start <- 0
    end <- n - 1
    while(start <= end){
        mid <- (start + end) / 2
        if Array[mid] == target
        return mid
        eles if target < Array[mid]
        {
            end <= mid - 1
        } else {
            start <- mid + 1
        }
    }
}`

