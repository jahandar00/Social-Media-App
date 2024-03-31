import './rightbar.css'
import { Users } from "../../dummyData";
import Online from '../online/Online';
import Profile from '../../pages/profile/Profile';

export default function Rightbar({ profile }) {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Jack</b> and <b>2 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
      <h4 className='rightBarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Chemnitz</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Azerbaijan</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">in a relationship:</span>
        </div>
      </div>
      <h4 className='rightBarTitle'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>

      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightBar/>
      </div>
    </div>
  )
}
