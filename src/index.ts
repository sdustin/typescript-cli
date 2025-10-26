import HelloWorld from './lib/hello-world';
import { promptUser } from './lib/prompt-user';

class App {
    commandLineGreeting: string | null;
    helloWorld: HelloWorld;

    constructor() {
        const args = process.argv.slice(2);
        this.commandLineGreeting = args.length ? args.join(" ") : null;
        this.helloWorld = new HelloWorld();
    }

    async run() {
        const personalMessage = this.commandLineGreeting || await promptUser("Say something: ") || "from index.ts (default)";
        const greetingMessage = this.helloWorld.greet(personalMessage);
        console.log(greetingMessage);
    }
}

const app = new App();
app.run().then(() => {
    process.exit(0);
}).catch((error) => {
    console.error("An error occurred:", error);
    process.exit(1);
});