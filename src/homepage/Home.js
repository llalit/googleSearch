import React,{useState} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import MicIcon from '@material-ui/icons/Mic';
import {Avatar} from '@material-ui/core';
import Search from '../searchPages/Search';
function Home() {

  return(
    <>
      <div  className="home">
        <div className="home__header">
            <div className="home__headerLeft">
                <Link to='/search'>Store</Link>
                <Link to='/about'>About</Link>
                </div>

                <div className="home__headerRight">
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Images</Link>
                <AppsIcon />
                <Avatar />
            </div>
          </div>


          <div className="home__body">
                <img title="image-google" src={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'} />



          <div className="home__inputContainer">
                <Search  />
        
        </div>
      </div>
    </div>
    </>
  )
}
export default Home;
