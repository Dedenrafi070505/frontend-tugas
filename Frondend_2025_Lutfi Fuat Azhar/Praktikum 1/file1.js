const name = "Lutfi Fuat Azhar";
const major = "Informatika";
console.log(name, major);

// Template literals //
const birthYear = 2000;
const greeting = `Hello, My name is ${name}.
Umur saya ${2022 - birthYear}`;

console.log(greeting);

//condisional
const results = 100;
if (results > 90) {
    console.log("Grade: A");
}
else if (results > 80) {
    console.log("Grade: B");
}
else if (results > 70) {
    console.log("Grade: C");
}
else {
    console.log("Grade: D");
}

//ternary 
const age = 23;
if (age > 21) {
    console.log("Dewasa");
} else {
    console.log("Belum Dewasa");
}
age > 21 ? console.log("Dewasa") : console.log("Belum Dewasa");


// Looping for
for (let i = 1; i < 11; i++) {
    console.log(`Perulangan ke: ${i}`);
}

// Looping while
let i = 1;
while (i < 11) {
    console.log(`Perulangan While ke: ${i}`);
    i++;
}

// Fungsi deklarasi
function umur(bod) {
    const year = 2022;
    const age = year - bod;
    // Return value
    return age;
}

// Fungsi ekspresi
const eksAge = function (bod1) {
    const year = 2022;
    const age = year - bod1;
    return age;
};

// Arrow function
const arrAge = (bod2) => 2022 - bod2;

console.log(arrAge(2000));
console.log(arrAge(1998));

console.log(eksAge(2000));
console.log(eksAge(1998));
console.log(umur(1997));
console.log(umur(2000));


console.log(greeting);
console.log(name, major);