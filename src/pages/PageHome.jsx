import { React, useEffect } from 'react';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import setBodyColor from '../setBodyColor'
import Tile from '../components/Tile';
import './PageHome.scss';
import pmcLogo from '../assets/Power_Morphicon_logo.png';

const PageHome = () => {

    //setBodyColor({color: '#bf0101'});
    setBodyColor({color: '#333'});

    useEffect(() => {
        document.title = 'Power Morphicon Planner';
    }, []);

  return (
    <div id="home">
        <Heading>
            <div className='content'>
                <img src={pmcLogo} alt="Power Morphicon" className='pmc-logo' />
                <h1>Plan your weekend!</h1>
                <p>The panel and photo-op schedules for this year's PMC are out. Use the menu below to browse, search and plan your convention itinerary.</p>
            </div>
            <div className="icon">
                <i className="fa-solid fa-bolt-lightning"></i>
            </div>
        </Heading>
        <div className="structure">
            <div className="structure-content">
                <Tile className='dialog notice'>
                    <div className="icon">
                        <i className="fa-solid fa-wrench"></i>
                    </div>
                    <div className='message'>
                        <h3>Under Construction</h3>
                        <p>This page is currently being updated for the <b>Power Morphicon 2026</b> (with possible support for PMCX 2025). Stay tuned for new information coming soon!</p>
                    </div>
                </Tile>
                <Tile className='module panels' linkTo='panels/'>
                    <div className='content'>
                        <h3>Panels</h3>
                        <p>Power up with Ranger talks and insights</p>
                        <div className="action">Browse</div>
                    </div>
                    {/* <div className="icon">
                        <i className="fa-solid fa-people-group"></i>
                    </div> */}
                </Tile>
                <Tile className='module photo-ops' linkTo='photo-ops/'>
                    <div className='content'>
                        <h3>Photo Ops</h3>
                        <p>Strike a pose with your Morphin' heroes</p>
                        <div className="action">Browse</div>
                    </div>
                    {/* <div className="icon">
                        <i className="fa-solid fa-camera"></i>
                    </div> */}
                </Tile>
                <Tile className='module guests'>
                    <div className='content'>
                        <h3>Guests</h3>
                        <p>Meet the legends of the Morphin' Grid</p>
                        <div className="action disabled">Under Construction</div>
                    </div>
                    {/* <div className="icon">
                        <i className="fa-solid fa-user-ninja"></i>
                    </div> */}
                </Tile>
                <Tile className='module exhibitors'>
                    <div className='content'>
                        <h3>Exhibitors & Artists</h3>
                        <p>Gear up with exclusive Ranger merch</p>
                        <div className="action disabled">Under Construction</div>
                    </div>
                    {/* <div className="icon">
                        <i className="fa-solid fa-store"></i>
                    </div> */}
                </Tile>
                <Tile className='module badges'>
                    <div className='content'>
                        <h3>Badges</h3>
                        <p>Unlock your Command Center credentials</p>
                        <div className="action disabled">Under Construction</div>
                    </div>
                    {/* <div className="icon">
                        <i className="fa-solid fa-ticket"></i>
                    </div> */}
                </Tile>
                <Tile className='disclaimer'>
                    <Footer />
                </Tile>
            </div>
        </div>
        
    </div>
  )
}

export default PageHome