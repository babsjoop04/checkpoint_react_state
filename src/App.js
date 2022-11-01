import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()

    // ajout state

    this.state = {

      fullName: "Adama Diallo",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum totam hic, facilis corporis magnam odio ratione qui obcaecati repellendus praesentium exercitationem cum ipsam quod, blanditiis, id quas consectetur similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum totam hic, facilis corporis magnam odio ratione qui obcaecati repellendus praesentium exercitationem cum ipsam quod, blanditiis, id quas consectetur similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum totam hic, facilis corporis magnam odio ratione qui obcaecati repellendus praesentium exercitationem cum ipsam quod, blanditiis, id quas consectetur similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum totam hic, facilis corporis magnam odio ratione qui obcaecati repellendus praesentium exercitationem cum ipsam quod, blanditiis, id quas consectetur similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum totam hic, facilis corporis magnam odio ratione qui obcaecati repellendus praesentium exercitationem cum ipsam quod, blanditiis, id quas consectetur similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum totam hic, facilis corporis magnam odio ratione qui obcaecati repellendus praesentium exercitationem cum ipsam quod, blanditiis, id quas consectetur similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum totam hic, facilis corporis magnam odio ratione qui obcaecati repellendus praesentium exercitationem cum ipsam quod, blanditiis, id quas consectetur similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum totam hic, facilis corporis magnam odio ratione qui obcaecati repellendus praesentium exercitationem cum ipsam quod, blanditiis, id quas consectetur similique!",
      imageSrc: "/imgProfil.jpg",
      profession: "Musician",
      show: true,
      secondID: 0




    }

  }

  // ajout partie timer apres montage composant

  componentDidMount() {
    setInterval(this.ChangeTimeID, 1000);

  }


  ChangeTimeID = () => {
    // eslint-disable-next-line
    this.setState({ secondID: (this.state.secondID++) })

  }

  //ajout methode changeant l'etat de show

  Change = () => {

    this.setState({ show: (!this.state.show) })



  }




  render() {
    return this.state.show ?
      (
        <>
          <div className="container text-center " id='corp1'>
            <div className="row card" >
              <h1 className='card-header' id='profilHead'>Profil</h1>
              <div className="card-body" id='profilBody'>

                <span><img src={this.state.imageSrc} className='card-img-top' id='imgProfil' alt="photoProfil" /></span>
                <span>
                  <h1>{this.state.fullName}</h1>
                  <h2>{this.state.profession}</h2>
                </span>
                <span>
                  <h1 >Bio :</h1>
                  <span id='bio'>{this.state.bio}</span>
                </span>
              </div>
            </div>
            <div className="row">
              <span id='time'>
                This component is mount since {this.state.secondID} seconds
              </span>
            </div>


          </div>
          <div className="text-center">
            <button id='btn1' className="btn  btn-lg" onClick={this.Change} >
              click here to hide profile
            </button>
          </div>
        </>)
      :
      (
        <>
          <div className="container text-center" id='corp2'>
            <div className="card">
              <div className="card-body">

                <h1>this profile is hidden</h1>
                <h2>Please press the button </h2>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button id='btn1' className="btn  btn-lg" onClick={this.Change}>
              click here to view profile
            </button>
          </div>
        </>
      )
  }
}


export default App;
