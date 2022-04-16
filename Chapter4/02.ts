This video discusses the concept of using interfaces to describe functions.
Here is an example:

The interface shown below defined a property version as well as a function which takes a string as a parameter
and returns an HTML element.

interface jQuery {
    (selector: string): HTMLElement;
    version: number;
}


In typescript, functions can also be assigned to variables.
So we are assigning a function of the type defined in jQuery interface to a variable '$'.

var $ = <jQuery>function(selector) {
    // Function implementation
}

Now we can call the function $ with a string argument as follows:
var element = $('#container');
So now element will be of type HTMLElement.
