import React, { useState, useEffect } from "react";
import data from "./photoopdata.json";
import './PhotoOps.scss';

const PhotoOps = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const filtered = data
          .map((type) => ({
            ...type,
            guests: type.guests.filter((guest) =>
              Object.values(guest)
                .map((value) => value.toLowerCase())
                .some((element) => element.includes(searchTerm.toLowerCase()))
            ),
          }))
          .filter((type) => type.guests.length > 0);
    
        setFilteredData(filtered);
      }, [searchTerm]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

  return (
    <>
        <div className="content-box">
            <input className="photoOpSearcher" type="text" placeholder="Search by group or guest name" value={searchTerm} onChange={handleInputChange} />
        </div>
        <div className="content-box results">
            { filteredData.length == 0 ? (<p>No photo ops matched your search for <b>"{searchTerm}."</b></p>) : "" }
            <table className="pmcPhotoOps">
                <tbody>
                    {filteredData.map((type, index) => (
                        <>
                        <tr key={index}>
                            <th colSpan={4} className="typeHeading">
                                <h2>{type.type}</h2>
                            </th>
                        </tr>
                        <tr key={index+'B'}>
                            <th>Guest/Group</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                        {type.guests.map((guest, idx) => (
                            <tr key={idx}>
                                <td className="info">
                                    { guest.group_name ? (
                                        <>
                                        <h3>{ guest.group_name }</h3>
                                        <p className="description">{ guest.name }</p>
                                        </>
                                    ) : (
                                        <h3>{ guest.name }</h3>
                                    )}
                                </td>
                                { guest.fri ? (
                                    <td className="photoop-time">{guest.fri}</td>
                                ) : (
                                    <td className="no-data">---</td>
                                ) }
                                { guest.sat ? (
                                    <td className="photoop-time">{guest.sat}</td>
                                ) : (
                                    <td className="no-data">---</td>
                                ) }
                                { guest.sun ? (
                                    <td className="photoop-time">{guest.sun}</td>
                                ) : (
                                    <td className="no-data">---</td>
                                ) }
                            </tr>
                        ))}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default PhotoOps