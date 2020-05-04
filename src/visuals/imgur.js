import React, {useState} from "react";
import StarRatings from "react-star-ratings";


   const Images = () => {
       function useLocalState(localItem) {
           const [loc, setState] = useState(localStorage.getItem(localItem));

           function setLoc(newItem) {
               localStorage.setItem(localItem, newItem);
               setState(newItem);
           }

           return [loc, setLoc];
       }
       const [image, setImage] = useLocalState("image");
       const [loading, setLoading] = useState(false);
       

       const uploadImage = async e => {
           const files = e.target.files
           const data = new FormData()
           data.append('file',files[0])
           data.append('upload_preset', 'jeffbuchi')
           setLoading(true)
           const res = await fetch(
            'https://api.cloudinary.com/v1_1/dfw6goeiq/image/upload',
            {
                method : 'POST',
                body : data
            }
           )

           const file = await res.json()

           setImage(file.secure_url)
           setLoading(false)
       } 

    return(
        <div className = "get-image">

            <h1 className = "img-text">Upload Image Here</h1>
            <br />
            <p className = "img-content">Here are images and content that can be uploaded. 
            We give every information in media. The uploads are in JPG, JPEG and PNG formats.</p>
            <h3 className = "img-content">Star ratings</h3>
            <br />
            <StarRatings rating={2.403} starRatedColor = "gold" starDimension="30px" starSpacing="15px"/>
      <br />
            <input type = "file" name = "file" placeholder = "upload image" onChange = {uploadImage}/>
                {loading ? (<h3>Loading.....</h3>):(<img src = {image} style = {{width : '300px'}}/>)}
        </div>
    );

   }


    


export default Images