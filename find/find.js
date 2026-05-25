function findByUsername(arr, username){
    return arr.find(function(value){
        return value.username === username;
    })
};

function removeUser(arr, username){
    const foundIndex = arr.findIndex(function (value){
        return value.username === username;
    })
    if(foundIndex === -1) return;
    return arr.splice(foundIndex, 1)[0];//remoiving the user from the array at the found index and returning it
};

