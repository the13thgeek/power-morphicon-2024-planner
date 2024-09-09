import React, { useState, useEffect } from "react";
import Heading from '../components/Heading';
import Footer from "../components/Footer";
import setBodyColor from '../setBodyColor'
import Tile from '../components/Tile';
import './PagePhotoOps.scss';
import data from "../data/photoopdata.json";

const PagePhotoOps = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const filtered = data
          .map((type) => ({
            ...type,
            guests: type.guests.filter((guest) =>
              Object.values(guest)
                .map((value) => value.toString().toLowerCase())
                .some((element) => element.includes(searchTerm.toLowerCase()))
            ),
          }))
          .filter((type) => type.guests.length > 0);
    
        setFilteredData(filtered);

        document.title = 'Photo Ops - Power Morphicon Planner';
      }, [searchTerm]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    setBodyColor({color: '#3b87e3'});

  return (
    <div id='photo-ops'>
        <Heading>
            <div className='content'>
                <a href='../' className='back-button'>
                    <i className="fa-solid fa-arrow-left"></i>
                </a>
                <h1>Photo Ops</h1>
                <p>Strike a pose with your Morphin' heroes</p>
            </div>
            <div className="icon">
                <i className="fa-solid fa-camera"></i>
            </div>
        </Heading>
        <div className="structure">
            <div className="structure-content">
                <p className="instruction">
                    Browse the Photo Ops schedule below or use the text box search for a photo op.
                </p>
                <input className="photo-ops-searcher" id="photoOpSearcher" type="text" placeholder="Search by guest or group name" value={searchTerm} onChange={handleInputChange} />

                { filteredData.length == 0 ? (<p>No photo ops matched your search for <b>"{searchTerm}."</b></p>) : "" }

                { filteredData.map((type, index) => (
                    <Tile key={index} className='results photo-ops section'>
                        <div className="heading">
                            <h3>{type.type}</h3>
                        </div>
                        <table className="photo-ops-list" cellSpacing="0">
                            <tbody>
                                {type.guests.map((guest, idx) => (
                                    <tr key={idx}>
                                    <td className="details">
                                        { guest.group_name ? (
                                            <>
                                            <h3>{ guest.group_name }</h3>
                                            <p className="description">{ guest.name }</p>
                                            </>
                                        ) : (
                                            <h3>{ guest.name }</h3>
                                        ) }
                                        {guest.rate ? (<p className="rate"></p>) : ''} 
                                    </td>
                                    <td className="time">
                                        {guest.fri ? guest.fri : (
                                            <span className="no-data">
                                                &times;
                                            </span>
                                        )}
                                        <p><span>Fri</span></p>
                                    </td>
                                    <td className="time">
                                        {guest.sat ? guest.sat : (
                                            <span className="no-data">
                                                &times;
                                            </span>
                                        )}
                                        <p><span>Sat</span></p>
                                    </td>
                                    <td className="time">
                                        {guest.sun ? guest.sun : (
                                            <span className="no-data">
                                                &times;
                                            </span>
                                        )}
                                        <p><span>Sun</span></p>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Tile>
                )) }
                <Tile className='disclaimer'>
                    <Footer />
                </Tile>

            </div>
        </div>
    </div>
  )
}

export default PagePhotoOps