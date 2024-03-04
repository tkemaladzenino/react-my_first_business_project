import React from "react";

import "../css/style.css";

function Contact() {

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 text-center" >
                    <h1 className="mt-4" style={{ color: 'red', fontStyle: 'bold' }}>Contact information</h1>
                    <hr style={{
                        backgroundColor: 'gray', height: '12px'
                    }}></hr>
                    <h1 className="mt-4" style={{ color: 'green', fontStyle: 'bold' }}>Email: kaapanadze@gmail.com</h1>
                    <br />
                    <br />

                    <h1>Phone: 595 XX XX XX</h1>
                </div>


            </div>
        </div>
    )

};

export default Contact;