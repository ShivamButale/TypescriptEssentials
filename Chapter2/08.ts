This video discusses the concept of spread operator. <br/>
This allows us many unique features. <br/>

Example 1) Taking any number of parameters

function operation(action, ..values): any {
    const sum = 0;
    for(const val of values) {
        switch(action) {
            case '+':
                sum += val;
            case '-':
                sum -= val;
        }
    }
    return sum;
}

This allows us to call this function with variable number of arguments.

operation('+', 1,2,3) would return 6
operation('+',10,20) would return 30

Example 2) Using it to
const source = [4,5,6]
const target = [1,2,3, ..source,7,8]
Now target is this array: [1,2,3,4,5,6,7,8]

Example 3)
const a = [1,2,3]
const b = [4,5,6]
a.push(...b)
Now a is the array : [1,2,3,4,5,6]
