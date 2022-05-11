import React from 'react';
import { NavLink } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="layout">
        <div className="sing-btn-wrapper">
          <ul>
            <NavLink className="link sing-in" to={'/auth'}>
              Login
            </NavLink>
          </ul>
          <ul>
            <NavLink className="link sing-out" to={'/auth'}>
              Registration
            </NavLink>
          </ul>
        </div>
        <div className="layout_wrapper">
        <h1>Final project - our version of Trello</h1>
          <div className="layout_descr">
            <div className="layout_team">
              <h3>Our team:</h3>
              <ul>
                <li>Aleksandr Zakhavai - Team Lead</li>
                <li>Irina Bukley</li>
                <li>Ivan Shukalo</li>
              </ul>
            </div>
            <div className="layout_text">
              <p>Hello dear friends!</p>
              <p>If you need the records to be in front of your eyes, in order - the AII ​​application can handle this task. Are you still not doing anything, forgetting about the important things, and in general, are you in complete chaos? You should try our app. There is no single way to use the program. Everyone creates lists and customizes for themselves.</p>
              <p>Who needs the app? EVERYONE!!!</p>
            </div>
            <h5><span>Course React 2022 Q1:</span>
            A free course from The Rolling Scopes community for those who want to gain knowledge and experience sufficient for employment as a Junior Software Engineer in the Front-end / React field. Everyone can study at RS School, regardless of age, professional employment and place of residence.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
