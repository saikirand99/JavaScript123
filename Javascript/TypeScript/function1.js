function greetUser(name) {
    return 'welcome' + name;
}
console.log(greetUser('ram'));
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
addNumbers();
addNumbers(10, 20, 30);
addNumbers(10, 20, 30, 40, 50);
function miss(name1, city) {
    console.log(name1 + " and " + city);
}
miss("kiran", "bangalore");
var checktype = function (a, b) {
    console.log(a + b);
};
checktype(10, 20);
checktype(10, 20);
