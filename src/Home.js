import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home (){
    return(
        <div className="container text-light">
           <img className="bg-dark w-50" src={require("../src/img/name.png")} alt="Rick & Morty" />
           <h1 className="text-light ">
             Rick and Morty Series Description
           </h1>
           <p className="">
           Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that
            follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous
            adventures across the universe. Rick Sanchez is living with his daughter Beth’s family and constantly
            bringing her, his son-in-law Jerry, granddaughter Summer, and grandson Morty into intergalactic
            escapades.<br></br>

            Rick and Morty stars Justin Roiland (Adventure Time), Sarah Chalke (Scrubs), Chris Parnell 
            (Saturday Night Live), and Spencer Grammer (Greek). The series is created by Dan Harmon (Community)
             and Roiland, who also serve as executive producers.  
           </p>
        </div>
    )
}