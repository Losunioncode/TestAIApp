import React from 'react'
import { AdvancedVideo, Video} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import ReactPlayer from 'react-player'
// Import required actions and qualifiers.
import examplePDF from "./examplePDF.mp4"
import {fill} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import {Gravity} from "@cloudinary/url-gen/qualifiers";
import {AutoFocus} from "@cloudinary/url-gen/qualifiers/autoFocus";

// import ExamplePDF from "@/videos/examplePDF.mp4"

const ExampleVideoPlayer = () => {

  

  return (
            <div className="mt-[65px]">
                <video controls width="1688">

                      <source src="./examplePDF.mp4" width={620} height={625} type="video/mp4" />

                      Download the
                      
                      or
                      video.
                </video>

            </div>
            
                  
   
  )
}


export default ExampleVideoPlayer