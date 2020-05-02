import React, {useState} from "react";
import { NavLink} from "react-router-dom";


import Course1 from "../udemylogo/course-1.png";
function ContentPage(props) {

    const  [content, setContent] = useState (
        {

        ID : 1,
        title : "ABOUT UDEMY.",
        about : "Udemy is an American online learning platform aimed at professional adults and students, developed in May 2010. As of Jan 2020, the platform has more than 50 million students and 57,000 instructors teaching courses in over 65 languages. There have been over 295 million course enrollments. Students and instructors come from 190+ countries and 2/3 of students are located outside of the U.S. Udemy also has over 5,000 enterprise customers and 80% of Fortune 100 companies use Udemy for employee upskilling. Students take courses largely as a means of improving job-related skills.[2] Some courses generate credit toward technical certification. Udemy has made a special effort to attract corporate trainers seeking to create coursework for employees of their company.[3] As of 2020, there are more than 150,000 courses on the website.",
        tutor : {
            ID : 1,
            name : "Udemy",
            userName : "@udemyofficial",
            dp : "https://placeimg.com/100/100/tech?tutor-"+ 1,
        },
        duration : "57min",
        poster : Course1,

    }
    
);

    const contentID = props.match.params.contentid;
    
    return(
        
        <div className = "content-page rel flex">

            <div className = "content-info rel flex">

           
            
<div className = "tutor rel align flex">
                        <div className = "inset">
                            <img src = {content.tutor.dp} className = "block" />
                        </div>
                        <div className = "meta">
                            <h2 className = "name s13 black">{content.tutor.name}</h2>
                            <h2 className = "username s13 grey">{content.tutor.userName}</h2>
                        </div>
                    </div>

                    <div className = "content-meta">
                        <h2 className = "s7 title fontb black">
                            {content.title}
                        </h2>
                        <p className = "s13 about fontb black" dangerouslySetInnerHTML = {{ __html:content.about }} />
                    </div>

                    <div className = "section section2 rel">
               
                
            </div>

            </div>

            <NavLink className = "nav-img" to = "/">Go Back Home</NavLink>
            <br />
            <NavLink className = "nav-img" to = "/videopage">Video</NavLink>
            <br />
            <NavLink className = "nav-img" to  = "/imgur">Upload Image</NavLink>
           
        </div>

        
    )
}

export default ContentPage;