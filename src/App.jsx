import {ReplyIcon} from "./icons";
import {CommentIcon} from "./icons";
import {LikeIcon} from "./icons";
import {SaveIcon} from "./icons";
import {VerifiedIcon} from "./icons";
import {useState} from "react";
import {AvatarLoader} from "./loaders.jsx";
import {useScreenshot} from "use-react-screenshot";
import {createRef} from "react";
import {useEffect} from "react";
import download from "use-react-screenshot/example/src/components/Download.jsx";
// https://github.com/
// formatting tweet (cases covered are usernames , hashtags and links)
const tweetFormat = (tweet) => {
    tweet = tweet
        .replace(/@([\w]+)/, '<span>@$1</span>')
        .replace(/#([\w]+)/gi, '<span>#$1</span>')
        .replace(/(https?:\/\/[^\s]+)/s, '<span>$1</span>');
    return tweet;
}






function App() {
    const tweetRef = createRef(null)
    const downloadRef = createRef(null)
const [name , setName] = useState();
const [username , setUsername] = useState()
const [isVerified , setIsVerified] = useState(0)
    const [tweet , setTweet] = useState('')
    const [avatar,setAvatar] = useState()
    const [retweets , setRetweets] = useState(0)
    const [quoteTweets , setQuotetweets] =useState(0)
    const [likes , setLikes] = useState(0)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(tweetRef.current)


useEffect(()=>{
    if(image){
        downloadRef.current.click()
    }

},[image])


    function avatarHandle(e){
    console.log(e.target.files)
    const file = e.target.files[0];
        const reader = new FileReader()
        reader.addEventListener('load',function (){
         setAvatar(this.result)
        })
  reader.readAsDataURL(file)
    }

    return (
    <>
        <div className="tweet-settings">
           <h3>Give Your Prompts here</h3>
            <ul>
                {/*for entering name*/}
                <label>Add Name</label>
                <li>
                    <input type="text" className="tweet-settings-input"  value={name}
                           onChange={(e) => {
                               setName(e.target.value)
                           }}/>
                </li>
                {/*for entering username*/}
                <label>Add username</label>
                <li>
                    <input type="text" className="tweet-settings-input"  value={username}
                           onChange={(e) => {
                               setUsername(e.target.value)
                           }}/>
                </li>
                {/*    for entering content in text*/}
                <label>Add Tweet Content</label>
                <li>
                    <textarea maxLength="290" className="tweet-settings-textarea"  value={tweet}
                              onChange={(e) => {
                                  setTweet(e.target.value)
                              }}/>
                </li>
                {/*re tweet */}
                <label>Retweets</label>
                <li>
                    <input type="number" className="tweet-settings-input" placeholder="Retweet"
                           value={retweets > 100000 ? retweets.slice(0, 7) : retweets}
                           onChange={(e) => {
                               setRetweets(e.target.value)
                           }}/>

                </li>
                {/* is verified*/}
                <li>
                    <label>Verified Filter</label>
                    <select onChange={(e)=>{
                        setIsVerified(e.target.value)
                    }} defaultValue={isVerified}>
                        <option value="1">Verified</option>
                        <option value="0">Not Verified</option>
                    </select>
                </li>
                {/*    quote tweet  */}
                <label>Comments</label>
                <li>
                    <input type="number" className="tweet-settings-input" placeholder="Quote Tweet"
                           value={quoteTweets > 100000 ? quoteTweets.slice(0, 7) : quoteTweets}
                           onChange={(e) => {
                               setQuotetweets(e.target.value)
                           }}/>

                </li>

                {/*     set likes */}
                <label>Likes</label>
                <li>
                    <input type="number" className="tweet-settings-input" placeholder="Likes"
                           value={likes > 100000 ? likes.slice(0, 7) : likes}
                           onChange={(e) => {
                               setLikes(e.target.value)
                           }}/>

                </li>
                <li>
                    <label>Avatar</label>
                    <input type="file" className="tweet-settings-input"

                           onChange={avatarHandle}/>
                </li>
                <button onClick={getImage}>Download</button>
                <div className="download-url">
                    {image && <a ref={downloadRef} href={image} download="tweet.png"></a>}
                </div>
            </ul>
        </div>
        <div className="tweet-container">

            <div className="tweet" ref={tweetRef}>
                <div className="tweet-author">
                    {avatar && <img
                        src={avatar}
                        alt=""/> || <AvatarLoader/>}
                    <div>
                        <div className="tweet-name">
                                {name || "Ye"}
                                {isVerified == 1 && <VerifiedIcon color="#fff" width="19" height="19"/>}
                            </div>
                            <div className='tweet-username'>@{username || 'kanyewest'}</div>
                        </div>
                    </div>
                    <div className="tweet-content">
                        <p  dangerouslySetInnerHTML={{__html: tweet && tweetFormat(tweet) || "People called me mad but i was just obsessed with mastering my craft" }}>

                        </p>
                    </div>
                    <div className="tweet-stats">
            <span>
                <b>{retweets }</b>Retweets
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
