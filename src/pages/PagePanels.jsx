import React, { useState, useEffect } from "react";
import Heading from '../components/Heading';
import Footer from "../components/Footer";
import setBodyColor from '../setBodyColor'
import Tile from '../components/Tile';
import './PagePanels.scss';
import data from "../data/paneldata.json";

const PagePanels = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const filtered = data
        .map((day) => ({
            ...day,
            panels: day.panels.filter((panel) =>
            Object.values(panel)
                .map((value) => value.toLowerCase())
                .some((element) => element.includes(searchTerm.toLowerCase()))
            ),
        }))
        .filter((day) => day.panels.length > 0);

        setFilteredData(filtered);

        document.title = 'Panels - Power Morphicon Planner';
        window.scrollTo(0, 0);
    }, [searchTerm]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
    setBodyColor({color: '#d94444'});

  return (
    <div id='panels'>
        <Heading>
            <div className='content'>
                <a href='../' className='back-button'>
                    <i className="fa-solid fa-arrow-left"></i>
                </a>
                <h1>Panels</h1>
                <p>Power up with Ranger talks and insights</p>
            </div>
            <div className="icon">
                <i className="fa-solid fa-people-group"></i>
            </div>
        </Heading>
        <div className="structure">
            <div className="structure-content">
                <p className="instruction">
                    Browse the Panels schedule below or use the text box search for a panel.
                </p>
                <input className="panel-searcher" id="panelSearcher" type="text" placeholder="Search by panel, room or participant names" value={searchTerm} onChange={handleInputChange} />

                { filteredData.length == 0 ? (<p>No panels matched your search for <b>"{searchTerm}."</b></p>) : "" }

                {filteredData.map((day, index) => (
                <Tile key={index} className='results panel section'>
                    <div className="heading">
                        <h3>{day.day}</h3>
                    </div>
                    <table className="panels-list" cellSpacing="0">
                        <tbody>
                            {day.panels.map((panel, idx) => (
                            <tr key={idx}>
                            <td className="time">
                                <span className="time">{panel.time}</span>
                            </td>
                            <td className="details">
                                <div className="room">
                                    <span>{panel.room}</span>
                                </div>
                                <h3>{panel.panel}</h3>
                                <p className="description">{panel.description}</p>
                                {panel.participants ? (
                                <p className="description">
                                    <b>Participants:</b>
                                    <br />
                                    {panel.participants}
                                    <br />
                                </p>
                                ) : (
                                ""
                                )}
                                {panel.moderator ? (
                                <p className="description">
                                    <b>Moderator:</b>
                                    <br />
                                    {panel.moderator}
                                </p>
                                ) : (
                                ""
                                )}
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </Tile>
                ))}
                <Tile className='disclaimer'>
                    <Footer />
                </Tile>
                                
            </div>
        </div>
    </div>
  )
}

export default PagePanels