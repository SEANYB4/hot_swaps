import React from "react";
import "../styles/Home.css";

const Home = () => {

    return (

        <div className="homePage">
            <div className="gallery">
                <img className="galleryImage" src="/Images/comicBook1.png" alt="commicBookImage1" />
                <img className="galleryImage" src="/Images/comicBook2.png" alt="comicBookImage2"/>
                <img className="galleryImage" src="/Images/comicBook3.png" alt="comicBookImage2"/>
                <img className="galleryImage" src="/Images/comicBook4.png" alt="comicBookImage2"/>
            </div>
            


            <div className="info">

                <h1>Welcome to Hot Swaps!</h1>

                <p>We are a Computer Parts and Electronics store selling cheap parts from China internationally!</p>

                <p>Place your orders now!</p>

            </div>

        </div>
    )




};



export default Home;