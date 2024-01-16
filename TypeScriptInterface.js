"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser = {
    name: 'Tom',
    email: 'ts@gmail.com',
    userId: 1,
    userCall: function () { return newUser.name; },
    showCoupon: function (couponNumber) {
        if (couponNumber === void 0) { couponNumber = 0; }
        return "".concat(newUser.name, " has ").concat(couponNumber, " coupons");
    },
};
newUser.gitId = 2;
// but to call optional function we should check if it realy exist
newUser.userCall && console.log(newUser.userCall());
// non optional function
console.log(newUser.showCoupon());
