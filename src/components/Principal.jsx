import React from 'react';
import Header from '../components/Header';
import facebook from '../assets/static/images/social-network/twitter-color.svg';
import '../assets/styles/components/Principal.scss';


const Principal = () => (
    <section className="principal">

        <div id="loader" class="loading">
            <div class="loading-logo"></div>
        </div>

        <div className="overlay__principal">
        <Header/>
        <div className="container__principal col-1">

        <div class="content">
            <div class="glitch">
                <div class="glitchit"></div>
                <div class="glitchit"></div>
                <div class="glitchit"></div>
                <div class="glitchit"></div>
                <div class="glitchit"></div>
            </div>

        <div className="social-network__principal">
            <ol className="icons">
                <li class="icon" >
                    <img src={facebook}/>
                </li> 
                <li class="icon" >
                    <img src={facebook}/>
                </li> 
                <li class="icon" >
                    <img src={facebook}/>
                </li> 
                <li class="icon" >
                    <img src={facebook}/>
                </li> 
            </ol>
        </div>    
        
        <div class="contentSection">
                <div class="">

                    <h1 class="title__principal contentTitle">
                        ARE YOU READY <br/> TO BECOME A <br/> BETTER PLAYER?_
                    </h1>

                    <p class="paragraph__principal contentText">Safe and Reliable LoL Boosting, Coaching & <br/> Account Buying Services
                        in Season 9</p>
                    <div class="btn__principal">
                        <button class="btn__primary margin">
                            Boost Me
                        </button>
                        <button class="btn btn__secondary ">
                            View Packs
                        </button>
                    </div>
                </div>

        </div>
    </div>

    
</div>

<figure className="scroll__principal col-11">
    <img src="./static/images/scroll.svg" alt=""/>
</figure>
</div>
</section>
)
export default Principal;