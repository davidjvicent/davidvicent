import React from "react";
import './DvCard.css'

const DvCard = (props) => {
    return(
        <div className="DvCard mx-auto" style={{width: 400 }}>
            <div className="card">
                <div className="card-body">
                    <div className="card-title text-center">
                        <h1>David Vicent</h1>
                        <br/>
                    </div>
                    <div className="card-text text-justify">
                        <p>
                            {props.description}
                        </p>
                    </div>
                    <div className="text-center">
                        <a className="btn btn-dv">Certificados.</a>
                        <a className="btn btn-dv">Proyectos.</a>
                        <a className="btn btn-dv">Redes Sociales.</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DvCard