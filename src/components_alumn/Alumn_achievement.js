import React from 'react';
import "./Achievement.css";
const Achievements = ({achieves}) => {
    return ( 
        <div className="achievementboard">
            <div className="achievementhead">
                <h3>Achievement's</h3>
            </div>
            <div className="achievementcontent">
            <table id="elements">
            {achieves.map((achievement, index) => (
                 <div key={index} className="content">
                <tr>
                    <td> 
                         <div className="serial">{index+1}</div>
                    </td>
                    <td>
                        <div className="info">{achievement}</div>
                    </td>
                </tr>
                 </div>
            ))}
            </table>
            </div>

        </div>
    );}
export default Achievements;