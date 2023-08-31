setInterval(() => {
    console.log('hello world');
}, 2000);

console.log('I will run ');
/**
 * process stays alive unless;
 * 1. Kill Process CONTROL + C
 * 2. Unexpected Error
 */