const dns = require("dns");

dns.lookup("www.google.com", (err, address, family) => {

    if (err) {
        console.log("Error:", err.message);
        return;
    }

    console.log("IP Address:", address);
    console.log("IP Family:", family);

});