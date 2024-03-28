import React from "react";

import "../css/style.css";

function About() {

    return (
        <>
            <h1 className="mt-4 text-center" style={{ color: 'green', fontStyle: 'bold' }}>ჩვენს შესახებ </h1>
            <hr style={{
                backgroundColor: 'gray', height: '15px', marginLeft: '50px', marginRight: '40px'
            }}></hr>
            <p className="text-center mt-5" style={{
                fontStyle: 'bold', fontSize: '20px'
            }} >Agri-capa-technology & innovation მოიცავს შემდეგი სახის მომსახურეობას და ჯანსაღი სოფლის მეურნეობის პროდუქტებს</p>
            <p className="text-center mt-5" style={{
                color: 'green', fontStyle: 'bold', fontSize: '30px'

            }}>
                სამაცივრე მეურნეობა<br></br>კარტოფილის საწყობი <br></br>
                დახარისხებისა და დაფასოების ცენტრი <br></br>
                <hr style={{
                    backgroundColor: 'gray', height: '15px', marginLeft: '40px', marginRight: '50px'
                }}></hr>
                სხვადასხვა ჯიშის მრავალფეროვანი ჯანსაღი სოფლის მეურნეობის პროდუქტები: <br></br>
                კარტოფილი <br></br>
                ხორბალი <br></br>
                ხახვი
            </p>
        </>
    )
};

export default About;