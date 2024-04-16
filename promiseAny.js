const fetchData = async () => {
  const requests = [
    fetch("/api/data1").then((res) => res.json()),
    fetch("/api/data2").then((res) => res.json()),
    fetch("/api/data3").then((res) => res.json()),
  ];

  try {
    const firstResponse = await Promise.any(requests);
    console.log("First response:", firstResponse);
  } catch (error) {
    console.error("All requests failed:", error);
  }
};

const loadResource = async (sources) => {
  const promises = sources.map((src) => fetch(src).then((res) => res.blob()));

  try {
    const resource = await Promise.any(promises);
    console.log("Resource loaded:", resource);
  } catch (error) {
    console.error("Could not load resource from any source:", error);
  }
};

loadResource(["cdn1.com/res.jpg", "cdn2.com/res.jpg", "local/res.jpg"]);

const connectToSocket = (server) => {
  return new Promise((resolve, reject) => {
    // Simulate a successful or failed connection randomly
    const success = Math.random() > 0.5;

    setTimeout(() => {
      if (success) {
        resolve(server);
      } else {
        reject(new Error(`Could not connect to ${server}`));
      }
    }, Math.random() * 2000); // Simulate a random connection time (up to 2 seconds)
  });
};

const connectToServer = async (servers) => {
  const promises = servers.map((server) => connectToSocket(server));

  try {
    const connection = await Promise.any(promises);
    console.log("Connected to:", connection);
  } catch (error) {
    console.error("Could not connect to any server:", error);
  }
};

connectToServer(["ws://server1.com", "ws://server2.com", "ws://server3.com"]);
