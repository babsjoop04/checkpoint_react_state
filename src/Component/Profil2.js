import { useState } from "react"


const Profil2 = ({ fullName, bio, imageSrc, profession, Change }) => {
    let [TimeID, setTimeID] = useState(0)

    setInterval(() => setTimeID(TimeID = TimeID + 1), 1000)




    return (
        <div className="container text-center pt-5" id='corp1'>
            <div className="row card">
                <h1 className='card-header' id='profilHead'>Profil</h1>
                <div className="card-body" id='profilBody'>

                    <span><img src={imageSrc} className='card-img-top' id='imgProfil' alt="photoProfil" /></span>
                    <span>
                        <h1>{fullName}</h1>
                        <h2>{profession}</h2>
                    </span>
                    <span>
                        <h1 >Bio :</h1>
                        <span id='bio'>{bio}</span>
                    </span>
                </div>
            </div>
            <div className="row">
                This component is mount since {TimeID}

            </div>
            <button id='btn1' className="btn btn-warning btn-lg" onClick={() => { Change() }}>
                click here to hide profile
            </button>

        </div>
    )

}


export default Profil2;
