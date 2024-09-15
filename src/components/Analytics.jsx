import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
      if(import.meta.env.MODE === 'production') {
        ReactGA.send({ hitType: 'pageview', page: (location.pathname + location.search) });
      }
    }, [location]);

  return null;
}

export default Analytics