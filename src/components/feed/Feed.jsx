import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from "../../dummyData";


export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {
          Posts.map((post) => (
            <Post
              key={post.id}
              desc={post.desc}
              photo={post.photo}
              date={post.date}
              userId={post.userId}
              like={post.like}
              comment={post.comment}
              />
          ))
        }
      </div>
    </div>
)}