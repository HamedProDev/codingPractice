const fetchData = async () => {
    let data = await fetch("https://api.example.com/data");
    let result = await data.json();
    console.log(result);
};

const load = async () => {
    try {
        const res = await fetch("url");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
};

const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const run = async () => {
    console.log("Start");
    await wait(2000);
    console.log("After 2 seconds");
};

run();