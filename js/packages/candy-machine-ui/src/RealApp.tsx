import React from 'react';
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";

const RealApp = () => {
    return (
        <>
       

       {/** <div id="netstorm-preloader" className="netstorm-preloader">
            
            <div className="preloader-animation">
                
                <div className="spinner"></div>
                <p className="fw-5 text-center text-uppercase">AFROGEM</p>
            </div>
            
            <div className="loader-animation">
                <div className="row h-100">
                   
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                   
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                      <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                    
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                </div>
            </div>
    </div>  */}       
    
        <div className="main">
           
            <header id="header" style={{  position: 'relative'}}>
               
                <nav data-aos="zoom-out" data-aos-delay="800" className="navbar navbar-expand">
                    <div className="container header">
                        
                        <a className="navbar-brand" href="/">
                            <img className="navbar-brand-sticky" src="./afrogem.jpg" alt="sticky brand-logo" />
                        </a>
                        <div className="ml-auto"></div>
                        
                        <ul className="navbar-nav items mx-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Roadmap" className="nav-link">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li> 
                            <li className="nav-item">
                                <a href="#Contact" className="nav-link">Contact</a>
                            </li>
                            
                            <li className="nav-item">
                                <a href="#Contact" className="nav-link">Join Us</a> 
                            </li>
                        </ul>
                        
    
                        
                        <ul className="navbar-nav toggle">
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                    <i className="fas fa-bars toggle-icon m-0"></i>
                                </a>
                            </li>
                        </ul>
    
                        
                        <ul className="navbar-nav action">
                            <li className="nav-item ml-3">
                                <Link to="/App" className="btn ml-lg-auto btn-bordered-white">Mint</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            
    
            
            <section className="hero-Namesection">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-7">
                            <span>AfroGem NFTs</span>
                            <h1 className="mt-4">Discover and collect Beautiful African Artifact NFTs</h1>
                            <p>Explore one of the pioneers of African Culture in the NFT marketplace - AfroGem NFTs</p>
                            
                            <div className="button-group">
                                <Link className="btn btn-bordered-white" to="/App">Mint</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465" version="1.1">
                        <defs>
                            <linearGradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%" y2="98.4657689%" id="linearGradient-1">
                                <stop stop-color="rgba(69,40,220, 0.15)" offset="0%" />
                                <stop stop-color="rgba(87,4,138, 0.15)" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon points="" fill="url(#linearGradient-1)">
                                <animate id="graph-animation" xmlns="http://www.w3.org/2000/svg" dur="2s" repeatCount="" attributeName="points" values="0,464 0,464 111.6,464 282.5,464 457.4,464 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,323.3 282.5,373 457.4,423.8 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,336.6 457.4,363.5 613.4,414.4 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,323.3 613.4,340 762.3,425.6 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,290.4 762.3,368 912.3,446.4 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,329.6 912.3,420 1068.2,427.6 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,402.4 1068.2,373 1191.2,412 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,336.6 1191.2,334 1328.1,404 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,282 1328.1,314 1440.1,372.8 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,254 1440.1,236 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,144.79999999999998 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,8 1440.1,464 0,464;" fill="freeze" />
                            </polygon>
                        </g>
                    </svg>
                </div>
            </section>
            
            
            <section className="single featured post-details">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12 col-lg-12 p-0">
                            <div className="row">
                                <div className="col-12">
                                    
                                    <div className="blog-thumb">
                                        <img className="w-100" src="./nft.gif" alt=""/>
                                    </div>
                                        <h2 className="featured ml-0" style={{alignItems:"center"}}>Rich African Heritage... on the METAVERSE</h2>
                                        <p>Far far away, in the great lands of Africa, long before the intervention of the Western World, there was a vast number of tribes from the deserts of the North to the Oceans of the South. Within these tribes lived great personalities, personalities that strived and thrived. A metaverse forms in the void, inhabited by artifact art honouring the great african heritage with personalities that are cool but also kinda creepy.</p>
                                        <p>
                                        </p><blockquote>Celebrating African History, culture and personalities with 47 unique and beautiful NFTs.</blockquote>
                                        <h2 className="featured ml-0" style={{alignItems:"center"}}>Some call it the Afroverse, but we call it home.</h2>
                                    </div>
                            </div>
                        </div>
    
                        
                        
                    </div>
                </div>
            </section>
    
            
            {/**<section className="live-auctions-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>Collection</span>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="explore-1.html">View All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="auctions-slides">
                        <div className="swiper-container slider-mid items">
                            <div className="swiper-wrapper">
                                
                                <div className="swiper-slide item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="item-details-zaya.html">
                                                <img className="card-img-top" src={`${process.env.PUBLIC_URL}"/assets/img/content/zaya.png"`} alt=""/>
                                            </a>
                                        </div>
                                        
                                        <div className="card-caption col-12 p-0">
                                            
                                            <div className="card-body">
                                                <div className="countdown-times mb-3">
                                                    <div className='countdown d-flex justify-content-center' data-date="2021-12-09"></div>
                                                </div>
                                                <a href="item-details-zaya.html">
                                                    <h5 className="mb-0">ZAYA</h5></a>
                                                
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>65 SOL</span>
                                                    <span>No. 1 of 42</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="item-details-cleo.html">
                                                <img className="card-img-top" src={`${process.env.PUBLIC_URL}"/assets/img/content/cleo.png"`} alt=""/>
                                            </a>
                                        </div>
                                       
                                        <div className="card-caption col-12 p-0">
                                            
                                            <div className="card-body">
                                                <div className="countdown-times mb-3">
                                                    <div className='countdown d-flex justify-content-center' data-date="2021-10-05"></div>
                                                </div>
                                                <a href="item-details-cleo.html">
                                                    <h5 className="mb-0">CLEO</h5>
                                                </a>
                                                
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>65 SOL</span>
                                                    <span>No.2 of 42</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="item-details-mya.html">
                                                <img className="card-img-top" src={`${process.env.PUBLIC_URL}"/assets/img/content/mya.png"`} alt=""/>
                                            </a>
                                        </div>
                                        
                                        <div className="card-caption col-12 p-0">
                                            
                                            <div className="card-body">
                                                <div className="countdown-times mb-3">
                                                    <div className='countdown d-flex justify-content-center' data-date="2021-09-15"></div>
                                                </div>
                                                <a href="item-details-mya.html">
                                                    <h5 className="mb-0">MYA</h5>
                                                </a>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>65 SOL</span>
                                                    <span>No.3 of 42</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="item-details-tang.html">
                                                <img className="card-img-top" src={`${process.env.PUBLIC_URL}"/assets/img/content/tang.png"`} alt=""/>
                                            </a>
                                        </div>
                                       
                                        <div className="card-caption col-12 p-0">
                                           
                                            <div className="card-body">
                                                <div className="countdown-times mb-3">
                                                    <div className='countdown d-flex justify-content-center' data-date="2021-12-29"></div>
                                                </div>
                                                <a href="item-details-tang.html">
                                                    <h5 className="mb-0">TANG</h5>
                                                </a>
                                                
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>65 SOL</span>
                                                    <span>No.4 of 42</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="item-details-pya.html">
                                                <img className="card-img-top" src={`${process.env.PUBLIC_URL}"/assets/img/content/pya.png"`} alt=""/>
                                            </a>
                                        </div>
                                       
                                        <div className="card-caption col-12 p-0">
                                            
                                            <div className="card-body">
                                                <div className="countdown-times mb-3">
                                                    <div className='countdown d-flex justify-content-center' data-date="2022-01-24"></div>
                                                </div>
                                                <a href="item-details-pya.html">
                                                    <h5 className="mb-0">PYA</h5>
                                                </a>
                                        
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>65 SOL</span>
                                                    <span>No.5 of 42</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="item-details-mazuri.html">
                                                <img className="card-img-top" src={`${process.env.PUBLIC_URL}"/assets/img/content/mazuri.png"`} alt=""/>
                                            </a>
                                        </div>
                                       
                                        <div className="card-caption col-12 p-0">
                                          
                                            <div className="card-body">
                                                <div className="countdown-times mb-3">
                                                    <div className='countdown d-flex justify-content-center' data-date="2022-03-30"></div>
                                                </div>
                                                <a href="item-details-mazuri.html">
                                                    <h5 className="mb-0">MAZURI</h5>
                                                </a>
                                                
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>65 SOL</span>
                                                    <span>No.6 of 42</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
</section>**/}
          
            <section className="work-area">
                <div className="container" id='Roadmap'>
                    <div className="row">
                        <div className="col-12" style={{alignItems:"center"}}>
                            
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <span>RoadMap</span>
                                    <h3 className="mt-3 mb-0">Official roadmap of the collection.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        <div className="col-12 col-sm-6 col-lg-3 item">
                           
                            <div className="single-work" style={{alignItems:"center"}}>
                                <div className="icon">
                      <img src="./afrogem.svg" alt="afrogem"/>
                    </div>
                                <h4  style={{textAlign:"center"}}>10%</h4>
                                <p style={{textAlign:"center"}}>Presale of first NFT and official Whitelist.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                           
                            <div className="single-work"style={{alignItems:"center"}}>
                                <div className="icon">
                      <img src="./afrogem1.svg" alt="afrogem"/>
                    </div>
                                <h4  style={{textAlign:"center"}}>20%</h4>
                                <p style={{textAlign:"center"}}>Live auction of NFT.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            
                            <div className="single-work" style={{alignItems:"center"}}>
                                <div className="icon">
                      <img src="./afrogem12.svg" alt="afrogem"/>
                    </div>
                    <h4  style={{textAlign:"center"}}>30%</h4>
                                <p  style={{textAlign:"center"}}>AfroGem NFT Holder's club.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            
                            <div className="single-work" style={{alignItems:"center"}}>
                                <div className="icon">
                      <img src="./afrogem5.svg" alt="afrogem"/>
                    </div>
                                <h4  style={{textAlign:"center"}}>40%</h4>
                                <p style={{textAlign:"center"}}>Official Liquor sponsor for AfroGem Party!</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                           
                            <div className="single-work" style={{alignItems:"center"}}>
                                <div className="icon">
                      <img src="./afrogem4.svg" alt="afrogem"/>
                    </div>
                                <h4  style={{textAlign:"center"}}>50%</h4>
                                <p  style={{textAlign:"center"}}>Launch party at Lacampari Beach Resort, Lagos!</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            
                            <div className="single-work" style={{alignItems:"center"}}>
                                <div className="icon">
                      <img src="./afrogem2.svg" alt="afrogem"/>
                    </div>
                                <h4  style={{textAlign:"center"}}>60%</h4>
                                <p style={{textAlign:"center"}}>15% Liquidity to Charity!</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            
                            <div className="single-work" style={{alignItems:"center"}}>
                                <div className="icon">
                      <img src="./afrogem8.svg" alt="afrogem"/>
                    </div>
                                <h4  style={{textAlign:"center"}}>70%</h4>
                                <p style={{textAlign:"center"}}>Official NFT Party for NFT Holders in DUBAI!</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            
                            <div className="single-work" style={{alignItems:"center"}}>
                                <div className="icon">
                      <img src="./afrogem13.svg" alt="afrogem"/>
                    </div>
                                <h4 style={{textAlign:"center"}}>80%</h4>
                                <p  style={{textAlign:"center"}}>Launch of upgrade collection!</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                           
                            <div className="single-work" style={{alignItems:"center"}}>
                                <div className="icon">
                      <img src="./afrogem7.svg" alt="afrogem"/>
                    </div>
                                <h4  style={{textAlign:"center"}}>90%</h4>
                                <p style={{textAlign:"center"}}>Release of 2 more collections!</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            
                            <div className="single-work" style={{alignItems:'center'}}>
                                <div className="icon">
                      <img src="./afrogem9.svg" alt="afrogem"/>
                    </div>
                                <h4 style={{textAlign:"center"}}>100%</h4>
                                <p style={{textAlign:"center"}}>Holders of AfroGem NFT 1.0 automatically become whitelisted of 2.0!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
    
            <footer className="footer-area">
                
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                            
                                <div className="footer-items">
                                   
                        <a className="navbar-brand" href="index.html">
                            <img className="navbar-brand-sticky" src="./afrogem.jpg" alt="sticky brand-logo"/>
                        </a>
                                    <p>Explore one of the pioneers of African Culture in the NFT marketplace - AfroGem NFTs</p>
                                  
                                    <div className="social-icons d-flex" id='Contact' style={{alignItems:'center'}}>
                                        <a className="facebook" href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="twitter" href="https://twitter.com/afrogemnfts?s=11&t=smW3iPz3oW6hMaO28_pw_g">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a className="instagram" href="https://instagram.com/afrogemnft?igshid=YmMyMTA2M2Y=">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a className="linkedin" href="#">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                
                                <div className="footer-items">
                                    
                                    <h4 className="footer-title">Useful Links</h4>
                                    <ul>
                                        <li><a href="help-center.html">How It Works</a></li>
                                        <li><a href="#">Privacy &amp; Terms</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                
                                <div className="footer-items">
                                  
                                    <h4 className="footer-title">Community</h4>
                                    <ul>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Partners</a></li>
                                        <li><a href="#">News</a></li>
                                    </ul>
                                </div>
                            </div>
                    {/**   <div className="col-12 col-sm-6 col-lg-3">
                                
                                <div className="footer-items">
                                    
                                    <h4 className="footer-title">Subscribe Us</h4>
                                    
                                    <div className="subscribe-form d-flex align-items-center">
                                        <input type="email" className="form-control" placeholder="info@yourmail.com"/>
                                        <button type="submit" className="btn"><i className="icon-paper-plane"></i></button>
                                    </div>
                                </div>
                           </div>**/}
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                   
                                    <div className="copyright-left">&copy;2022 AfroGem NFTs, All Rights Reserved.</div>
                                   
                                    <div className="copyright-right">Made with <i className="fas fa-heart"></i> by <a href="#">AfroGem Developers</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
    
           
            <div id="search" className="modal fade p-0">
                <div className="modal-dialog dialog-animated">
                    <div className="modal-content h-100">
                        <div className="modal-header" data-dismiss="modal">
                            Search <i className="far fa-times-circle icon-close"></i>
                        </div>
                        <div className="modal-body">
                            <form className="row">
                                <div className="col-12 align-self-center">
                                    <div className="row">
                                        <div className="col-12 pb-3">
                                            <h2 className="search-title mt-0 mb-3">What are you looking for?</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 input-group mt-4">
                                            <input type="text" placeholder="Enter your keywords"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 input-group align-self-center">
                                            <button className="btn btn-bordered-white mt-3">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
    
            
            <div id="menu" className="modal fade p-0">
                <div className="modal-dialog dialog-animated">
                    <div className="modal-content h-100">
                        <div className="modal-header" data-dismiss="modal">
                            Menu <i className="far fa-times-circle icon-close"></i>
                        </div>
                        <div className="menu modal-body">
                            <div className="row w-100">
                                <div className="items p-0 col-12 text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    
           
            <div id="scroll-to-top" className="scroll-to-top">
                <a href="#header" className="smooth-anchor">
                    <i className="fas fa-arrow-up"></i>
                </a>
            </div>
           
    
        </div>
       
        </>
    )
};
export default RealApp ;