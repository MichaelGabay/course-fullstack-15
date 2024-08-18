const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/b15');
        console.log("DB is connected")
    } catch (error) {
        console.error(error)
    }
})();

