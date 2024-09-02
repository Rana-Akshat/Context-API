import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if(!user) return <div className='login'>Please login to continue!</div>

    return <div className='success'>Welcome {user.username}!</div>
}

export default Profile