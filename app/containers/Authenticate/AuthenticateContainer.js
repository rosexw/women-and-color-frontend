import React, {PropTypes} from 'react'
import createReactClass from 'create-react-class'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'
import { bindActionCreators } from 'redux'

const AuthenticateContainer = createReactClass({
    propTypes : {
        isFetching: PropTypes.bool.isRequired,
        error:      PropTypes.string.isRequired,
        authUser: PropTypes.func.isRequired,
        fetchingUser: PropTypes.func.isRequired,
        fetchingUserFailure: PropTypes.func.isRequired,
        fetchingUserSuccess: PropTypes.func.isRequired,
    },
    handleAuth () {
        this.props.fetchingUser()
        auth()
            .then((user) => {
                this.props.fetchingUserSuccess(user.uid, user, Date.now())
                this.props.authUser(user.uid)
            })
            .catch((error) => this.props.fetchingUserFailure(error))
    },
    render () {
        return (
            <Authenticate
                onAuth={this.handleAuth}
                isFetching={this.props.isFetching}
                error={this.props.error} />
        )
    },
})

function mapStateToProps(state) {
    return {
        isFetching: state.isFetching,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(userActionCreators, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthenticateContainer)
