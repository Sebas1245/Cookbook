import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getToken } from './services/tokenUtilities';


export default function PrivateRoute({ children, ...rest }) {
    const loggedIn = getToken()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedIn ? (
                    children
                ) : (
                    <Redirect to='/login' />
                )

            }
        />
    )
}
