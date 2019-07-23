import React from 'react'
const NotFound = ({history}) => {
    return(
        <div>
            <h1>404</h1>
            <h3>You have found the room of requirement</h3>
            <h4 onClick={() => history.goBack()}>Click to go back from whence you came</h4>
        </div>
    )
}

export default NotFound