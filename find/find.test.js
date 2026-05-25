describe('findByUsername', function(){
    it('Should return the first matching value passed in searchValue', function(){
        expect(findByUsername(
            [
                {username: 'mlewis'},
                {username: 'akagen'},
                {username: 'msmith'}
            ],
            'msmith'
        )).toEqual({username: 'msmith'});
    })
});

describe('removeUser', function(){
    it('Should return the removed user object if found, otherwise undefined', function(){
        expect(removeUser(
            [
                {username: 'mlewis'},
                {username: 'akagen'},
                {username: 'msmith'}
            ],
            'akagen'
        )).toEqual({username: 'akagen'});
    })
    it('Should return undefined if the user was not found', function(){
        expect(removeUser(
            [
                {username: 'mlewis'},
                {username: 'akagen'},
                {username: 'msmith'}
            ],
            'taco'
        )).toEqual(undefined);
    })
});

