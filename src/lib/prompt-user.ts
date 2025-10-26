import readline from 'readline';

export function promptUser(question: string): Promise<string | null> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer === '' ? null : answer);
        });
    });
}