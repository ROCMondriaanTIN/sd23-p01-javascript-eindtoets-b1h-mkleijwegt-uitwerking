console.log("--- Page 1 ---");

//opdracht 1
let counter = 0;

while (counter < 20) {
    console.log('Loop ' + counter);

    if (counter >= 10) {
        console.log('JavaScript is cool');
    }

    counter++;

}

//opdracht 2
const password = 'supersecret';
const userPassword = prompt('Vul uw wachtwoord in');

while (password != userPassword) {
    alert('Wrong password');
    userPassword = prompt('Vul uw wachtwoord in');
}

alert('You\'re authenticated');