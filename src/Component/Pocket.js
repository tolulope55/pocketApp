import React from 'react'
import pocketapp from '../img/pocketapp.PNG'
import download from '../img/download 1.png'
import Group from '../img/Group 111.png'
import Groupp from '../img/Group1.png'
import groupp from '../img/Groupp.png'
import Groupone from '../img/Group 11.png'
import Grouptwo from '../img/Group 2.png'
import youtube from '../img/youtube.jpg'
import screenshot from '../img/Screenshot 95.jpg'
import screenshott from '../img/Screenshot 9.jpg'
import box from '../img/box.png'
import Ssone from '../img/Ssone.jpg'
import sstwo from '../img/sstwo.jpg'
import ssthree from '../img/ssthree.jpg'
import ssfour from '../img/ssfour.jpg'
import ssfive from '../img/ssfive.jpg'
import sssix from '../img/sssix.jpg'
import ssseven from '../img/ssseven.jpg'

import appleee from '../img/appleee.png'
import googleplay from '../img/googleplay.png'
import googleplayy from '../img/googleplayy.png'

import footer from '../img/footer.png'

import './Pocket.css'

const PocketApp = () => {
  return (
    <div className='pocketApp'>
        <div className='home'>
            <div className='l-home'>
                <img src={pocketapp} alt='' className='pocketapp'/>
                <h1>Pay faster. Sell faster.</h1>
                <p className='mobile'>Join over 2 million people who buy sell, pay &
                 get paid with Pocket app. No commission
                 on any payments you receive.</p>
                 <p className='web'>Join over 2 million people who buy sell, pay &<br/>
                 get paid with Pocket app. No commission
                 on<br/> any payments you receive.</p>
                 <div className='col2'>
               <button type='button' className='btn' > <img src={appleee} alt='' className='icon'/>App store</button><br/>
               <button type='button' className='btn' > <img src={googleplayy} alt='' className='iconn'/>Google Play</button>
               </div>
                 <div className='col-1'>
                    <h4>Scan to<br/> Download<br/> Pocket<br/> App</h4>
                    
                    <img src={download} alt=''/>
                 </div>
                 <img src={Groupone} alt='' className='Groupone'/>
            </div>
            <div className='r-home'>
                <img src={Group} alt='' className='Group'/>
                
                
               
                <img src={Grouptwo} alt='' className='Grouptwo' />
                <img src={groupp} alt='' className='groupp'/>
                
            </div>
            
            </div>
          
            <div className='brands'>
              <p>TRUSTED BY 30,000+ MERCHANTS</p>
              <img src={screenshot} alt='' className='screeshot'/>
              <img src={screenshott} alt='' className='screenshot'/>
               <a href='https://youtu.be/SDW2-TFX7J0'>
                <img src={youtube} alt='' className='youtube' />
                </a>
              
              
            </div>
            <div className='section'>
              <div className='box'>
              <nav>
                <button type='button' className="bn" href='#'> Payments</button>
                <button type='button' className="bn" href='#'> Shops</button>
                <button type='button' className="bn" href='#'> Groups</button>
                <button type='button' className="bn" href='#'> Cards</button>
              </nav>
              </div>
              
              <p>Send cash to people 
                and businesses in the quickest and most convenient way.</p>
             
              <div className='first_section'>
              <p className='para'>
                <h3>Pocket to Pocket (P2P)</h3>
                
                <p>No more credit alert delays. 
                Transfer money to<br/> anyone on Pocket 
                 App and they’ll get it<br/> immediately.</p>
                 </p>
                
                <img src={Ssone} alt='' />
                <p className='parago'>
                <h3>Pocket to Pocket <br/>(P2P)</h3>
                
                <p>No more credit alert delays. 
                Transfer money to<br/> anyone on Pocket 
                 App and they’ll get it<br/> immediately.</p>
                 </p>

              </div>
              <div className='first_section'>
                
                <p className='para'>
                <h3>Fast Bank Transfers</h3>
                
                <p>Send money to any bank in Nigeria very quickly.</p>
                </p>
                 <img src={sstwo} alt='' className='para'/>

              </div>
              <div className='first_section'>
                
                <p className='parago'>
                <h3>Fast Bank <br/>Transfers</h3>
                
                <p>Send money to any bank in Nigeria very quickly.</p>
                 </p>
                 <img src={sstwo} alt='' className='parago'/>

              </div>
              <div className='first_section'>
              <p className='para'>
                <h3>Badges</h3>
                
                <p>Collect your “Thank yous” 
                  like infinity stones when you send
                   money <br/>on PocketApp</p>
                 </p>
                <img src={ssthree} alt='' />
                <p className='parago'>
                <h3>Badges</h3>
                
                <p>Collect your “Thank yous” 
                  like infinity stones when<br/> you send
                   money on PocketApp</p>
                 </p>

              </div>
              <div className='first_section'>
               
                <p className='par'>
                <h3>Pay Bills</h3>
                
                <p>Never get disconnected. Find and settle 
                  all your <br/>bills in one place</p>
                 </p>
                  <img src={ssfour} alt='' />

              </div>
              <div className='first_section'>
              <p className='para'>
               <h3>Pay on the go</h3>
               
               <p>Pay with your Pocket App at every new 
                spot you <br/>visit everyday</p>
                </p>
               <img src={ssfive} alt='' />
               <p className='parago'>
               <h3>Pay on the go</h3>
               
               <p>Pay with your Pocket App at every new 
                spot you visit everyday</p>
                </p>
             </div>
             <div className='first_section'>
               <p className='par'>
               <h3>Pay securely</h3>
               
               <p>Your funds are always protected with 
                escrow when <br/>you shop on PocketApp</p>
                </p>
                <img src={sssix} alt='' />
             </div>
             <div className='first_section'>
             <p className='para'>
            
            <h3>Giveaways</h3>
            
            <p>Automatically disburse money to up
              to 100 people <br/>equally at random 
              or within your circle of friends.</p>
             </p>
             <img src={ssseven} alt='' />
               <p className='parago'>
            
               <h3>Giveaways</h3>
               
               <p>Automatically disburse money to up
                 to 100 people <br/>equally at random 
                 or within your circle of friends.</p>
                </p>
                
             </div>
            </div>
            <div className='second_section'>
             
               <div className='boxx'>
               <h1>Download the app</h1>
               <p>Join about 2 million people who buy sell, pay & 
               get paid with Pocket<br/>
               app. No commission on any payments you receive.</p>
               <div className='thebtn'>
               <button type='button' className='btn' > <img src={appleee} alt='' className='icon'/>App store</button>
               <button type='button' className='btn' > <img src={googleplayy} alt='' className='iconn'/>Google Play</button>
               </div>
              

               </div>
               <div className='col3'>
                  
                 </div>
           
              
              <img src={footer} alt='' className='footer'/>
            </div>
      
        
      
      
    </div>
  )
}

export default PocketApp
