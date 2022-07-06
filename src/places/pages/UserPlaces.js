import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One high building, mf',
        imageUrl: 'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/2019-11/Screen%20Shot%202019-11-12%20at%2015.56.59.png',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One high building, mf',
        imageUrl: 'https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_686/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.webp',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9878531
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userID = useParams().userId;
    console.log(userID);
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userID);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;
