function setUser(user) {
    return user;
}
var userVar = {
    _id: '123123',
    name: 'Tom',
    age: 22,
    isActive: true,
};
// error because _id property is read-only
// userVar._id = '00000';
