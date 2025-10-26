import HelloWorld from './lib/hello-world';
import { promptUser } from './lib/prompt-user';

class App {
    commandLineGreeting: string | null;
    helloWorld: HelloWorld;

    constructor() {
        const args = process.argv.slice(2);
        this.commandLineGreeting = args.length ? args.join(' ') : null;
        this.helloWorld = new HelloWorld();
    }

    async run(): Promise<void> {
        const personalMessage = this.commandLineGreeting ?? await promptUser('Say something: ') ?? 'from index.ts (default)';
        const greetingMessage = this.helloWorld.greet(personalMessage);
        process.stdout.write(greetingMessage);
        process.stdout.write('\n');
    }
}

const app = new App();
app.run().then(() => {
    process.exit(0);
}).catch((error) => {
    process.stderr.write(`\nAn error occurred: ${error}\n`);
    process.exit(1);
});