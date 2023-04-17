const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/DoAnCNTT_nodejs_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failure!');
    }
}

module.exports = {
    connect
};