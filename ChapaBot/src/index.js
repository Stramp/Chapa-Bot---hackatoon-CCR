const core = require('./core');




try {
    core.start();
    //core.stop();
} catch (error) {
    console.log("index log > error - ")
    console.log(">>>", error)
}