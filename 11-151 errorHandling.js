(function () {
    try {
        throw new Error();
    } catch (err) {
        var err = 5;
        var boo = 10;
        console.log(err + 'i');
    }
    //Guess what the output is here:
    console.log(err + 'o');
    console.log(boo);
})();