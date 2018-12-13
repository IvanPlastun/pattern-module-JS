var counter = (function() {
    var _count = 0;

    var setValue = function(val) {
        if(val >= 0 && typeof val === 'number')
            _count = val;
        else 
            console.log("Error! Value is wrong.")
    }

    var increaseCounter = function() {
        _count++;
    }

    var decreaseCounter = function() {
        _count--;
    }

    var printCounter = function() {
        console.log(_count);
    }

    return {
        setValue,
        increaseCounter,
        decreaseCounter,
        printCounter
    }
})();

counter.setValue(10);
counter.printCounter(); // 10
counter.increaseCounter(); // 11
counter.increaseCounter(); // 12
counter.increaseCounter(); // 13
counter.printCounter();
counter.decreaseCounter(); // 12
counter.printCounter();

//Это для тренировки
var calculator = (function() {
    var _val = {number: 0};

    return {
        setValue: function(value) {
            if(!isNaN(value)) 
                _val.number = value;
            else
                console.log('Error! Value is wrong.');
        },

        sum: function(value) {
            _val.number += value;
        },

        subtract: function(value) {
            _val.number -= value;
        },

        multiply: function(value) {
            _val.number *= value;
        },

        devide: function(value) {
            _val.number /= value;
        },

        absDevide: function(value) {
            _val.number %= value;
        },

        display: function() {
            console.log(`Result: ${_val.number}`);
        }
    }
})();

calculator.display();
calculator.setValue(10);
calculator.display(); // 10
calculator.sum(12);
calculator.display(); // 22
calculator.subtract(5);
calculator.display(); // 17
calculator.multiply(2);
calculator.display(); // 34
calculator.multiply(3);
calculator.display(); // 102
calculator.absDevide(50);
calculator.display(); // 2
