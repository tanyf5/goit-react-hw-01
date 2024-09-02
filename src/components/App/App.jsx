import './App.module.css'
import Profile from '../Profile/Profile'
import userData from '../../userData.json'

export default function App () {
  return (
    <div className='userWrapper'>
    <Profile
    username={userData.username}
    tag={userData.tag}
    location={userData.location}
    avatar={userData.avatar}
    stats={userData.stats}
    ></Profile>
    </div>
  )
}