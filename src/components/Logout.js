import React from 'react';

const Logout = (props) => {

    //  Create as function in App.js and pass down as props
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    props.history.push('/Login');
    // App.js doesn't seem to have access to props ??

    return(<></>)
}

export default Logout;