import {ReplyIcon} from "./icons";
import {CommentIcon} from "./icons";
import {LikeIcon} from "./icons";
import {SaveIcon} from "./icons";
import {VerifiedIcon} from "./icons";

function App() {


  return (
    <div className="tweet">
      <div className="tweet-author">
          <img src="https://pbs.twimg.com/profile_images/1540561709211033602/e3wWYJsp_bigger.jpg" alt=""/>
          <div>
              <div className="tweet-name">
                  Luke Belmer
                  <VerifiedIcon color="#fff" width="19" height="19"/>
              </div>
              <div className='tweet-username'>@lukebelmer</div>
          </div>
       </div>
        <div className="tweet-content">
            <p>
                Late nights and early mornings you heard what i just said
            </p>
        </div>
        <div className="tweet-stats">
            <span>
                <b>24</b>Retweet
            </span>
            <span>
                <b>24</b>Comments
            </span>
            <span>
                <b>24</b>Likes
            </span>
        </div>
        <div className="tweet-actions">
            <span><ReplyIcon color="#6e767d" width="24" height="24"/></span>
            <span><CommentIcon color="#6e767d" width="24" height="24"/></span>
            <span><LikeIcon  color="#6e767d" width="24" height="24"/></span>
            <span><SaveIcon color="#6e767d" width="24" height="24"/></span>
        </div>
    </div>
  )
}

export default App
