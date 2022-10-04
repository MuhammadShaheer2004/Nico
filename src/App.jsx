import logo from "./assets/logo.png"
import buyimg from "./assets/buyimg.jpg"
import spring from "./assets/spring.png"
import { useState } from "react";



function App() {
    const[firstcounter,setcounter]=useState(30000)
    const[firsttitle,setTitle]=useState("World Arts")

    const[secondcounter,setsecondcounter]=useState(17000)
    const[secondtitle,setsecondTitle]=useState("Digital Artists")

    const[thirdcounter,setthirdcounter]=useState(22000)
    const[thirdtitle,setthirdTitle]=useState("Live Auctions")

    const[fourthcounter,setfourthcounter]=useState(50000)
    const[fourthtitle,setfourthTitle]=useState("Unique Products")



  return (
   <>
   <nav className="navbar  navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            home
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            pages
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            blog
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            portfolio
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            contacts
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>





      </ul>
    </div>
    <div className="dv">
        <li className="nav-search">
          <a href="#" >
            <i className="fa-solid fa fa-search"></i>
          </a>
        </li>
        <button className="nav-btn">Get in Touch</button>
        </div>
  </div>
</nav>

    <div className="container sec-1">
     
    <div className="heading1">
      <h1>buy, create &<img className="buyimg" src={buyimg} alt="" /></h1>
    <div className="line2">
      <div className="left">

      <h1 className="heading2">sell unique </h1>

      </div>


      <div className="right">
      <p className="para1">NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.</p>
      </div>

      <div className="line3">
      <h1><img className="spring" src={spring} alt="" />NFTs Files</h1>
      </div>

    </div>



    <button className="explore">Explore NFTs</button>
      
    
      
         <div className="row counter">
      <div className="col-lg-3 col-md-6 col-sm-6 counter-col">
      <h2>{firstcounter}+</h2>
      <h6>{firsttitle}</h6>
      </div>
        <div className="col-lg-3 col-md-6 col-sm-6 counter-col">
      <h2>{secondcounter}+</h2>
      <h6>{secondtitle}</h6>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 counter-col">
        <h2>{thirdcounter}+</h2>
      <h6>{thirdtitle}</h6>

      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 counter-col">
        <h2>{fourthcounter}+</h2>
        <h6>{fourthtitle}</h6> 

      </div> 
    
    </div>  

    <div className="divider"></div> 
    </div>
   
    </div>
    <div className="container-fluid sec-2">
      <div className="main">
     
      <div className="col-4 start-heading">
        <h6>Unique Files</h6>
        <h1>How to Create and Sell Your NFTs</h1>
        <button className="read">Read More</button>
      </div>
       <div className="row www">
          <div className="col-6">
              <h3>Create Unique Collection</h3>
              <div className="sec-2-divider"></div>
              <p>Set a secondary sales fee and add social links, a description, profile and banner images, and a description.</p>
          </div>
          <div className="col-6">
              <h3>Set Up Your Wallet</h3>
              <div className="sec-2-divider"></div>
              <p>Connect your wallet to Nico by clicking the wallet icon in the top right corner after you've set it up.</p>
          </div>


          <div className="col-6">
              <h3>Download NFTs</h3>
              <div className="sec-2-divider"></div>
              <p>Add a title and description to your work (picture, video, audio, or 3D art), then customize your NFTs with properties.</p>
          </div>
          <div className="col-6">
              <h3>Put Them Up for Sale</h3>
              <div className="sec-2-divider"></div>
              <p>Auctions, fixed-price listings, and declining-price listings are all options. You decide how you'd like to sell your NFTs.</p>
          </div>
</div>
       
       
      </div>
      </div>
   



   </>
  );
}

export default App;
