import React, { useState, useEffect } from "react";
import data from "./paneldata.json";
import './Panels.scss';

const Panels = () => {
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
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
        <div className="content-box">
            <input className="panelSearcher" type="text" placeholder="Search by panel, room or guest name" value={searchTerm} onChange={handleInputChange} />
        </div>
        <div className="content-box results">
            { filteredData.length == 0 ? (<p>No panels matched your search for <b>"{searchTerm}."</b></p>) : "" }
            <table className="pmcPanel">
            <tbody>
            {filteredData.map((day, index) => (
                <>
                <tr key={index}>
                    <th colSpan={3} className="dayHeading">
                    <h2>{day.day}</h2>
                    </th>
                </tr>
                <tr key={index+'B'}>
                    <th className="colTime">Room / Time</th>
                    <th>Panel</th>
                    <th>Participants</th>
                </tr>
                {day.panels.map((panel, idx) => (
                    <tr key={idx}>
                    <td>
                        <span className="time">{panel.time}</span>
                        <br />
                        <b>{panel.room}</b>
                    </td>
                    <td>
                        <h3>{panel.panel}</h3>
                        <p className="description">{panel.description}</p>
                    </td>
                    <td>
                        {panel.participants ? (
                        <>
                            <b>Participants:</b>
                            <br />
                            {panel.participants}
                            <br />
                        </>
                        ) : (
                        ""
                        )}
                        {panel.moderator ? (
                        <>
                            <b>Moderator:</b>
                            <br />
                            {panel.moderator}
                        </>
                        ) : (
                        ""
                        )}
                    </td>
                    </tr>
                ))}
                </>
            ))}
            </tbody>
            </table>
      </div>
    </>

    
)};

export default Panels;
