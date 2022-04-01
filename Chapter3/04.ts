This video discusses specifying function parameter types.
Example :
function abc(a: string, b: string): string {
    return a+b;
}

We can also specify multiple types for one function parameter.
function abc(a: string | any, b: string): any {
    return a+b;
}
