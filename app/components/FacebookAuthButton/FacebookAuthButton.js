import React, { PropTypes } from 'react'
import Button from 'material-ui/Button'

FacebookAuthButton.propTypes = {
    onAuth: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default function FacebookAuthButton({onAuth, isFetching}) {
    return (
        <Button raised color="primary" onClick={onAuth}>
            {
                isFetching == true
                ? 'Loading...'
                : 'Login with Facebook'
            }
        </Button>
    )
}
