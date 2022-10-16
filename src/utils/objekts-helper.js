

export let updateObjectInArray = (items, itemId, objPropertyName, newObjProps) => {
    return items.map(user => {
        if (user[objPropertyName] === itemId){ 
            return {...user, ...newObjProps}
        }
        return user;
    } )
}