import { NavLink } from 'react-router-dom';
import { MainLayout } from '../../components/Layout/MainLayout';

export const Home = () => {
    return (
        <MainLayout>
        <div className="wrapper">
          <div className="main-container">
            <div className="main-header">
              <div className="header-menu">
                <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to="/chat">Chat</NavLink>
                <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to="/profile">Profile</NavLink>
              </div>
            </div>
            <div className="content-wrapper">
                Welcome to the chat!
            </div>
          </div>
        </div>
        </MainLayout>
    );
}