import React from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img src="assets/person/1.jpeg" alt="" className='postProfileImg' />
                <span className="postUsername">Jahandar Hakhiyev</span>
                <span className="postDate">5 mins ago</span>
              </div>
              <div className="postTopRight">
                <MoreVert className='moreVert'/>
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">Hey! it's my first post!</span>
              <img className='postImg' src="./assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img  className='likeIcon' src="assets/like.png" alt="" />
                <img  className='likeIcon' src="assets/heart.png" alt="" />
                <span className="postLikeCounter">32 people liked</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
              </div>
            </div> 
        </div>

    </div>
  )
}
