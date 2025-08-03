const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);
student.physics['marks']= 50;
console.log(student.physics['marks']);
console.log(student);

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(student1.name);
const boyos= student1.age
console.log(boyos);
console.log(student1.city);
console.log(student1['isStudent']);
student1.age = 25;
console.log(student1.age);
console.log(student1);








