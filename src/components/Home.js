import React from 'react'
import background from "./img/background.jpg"; // importing image from 'img' folder.

export default function Home() {
  return (
                                  // JSX & Inline-CSS.

    <>
        <h2 className="text-center h-1">Welcome to TO-DO LIST Application!</h2>

        <hr style={{position: "relative", top: "100px", margin: "0px 449px", left: "41px"}} />
        <div className="container text-center bg-dark text-light" style={{position: "absolute",border: "2px solid blue", borderRadius: "35px", top: "137px", left: "181px", maxWidth: "78%"}}>
        <img className="img1" src={background} alt="backimg" />

        <p className="about-text" style={{fontSize: "18px", marginTop: "16px", padding: "0px 86px"}}>A robust To-Do List Web Application facilitates seamless task management by enabling users to effortlessly add, edit, and delete tasks. It offers intuitive interfaces for quick updates and adjustments, ensuring tasks remain current and relevant. This functionality enhances productivity by streamlining task organization and prioritization effectively.</p>
        
        </div>

    </>
  )
}
