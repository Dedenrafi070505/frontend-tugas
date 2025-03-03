
function download() {
    setTimeout(() => {
        console.log("Downloading...");
    }, 3000);
}

function verify() {
    setTimeout(() => {
        console.log("Verify file...");
    }, 2000);
}

function notify() {
    console.log("Download complete");
}

function main() {
    download();
    verify();
    notify();
}

main();

// promise.js

function download() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Downloading...");
        }, 3000);
    });
}

function verify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Verify file...");
        }, 2000);
    });
}

function notify() {
    console.log("Download complete");
}

// Contoh penggunaan
download().then((message) => {
    console.log(message);
    return verify();
}).then((message) => {
    console.log(message);
    notify();
}).catch((error) => {
    console.error(error);
});