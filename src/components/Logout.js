import React, { useEffect, useContext } from 'react';

import { KidsFlyContext } from '../context/KidsFlyContext';

const Logout = (props) => {
    const {setCurrentUser} = useContext(KidsFlyContext);

    useEffect(() => {
        setCurrentUser({})
    }, []);

    //  Create as function in App.js and pass down as props
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    props.history.push('/Login');
    // App.js doesn't seem to have access to props ??

    return(<></>)
}

export default Logout;