import logo from "./assets/logo.png"
import buyimg from "./assets/buyimg.jpg"
import spring from "./assets/spring.png"
import { useState } from "react";
import bigImage from "./assets/home3-section-1-removebg-preview.png"



function App() {
  const [firstcounter, setcounter] = useState(30000)
  const [firsttitle, setTitle] = useState("World Arts")

  const [secondcounter, setsecondcounter] = useState(17000)
  const [secondtitle, setsecondTitle] = useState("Digital Artists")

  const [thirdcounter, setthirdcounter] = useState(22000)
  const [thirdtitle, setthirdTitle] = useState("Live Auctions")

  const [fourthcounter, setfourthcounter] = useState(50000)
  const [fourthtitle, setfourthTitle] = useState("Unique Products")



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
                  <li><hr className="dropdown-divider" /></li>
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
                  <li><hr className="dropdown-divider" /></li>
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
                  <li><hr className="dropdown-divider" /></li>
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
                  <li><hr className="dropdown-divider" /></li>
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
                  <li><hr className="dropdown-divider" /></li>
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
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>





            </ul>
          </div>
          <div className="navdv">
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

      <div className="container sec-3">

<div className="row links">
  <div className="bg-heading"><h1> NFTs</h1></div>
  <div className="front-heading"><h1>Most Popular NFTs</h1></div>
</div>

<div className="row lnks">
  <div className="col">
    <ul>
    
      <li><a href="#" >
        ALL
      </a>  </li>
   

      <li><a href="#" >
        GUTTER CAT
      </a></li>

      <li><a href="#" >
        HAPE PRIME
      </a></li>

      <li><a href="#" >
        LAZY LIONS
      </a></li>
      
      <li><a href="#" >
        PEACEFUL APE
      </a></li>
    </ul>
  </div>
</div>

<div className="row cards">
  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 card">
 <div className="mmm"> 
    <img className="card-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/05/8170.png" alt="" />
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">HAPE #8170</h5>
        <i className="fa fa-diamond">

        </i>
        <span>6</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">HAPE PRIME</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  </div>
</div> 

<div className="overlay">
<div className="mmm">
<div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">HAPE #8170</h5>
        <i className="fa fa-diamond">

        </i>
        <span>6</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">HAPE PRIME</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  <div className="overlay-btn">
  <button className="overlayBtn" >Buy Products</button>
  </div>
  </div>
  </div>
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 card">
 <div className="mmm"> 
    <img className="card-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/05/ingjyaptva7le7l4qtf4jjkvlj0-95brxq8nsjtt1z70zs7zqgxjpldijc-_wpzj_wfoc9ua9wzxlao7qv1yxc3jn6fe7k7brusv.png" alt="" />
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Cat #1046</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.17</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">GUTTER CAT</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  </div>
  <div className="overlay">
  <div className="mmm">
  <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Cat #1046</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.17</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">GUTTER CAT</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  <div className="overlay-btn">
  <button className="overlayBtn" >Buy Products</button>
  </div>
  </div>
  </div>
  </div>
</div> 
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 card">
 <div className="mmm"> 
    <img className="card-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/05/e3t8avw0cqagrkn6yw-dstmseet0psxggjl1em8mrskry_9x5-yfhln3d-or-4ewkm9yuwscbzph8_fiblrf39wnjcwvvmgvgbqkkm4.png" alt="" />
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Ape #215</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.04</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">PEACEFUL APE</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  </div>
</div> 
<div className="overlay">
<div className="mmm"> 
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Ape #215</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.04</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">PEACEFUL APE</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  <div className="overlay-btn"> <button className="overlayBtn" >Buy Products</button> </div>
  </div>
</div> 
</div>
  </div>

  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 card">
 <div className="mmm"> 
    <img className="card-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/05/lsf_e9u5o41fe-9kjaa8cjouev-hdu4pup-lmdpzlgzdvzge2c_fbzng8n6wmbbist4434f3lrc4co3s7gvrbv7hetnzroqfreslkam.jpg" alt="" />
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Lions #30</h5>
        <i className="fa fa-diamond">

        </i>
        <span>5.2</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">LAZY LIONS</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  </div>
</div> 
<div className="overlay">
<div className="mmm"> 
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Lions #30</h5>
        <i className="fa fa-diamond">

        </i>
        <span>5.2</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">LAZY LIONS</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  <div className="overlay-btn"> <button className="overlayBtn" >Buy Products</button> </div>
  </div>
</div> 
</div>
  </div>

  {/* second row */}

  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 card">
 <div className="mmm"> 
    <img className="card-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/05/mmrdznyp5ottz7sbkioqglpsou-6r43itksijzneke4zy20wtzhcmhtqjojh_gqewu3mftwohjlxcd7od2yu_8cgfa_x906awpzrmw.png" alt="" />
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Ape #231</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.04</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">PEACEFUL APE</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  </div>
</div> 
<div className="overlay">
<div className="mmm"> 
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Ape #231</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.04</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">PEACEFUL APE</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  <div className="overlay-btn"> <button className="overlayBtn" >Buy Products</button> </div>
  </div>
</div>
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 card">
 <div className="mmm"> 
    <img className="card-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/05/khl8oid96pptec5vxkgjmtaidfjczve1resda4t_87obrnj4f6fv7fbzzrtc1c3dxynacrc_kroekgfda5o-ytsvpywna61m8a4nxf4.png" alt="" />
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Cat #279</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.25</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">GUTTER CAT</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  </div>
</div> 
<div className="overlay">
<div className="mmm"> 
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Cat #279</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.25</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">GUTTER CAT</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  <div className="overlay-btn"> <button className="overlayBtn" >Buy Products</button> </div>
  </div>
</div> 
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 card">
 <div className="mmm"> 
    <img className="card-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/05/hxpxqeoxhkoape7xkxsi5pcy1-g__om7f4iaqhxcgi7fclsyoqlnqvjtedfbuvbmlykbxft9fcyxru09ix47bb1nk8c14ld0vwlvkg.png" alt="" />
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Ape #232</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.04</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">PEACEFUL APE</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  </div>
</div> 
<div className="overlay">
<div className="mmm"> 
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Ape #232</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.04</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">PEACEFUL APE</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  <div className="overlay-btn"> <button className="overlayBtn" >Buy Products</button> </div>
  </div>
</div>
</div>
  </div>

  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 card">
 <div className="mmm"> 
    <img className="card-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/05/nvjposhjckbwptc0b-erk3bbmha_azcwfz-te0frqiqljfxuqlzanw41cbx2hpbpldqjbkxhqapx5ayxx-dyhp4esozrrcrgzympja.png" alt="" />
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Ape #230</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.04</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">PEACEFUL APE</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  </div>
</div> 
<div className="overlay">
<div className="mmm"> 
    <div className="details">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>


    <div className="title">
      <div className="dv">

        <h5 className="first-title">Ape #230</h5>
        <i className="fa fa-diamond">

        </i>
        <span>0.04</span>
      </div>
    </div>
   
    <div className="title-divider"></div>

    
    <div className="title">
      <div className="dv">

        <h5 className="last-title">PEACEFUL APE</h5>
        <i >

        </i>
      
        <span className="fa fa-heart" ></span>
      </div>
  </div>
  
  </div>
</div>
</div>
  </div>


</div>
<div className="sec-3-btn">
  <button className="explore">Explore All NFTs</button>
  </div>
      </div>

      <div className="container-fluid sec-2">
        <div className="row main">

          <div className="col-md-4 col-sm-12 start-heading">
            <h6>Unique Files</h6>
            <h1>How to Create and Sell Your NFTs</h1>
            <button className="read">Read More</button>
          </div>
          <div className="col-md-8 col-sm-12 www">
            <div className="row">
              <div className="col-md-6 col-sm-12 for-col-pad">
                <h3>Create Unique Collection</h3>
                <div className="sec-2-divider"></div>
                <p>Set a secondary sales fee and add social links, a description, profile and banner images, and a description.</p>
              </div>
              <div className="col-md-6 col-sm-12 for-col-pad">
                <h3>Set Up Your Wallet</h3>
                <div className="sec-2-divider"></div>
                <p>Connect your wallet to Nico by clicking the wallet icon in the top right corner after you've set it up.</p>
              </div>

              <div className="col-md-6 col-sm-12 for-col-pad">
                <h3>Download NFTs</h3>
                <div className="sec-2-divider"></div>
                <p>Add a title and description to your work (picture, video, audio, or 3D art), then customize your NFTs with properties.</p>
              </div>
              <div className="col-md-6 col-sm-12 for-col-pad">
                <h3>Put Them Up for Sale</h3>
                <div className="sec-2-divider"></div>
                <p>Auctions, fixed-price listings, and declining-price listings are all options. You decide how you'd like to sell your NFTs.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="row logo-images">
          <div className="col-lg-2 col-md-4 col-sm-6"><img className="logo-img-1 logo-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/04/clients_1-4.png" alt="" /> </div>
          <div className="col-lg-2 col-md-4 col-sm-6"><img className="logo-img-2 logo-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/04/clients_2-3.png" alt="" /></div>
          <div className="col-lg-2 col-md-4 col-sm-6"><img className="logo-img-3 logo-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/04/clients_3-4.png" alt="" /></div>
          <div className="col-lg-2 col-md-4 col-sm-6"><img className="logo-img-4 logo-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/04/clients_4-3.png" alt="" /></div>
          <div className="col-lg-2 col-md-4 col-sm-6"><img className="logo-img-5 logo-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/04/clients_5-4.png" alt="" /></div>
          <div className="col-lg-2 col-md-4 col-sm-6"><img className="logo-img-6 logo-img" src="https://wgl-demo.net/nico/wp-content/uploads/2022/04/clients_6-3.png" alt="" /></div>
        </div>
        <div className="sec-2-end">
        <div className="sec-2-end-divider"></div>
       </div>
      </div>

      <div className="container sec-4">
      <div className="row links">
  <div className="bg-heading "><h1 > Categories</h1></div>
  <div className="front-heading"><h1>Browse by Category</h1></div>
</div>
  <div className="browse-para"><p>The right way to help investors is by integrating all reward programs into the platform</p></div>
    
    <div className="row collections">
      <div className="col"><h1>Art / Music / Photo / Collectibles / Trading Cards / Sport / Utility /</h1></div>
      <div className="sec-3-btn sec-4-browse-btn" >
  <button className="explore">Browse All Categories</button>
  </div>
    </div>


      </div>

      <div className="container-fluid sec-5">
        <div className="row big-image ">
          <div className="col-12">
            <img className="bari-image" src={bigImage} alt="" />
          </div>
        </div>

      </div>

    
      



    </>
  );
}

export default App;
