import React, {Component} from "react";
import StarRatings from "react-star-ratings";

const API = 'AIzaSyAWgoVBdQplDqVlCY_D7yW5kddHtsYXoXE';
const channelID = 'UC4QZ_LsYcvcq7qOsOhpAX4A';
const result = 10;



var grandURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class YotubePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ytResult : []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        fetch(grandURL)
        .then((response) => response.json())
        .then((responseJson) => {
            const ytResult = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            this.setState({ytResult});
        })
        .catch((error) => {
            console.error(error)
        })
    }
    render(){
        return (
            <div className = "youtubediv">
                <button className = "youbtn" onClick = {this.clicked}>Get Youtube Videos</button>
            
                <h2 className = "vid-text">Rate videos</h2>
            
            <br />
                <StarRatings rating={2.403} starRatedColor = "goldenrod" starDimension="30px" starSpacing="15px"/>
                {
                    this.state.ytResult.map((link, i) =>{
                        var frame = <div key={i} className="youtubediv">
                            <iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen>
                                </iframe>
                                </div>
                        return frame;
                    })
                }

                {this.frame}
            </div>


        );
    }
}

export default YotubePage;