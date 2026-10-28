const domain = require("domain");

const d = domain.create();

// Handle errors
d.on("error", (err) => {
    console.log("Domain caught an error:");
    console.log(err.message);
});

// Run code inside domain
d.run(() => {

    console.log("Program started.");

    setTimeout(() => {

        console.log("Running inside domain...");

        // Generate error
        throw new Error("Something went wrong!");

    }, 1000);

});

console.log("Program is running...");