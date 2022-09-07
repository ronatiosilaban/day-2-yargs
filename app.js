
//pemanggilan function dari file function.js kedalam variable
const func = require('./function')

// const main = async () => {
//     const Name = await func.pertanyaan('Masukan Nama ?');
//     const Number = await func.pertanyaan('masukan Number ?');
//     const Email = await func.pertanyaan('masukan email ? ')
//     func.getcontacts(Name, Number, Email)
// }

// main()



const yargs = require('yargs');
const { argv } = require('yargs');
// console.log(yargs.argv);

yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        name: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'contact email',
            demandOption: false,
            type: 'string',
        },
        number: {
            describe: 'contact mobile phone number',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        func.getcontacts(argv.name, argv.email, argv.number)
    },
});

yargs.command({
    command: "detail",
    describe: 'detail contact data',
    builder: {
        name: {
            describe: 'Detail Contact data',
            demandOption: true,
            type: 'string'
        },
    },

    handler(argv) {
        func.detailContact(argv.name);
    },
});
yargs.parse();