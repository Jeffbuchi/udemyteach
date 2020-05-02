import React, {useEffect, useState} from "react";
import { NavLink} from "react-router-dom";
import Course1 from "../udemylogo/course-1.png";
function HomePage() {

    useEffect(() => {
        document.title = "UDEMY"
    })

    const  [lectureCourse, setLectureCourse] = useState ([
        {

        ID : 1,
        title : "About Udemy",
        tutor : {
            ID : 1,
            name : "udemy",
            userName : "@udemyofficial",
            dp : "https://placeimg.com/100/100/tech?tutor-"+ 1,
        },
        duration : "57min",
        poster : Course1


    },
    
]);



var tutorList = [];
for (let i = 0; i < 11; i++) {
    tutorList.push(
        <button className = "tutor rel" key = {"live-tutor-" + i}>
            <img src = {"https://placeimg.com/100/100/tech?"+ i} className = "block"/>
        </button>
    )
    }

    var courseList = [];
    for (let i = 0; i < lectureCourse.length; i++) {
        courseList.push(
            <NavLink to = {"/content/" + lectureCourse[i].ID} className = "course rel" key = {"lecture-course-" + i}>
                <div className = "blk rel" style = {{
                    background : "lightgrey url(" + lectureCourse[i].poster + ")"
                }}>
                    <div className = "user abs flex">
                        <div className = "inset">
                            <img src = {lectureCourse[i].tutor.dp} className = "block" />
                        </div>
                        <div className = "meta">
                            <h2 className = "name s13 fontz">{lectureCourse[i].tutor.name}</h2>
                            <h2 className = "username s13 fontz">{lectureCourse[i].tutor.userName}</h2>
                        </div>
                    </div>
                    <div className = "dura abs">
                    <h2 className = "username s13 fontz">{lectureCourse[i].duration}</h2>
                    </div>
                    <div className = "course-title abs">
                    <h2 className = "username s15 fontb">{lectureCourse[i].title}</h2>
                    </div>
                    
                    
                </div>
            </NavLink>

            
        );
        
    }

    
    
    return(
        <div className = "home-page ">

            <div className = "section rel">
                <h2 className = "title s24 fontb">Learn on your schedule </h2>
                <div className = "tutors rel flex">
                    {tutorList}
                </div>
            </div>

            <div className = "section section2 rel">
                <h2 className = "title s24 fontb">About Udemy: Click image below</h2>
                <div className = "courses rel flex">
                    {courseList}
                </div>
            </div>

            
        </div>
    )
}

export default HomePage;