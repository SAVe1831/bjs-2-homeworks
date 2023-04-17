'use strict'
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(i => arr1[i] === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => gender === user.gender).map(user => user.age).reduce((sumAges, age, index, userAges) => sumAges + age / userAges.length, 0);
    return result;
}