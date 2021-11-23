import "./sidebar.css";
import Avatar from '@mui/material/Avatar';
import { Link, Routes, Route } from 'react-router-dom'
import React from 'react'
import Python from "./subjects/Python/Python";
import Dstl from "./subjects/DSTL/Dstl";
import Coa from "./subjects/coa/Coa";
import Mathematics from "./subjects/Mathematics/Mathematics";
import Data from "./subjects/data-structure/Data";
import Profile from "./profile/Profile";

const Sidebar = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <div className="sidebar-profile">
          <Link to="profile"><Avatar alt="C" /></Link>
        </div>
        <div className="sidebar-list">
          <ul className="list">
            <li className="list-items"><span className="subject">
              <button className="subject-button">Subject</button>
              <div className="subject-content">
                <ol className="subjec-list">
                  <li><Link to="python">Python</Link></li>
                  <li><Link to="Computer-organization">Computer Organization</Link></li>
                  <li><Link to="dstl">DSTL</Link></li>
                  <li><Link to="mathematics">Mathematics</Link></li>
                  <li><Link to="data-structure">Data-Struture</Link></li>
                </ol>
              </div>
            </span></li>
            <li className="list-items">
              <span>
                <button className="subject-button">Notifications</button>
              </span>
            </li>
            <li className="list-items">
              <span>
                <button className="subject-button">Assignments</button>
              </span>
            </li>
            <li className="list-items">
              <span>
                <button className="subject-button">Notes</button>
              </span>
            </li>
            <li className="list-items">
              <span>
                <button className="subject-button">Groups</button>
              </span>
            </li>
            <li className="list-items">
              <span>
                <button className="subject-button">Chat</button>
              </span>
            </li>
          </ul>
        </div>
        <div className="sidebar-end">
          <button className="sidebar-last-item">
            Logout
          </button>
        </div>
      </div>
        <>
          <Routes>
            <Route path="python" element={<Python />} />
            <Route path="data-structure" element={<Data />} />
            <Route path="mathematics" element={<Mathematics />} />
            <Route path="coa" element={<Coa />} />
            <Route path="dstl" element={<Dstl />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </>
    </div>
  )
}

export default Sidebar
