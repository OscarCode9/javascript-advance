let cachedData;
let cacheExpiry;

function fetchData() {
    // Logic to fetch data from an API
    console.log('Fetching data from API...');
    cachedData = 'Mock data from API';
    cacheExpiry = Date.now() + 300000; // Cache expires after 5 minutes (300,000 milliseconds)
}

function getData() {
    if (!cachedData || Date.now() >= cacheExpiry) {
        fetchData(); // Fetch new data if cache is empty or expired
    }
    return cachedData;
}

// Usage
console.log(getData()); // Fetches data from API for the first time
setTimeout(() => {
    console.log(getData()); // Uses cached data
}, 2000); // Wait for 2 seconds

setTimeout(() => {
    console.log(getData()); // Uses cached data
}, 2000); // Wait for 2 seconds