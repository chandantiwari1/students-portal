import { Avatar } from '@mui/material'
import React from 'react'
import './profile.css'
const Profile = () => {
    return (
        <div className="profile">
            <label htmlFor="name"></label>
            <div className="name">
                <span className="username" id="name"> Chandan </span>
                <span className="username" id="name"> Tiwari </span>
            </div>
            <div className="photo">
                <label htmlFor="photo"> </label>
                <Avatar alt="profile" id="photo" />
            </div>
            <div className="about">
                <label htmlFor="about">About:</label>
               <span className="about" id="about">
               Hey there this is the chandan tiwari a full stack web developer and designer and I try to build new things and I always try help other.
                If I can't help him with money I will help him Power . If I can't help him with power I help with my best wishes
               </span>
            </div>
            <div className="status">
                <label htmlFor="sts">status:</label>
                <span className="status" id="sts">Single</span>
                <label htmlFor="stsdrm"></label>
                <span id="stsdrm">
                    looking for some one
                </span>
            </div>
            <div className="year">
                <label htmlFor="year">Year:</label>
              <span className="year" id="year">
                  2 year cse
              </span>
            </div>
            <div className="updateprofile">
                <button className="update-profile">Update profile</button>
            </div>
        </div>
    )
}

export default Profile
