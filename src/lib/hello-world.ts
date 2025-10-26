class HelloWorld {
    constructor(private greeting = 'Hello world') {}

    greet(message?: string): string {
        return `${this.greeting} ${message || ''}`.trim();
    }
}

export default HelloWorld;