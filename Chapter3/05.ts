This video discusses the concept of adding function overloads.

So a function can be overloaded in following way:

function abc(a: string, b: string): number {
    return a.length + b.length;
}

function abc(a: any[], b: any[]): number {
    return a.length + b.length;
}

We can achieve this easily in following way:
function abc(a: string|any[], b:string|any[]): number {
    return a.length + b.length;
}
