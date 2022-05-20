const { performance } = require('perf_hooks');


function countPrimeNumbers() {

    function isPrime(num) {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false;
        return num > 1;
    }

    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count
}

const timeFirst = performance.now();
countPrimeNumbers()
const timeSecond = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${timeSecond - timeFirst} milliseconds.`)
