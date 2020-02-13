import React, { useEffect } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

export default function LoginPage() {
    useEffect(() => window.scrollTo(0, 0), []);  
    return (
        <div className="login">
            <SignIn />
            <SignUp />
        </div>
    )
}
