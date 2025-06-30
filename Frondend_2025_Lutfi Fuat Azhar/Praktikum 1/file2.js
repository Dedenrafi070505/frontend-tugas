// Array
const animals = ["Cat", "Dog", "Fish", "Bird"];

// Loop dengan for-of
for (const animal of animals) {
    console.log(animal);
}

// Loop dengan for-of (perbaikan)
for (const animal of animals) {
    console.log(`Hewan: ${animal}`);
}

// Membuat object menggunakan {}
const user = {
    name: "Aufa Billah",
    age: 22,
    major: "Informatics",
};

// Looping object dengan for-in
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
