//Part 1: Stack Overflow
let counter = 0;
/**Call itself recursively */ 
function recursiveFunction() {
    counter++;
    recursiveFunction(); 
}

try {
    recursiveFunction();
} catch (e) {
    console.error('Error:', e.message);
    console.log('Maximum call stack size exceeded after', counter, 'calls.');
}