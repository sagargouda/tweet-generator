import {ReplyIcon} from "./icons";
import {CommentIcon} from "./icons";
import {LikeIcon} from "./icons";
import {SaveIcon} from "./icons";
import {VerifiedIcon} from "./icons";
import {useState} from "react";

function App() {
const [name , setName] = useState();
const [username , setUsername] = useState()
const [isVerified , setIsVerified] = useState(false)
    const [tweet , setTweet] = useState()
    const [avatar,setAvatar] = useState()
    const [retweets , setRetweets] = useState(0)
    const [quoteTweets , setQuotetweets] =useState(0)
    const [likes , setLikes] = useState(0)




  return (
    <>
        <div className="tweet-settings">
           <h3>Give Your Prompts here</h3>
            <ul>
                {/*for entering name*/}
                <li>
                    <input type="text" className="tweet-settings-input" placeholder="enter name" value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                </li>
                {/*for entering username*/}
                <li>
                    <input type="text" className="tweet-settings-input" placeholder="enter username" value={username} onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                </li>
            {/*    for entering content in text*/}
            </ul>
        </div>
        <div className="tweet-container">
            <div className="tweet">
                <div className="tweet-author">
                        <img src="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds" alt=""/>
                        <div>
                            <div className="tweet-name">
                                {name || "Ye"}
                                {isVerified && <VerifiedIcon color="#fff" width="19" height="19"/>}
                            </div>
                            <div className='tweet-username'>@{username || 'kanyewest'}</div>
                        </div>
                    </div>
                    <div className="tweet-content">
                        <p>
                            {tweet || "People called me mad but i was just obsessed with mastering my craft"}
                        </p>
                    </div>
                    <div className="tweet-stats">
            <span>
                <b>{retweets }</b>Retweet
            </span>
                        <span>
                <b>{quoteTweets}</b>Comments
            </span>
                        <span>
                <b>{likes}</b>Likes
            </span>
                    </div>
                    <div className="tweet-actions">
                        <span><ReplyIcon color="#6e767d" width="24" height="24"/></span>
                        <span><CommentIcon color="#6e767d" width="24" height="24"/></span>
                        <span><LikeIcon color="#6e767d" width="24" height="24"/></span>
                        <span><SaveIcon color="#6e767d" width="24" height="24"/></span>
                    </div>
                </div>
            </div>


    </>
  )
}

export default App
