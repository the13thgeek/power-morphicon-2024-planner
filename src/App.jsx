import React, { useState, useEffect } from "react";
import data from "./paneldata.json";
import pmcLogo from './assets/Power_Morphicon_logo.png';
import "./App.scss";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data
      .map((day) => ({
        ...day,
        panels: day.panels.filter(
          (panel) =>
            panel.panel.toLowerCase().includes(searchTerm.toLowerCase()) ||
            panel.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
            panel.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            panel.participants.toLowerCase().includes(searchTerm.toLowerCase()) ||
            panel.moderator.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((day) => day.panels.length > 0);

    setFilteredData(filtered);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="content-body">
      <div className="content-box">
        <img className="logo-pmc" src={pmcLogo} alt="Power Morphicon" />
      </div>
      <div className="content-box info">
        <h1>Power Morphicon 2024 Planner</h1>
        <p>The schedule for this year's PMC is out! Use the text box below to search for a panel and any matching events will show up in the table below.</p>
        <p>Powered by: @the13thgeek [ <a href="//twitter.com/the13thgeek" target="_blank">Twitter</a> ] [ <a href="//twitch.tv/the13thgeek" target="_blank">Twitch</a> ] [ <a href="//instagram.com/the13thgeek" target="_blank">Instagram</a> ]<br />
        Credits: PMC, <a href="//twitter.com/kamenridermeta" target="_blank">@kamenridermeta</a></p>
      </div>
      <div className="content-box">
        <input className="panelSearcher" type="text" placeholder="Search by panel, room or moderator" value={searchTerm} onChange={handleInputChange} />
      </div>
      <div className="content-box">
        <table className="pmcPanel">
          <tbody>
          {filteredData.map((day, index) => (
            <>
              <tr key={index}>
                <th colSpan={3} className="dayHeading">
                  <h2>{day.day}</h2>
                </th>
              </tr>
              <tr>
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
                    <p>{panel.description}</p>
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
    </div>
  );
};

export default App;
