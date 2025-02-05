import React, { useEffect, useRef, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Logout from './Logout';

const Navbar: React.FC = () => {
    const [userName, setUserName] = useState<string | null>(null);
    const [showLogoutMenu, setShowLogoutMenu] = useState(false);
    const navigate = useNavigate();

     const logoutMenuRef = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (logoutMenuRef.current && !logoutMenuRef.current.contains(event.target as Node)) {
            setShowLogoutMenu(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    useEffect(() => {
      const user = localStorage.getItem('user');
  
      if (user) {
        try {
          const userObject = JSON.parse(user);
          console.log(userObject);
          
          if (userObject && userObject.fullName) {
            setUserName(userObject.fullName);
          }
        } catch (error) {
          console.error('Failed to parse user data:', error);
        }
      }
    }, [userName]); 

    const handleLogout = () => {
    
        console.log('Logging out...');
        localStorage.removeItem('user');
        localStorage.removeItem('authtoken');
        setShowLogoutMenu(false);
        navigate('/login');
      };
    

  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex space-x-8">
        <li>
          <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
        </li>
        <li>
          <Link to="/userform" className="hover:text-blue-500">Form</Link>
        </li>
        <li className="ml-auto flex flex-row items-center space-x-2">
            <img src="/assets/dashboarduser.png" alt="userimage" className='w-8 h-8'  />
          <Link to="/profile" className="hover:text-blue-500">{userName}</Link>
          <Logout showLogoutMenu={showLogoutMenu}  setShowLogoutMenu={setShowLogoutMenu}  logoutMenuRef={logoutMenuRef} handleLogout={handleLogout} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
