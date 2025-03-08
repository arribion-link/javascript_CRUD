 //callback()
        function fetchData(callback) {
            setTimeout(
                 function me() {
                     callback("Data received!");
                 }, 2000);
         }
         fetchData(
            function (message) {
                 console.log(message);
         });


 //promise()
                const fetchData = new Promise((resolve, reject) => {
                     setTimeout(() => {
                         resolve("Data received!");
                    }, 2000);
                });

                fetchData.then((message) => console.log(message));

 // //asynch function
         async function fetchData() {
             return "Data received!";
         }

         fetchData().then(console.log);


 // //using await with promises()
         function getData() {
             return new Promise((resolve) => {
                 setTimeout(() => resolve("Fetched Data"), 2000);
             });
         }
         async function fetchData() {
             console.log("Fetching...");
             let data = await getData();
             console.log(data);
         }

         fetchData();



// //async/await   error handling
                 async function fetchData() {
                     try {
                         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                        let data = await response.json();
                        console.log(data);
                    } catch (error) {
                        console.error("Error fetching data:", error);
                    }
                }

                fetchData();



        //parallel execution with { promise.all  }
        async function fetchAll() {
            const [data1, data2] = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json()),
                fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) => res.json()),
            ]);
            console.log(data1, data2);
        }

        fetchAll();


        // Other Methods:
        // Promise.race() – Resolves/rejects as soon as one promise finishes.
        // Promise.allSettled() – Resolves when all promises settle (success or failure).
        // Promise.any() – Resolves when the first successful promise is completed.


        //         Key Topics to Study Around Asynchronous JavaScript
        // ✔️ Event Loop & Call Stack
        // ✔️ Microtasks & Macrotasks (Task Queue vs. Microtask Queue)
        // ✔️ Web APIs (setTimeout, Fetch API, DOM events)
        // ✔️ AJAX (XMLHttpRequest vs. Fetch API)
        // ✔️ API Calls & Fetching Data from Servers

        // ✔️ WebSockets & Real-time Communication, ssE
        // ✔️ Node.js Asynchronous Patterns (fs, HTTP requests, database query)
        // ✔️ Asynchronous Iteration (for await...of loop)



        //         6️⃣ Best Resources

        // 📚 Books & Documentation

        // MDN Web Docs - Asynchronous JavaScript
        // JavaScript.info - Async
        // Eloquent JavaScript - Async


        // 🎥 Videos

        // JavaScript Promises in 10 Minutes - Web Dev Simplified
        // Async/Await Crash Course - Traversy Media

        // 🏗️ Practice & Challenges
        
        // JavaScript30
        // Frontend Mentor.io
        // LeetCode JavaScript Problems



