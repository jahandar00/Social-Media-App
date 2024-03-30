import React, {useState} from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'
import { Users }  from "../../dummyData"

export default function Post(props) {
  const [like, setLike] = useState(props.like);
  const [isliked, setIsliked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like-1 : like+1);
    setIsliked(!isliked);
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img 
            src={Users.filter((u) => u.id === props.userId)[0].profilePicture} 
            alt="" className='postProfileImg' />
            <span className="postUsername">
              {Users.filter((u) => u.id === props.userId)[0].username}
              </span>
            <span className="postDate">{props.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className='moreVert' />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props?.desc}</span>
          <img className='postImg' src={props.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="assets/like.png" alt="" onClick={likeHandler}/>
            <img className='likeIcon' src="assets/heart.png" alt="" onClick={likeHandler}/>
            <span className="postLikeCounter">{like} people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{props.comment} comments</span>
          </div>
        </div>
      </div>

    </div>
  )
}
