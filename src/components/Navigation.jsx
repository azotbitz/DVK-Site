import React, {useEffect} from "react";



function Navigation(props) {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container my-container my-container-3 centred">
                <div className="language-select">
                    <h3 style={{marginTop: '5px'}}>
                        Language
                    </h3>
                    <select
                        className="custom-select"
                        value={props.language}
                        onChange={e => props.handleSetLanguage(e.target.value)}
                    >
                        <option value="Russian">Russian</option>
                        <option value="English">English</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;