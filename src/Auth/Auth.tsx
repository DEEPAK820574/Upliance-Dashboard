import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const HOC: React.FC<P> = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("authtoken");

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuth;
