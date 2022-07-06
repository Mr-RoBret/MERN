import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{id: 'u1', name: 'Bret Farley', image: 'https://www.dccomics.com/sites/default/files/Char_Gallery_Thunder_OUT%201.10.text%20copy_60244be94bf5b2.13574975.jpg', places: 3 }]

    return <UsersList items={USERS} />
}

export default Users;