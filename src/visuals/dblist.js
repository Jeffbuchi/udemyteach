import React from "react";
import DataBase from '../data/db.json';

function DataBaseList() {
    return(
        <div className = "database">
            <h1>Hello Backend</h1>
            <br />
            {DataBase.map((datadetail, index) => {
                return <div>
                    <h2>{datadetail.title}</h2>
                    <p>{datadetail.author}</p>
                    </div>
            })}
        </div>
    )
}

export default DataBaseList;