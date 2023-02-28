import React from 'react';

const Noticeboard = ({notices}) => {
    return ( 
        <div className="noticeboard">
            <div className="noticehead">
                <h3>Notice Board</h3>
            </div>
            <div className="noticecontent">
            <table id="elements">
            {notices.map((notice, index) => (
                 <div key={index} className="content">
                <tr>
                    <td> 
                         <div className="serial">{index+1}</div>
                    </td>
                    <td>
                        <div className="info">{notice}</div>
                    </td>
                </tr>
                 </div>
            ))}
            </table>
            </div>

        </div>
    );}
export default Noticeboard;