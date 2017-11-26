import React from 'react'
import createReactClass from 'create-react-class'
import { Authenticate } from 'components'
import auth from 'helpers/auth'

const AuthenticateContainer = createReactClass({
    handleAuth () {
        auth().then((user) => {
            console.log(user)
        })
    },
    render () {
        return (
            <Authenticate
                onAuth={this.handleAuth}
                isFetching={false}
                error={''} />
        )
    },
})

export default AuthenticateContainer
