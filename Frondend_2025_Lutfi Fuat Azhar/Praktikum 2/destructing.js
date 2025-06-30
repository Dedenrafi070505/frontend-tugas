// Membuat object
const req = {
    body: {
      name: "Aufa",
      age: 22,
      major: "Informatics",
    },
};

// Memanggil nilai name, age, dan major langsung
console.log(req.body.name, req.body.age, req.body.major);

// Menggunakan destructuring untuk mengambil nilai dari req.body
const { name, age, major } = req.body;

console.log(name, age, major);

// Rest Parameters
function sum(...numbers) {
    let hasil = 0;

    for (const number of numbers) {
        hasil += number;
    }

    return hasil;
}

console.log(sum(1, 2, 3, 4, 5));

function showFamilies(husband, wife, ...children) {
    console.log(`Suami: ${husband}`);
    console.log(`Istri: ${wife}`);

    for (const child of children) {
        console.log(`Anak: ${child}`);
    }
}

showFamilies("Mikel", "Hannah", "Jonas", "Martha", "Magnus");

// Contoh without spread
const user = {
    name: "Aufa",
    major: "Informatics",
};

const newUserWithoutSpread = {
    name: user.name,
    major: user.major,
    age: 22,
};

const newUserWithSpread = {
    ...user,
    age: 22,
};

console.log(newUserWithoutSpread);
console.log(newUserWithSpread);

// Membuat array of object
const users = [
    {
        name: "Jonas",
        age: 15,
    },
    {
        name: "Michael",
        age: 40,
    },
    {
        name: "Hannah",
        age: 35,
    },
];

