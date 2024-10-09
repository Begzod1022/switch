// let money = 10000;

// let account = 7777;

// const name = prompt('Your name: ').toLowerCase();

// switch (name) {
//     case "alex":
//         const account = prompt('Account Balance Number');
//     default:
//         alert('Account Not Found');
// }

// switch (account) {
//     case "7777":
//         const money = prompt('How Much To Cash Out?');
//     default:
//         alert('Account Not Found');
// }

// switch (money) {
//     case '10000':
//         const cash = alert('Everything Is Fine!')
//         alert('You Withdrew 10000 Cash, Left 0');
//     default:
//         alert('Not Enough Cash')
// }

let money = 10000;

let account = 7777;

const name = prompt('Your name: ').toLowerCase();

switch (name) {
    case "alex":
        const account = prompt('Account Balance Number');
    case "7777":
        const money = prompt('How Much To Cash Out?');
    case '10000':
        const cash = alert('Everything Is Fine!')
        alert('You Withdrew 10000 Cash, Left 0');
    default:
        alert('Account Not Found');
}