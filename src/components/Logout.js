import React, { useEffect, useContext } from 'react';

import { KidsFlyContext } from '../context/KidsFlyContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Logout = (props) => {
    const {setCurrentUser} = useContext(KidsFlyContext);

    useEffect(() => {
        axiosWithAuth().get('/user/logout')
            .then(res => setCurrentUser({}))
            .catch(err => console.log(err))
    }, []);

    //  Create as function in App.js and pass down as props
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    props.history.push('/Login');
    // App.js doesn't seem to have access to props ??

    return(<></>)
}

export default Logout;