import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Chatbot from 'react-chatbot-kit';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import logo from './logo.svg';
import config from './chatbot/chatBotConfig';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import './App.css';
const useStyles = makeStyles(() => ({
  spinner: {
    height: '100vh',
  },
  chatBotOutline: {
    margin: '40px 0',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    right: '40px',
    bottom: '55px',
    zIndex: 9999,
    boxShadow: '5px 5px 13px rgba(91, 81, 81, 0.4)',
    borderRadius: '5px',
  },
  chatBotButton: {
    width: '60px',
    height: '60px',
    borderRadius: '30px',
    padding: '10px',
    color: '#fff',
    backgroundColor: '#0d2d44',
    border: 'none',
    position: 'fixed',
    bottom: '25px',
    zIndex: 9999,
    right: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.6s ease-in-out',
  },
  chatBotIcon: {
    fill: '#fff',
  },
}));
function App() {
  const { spinner, chatBotOutline, chatBotButton, chatBotIcon } = useStyles();
  const [showBot, toggleBot] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {showBot && (
        <Fade big>
          <div className={chatBotOutline}>
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
          </div>
        </Fade>
      )}
      <Flip left cascade>
        <button className={chatBotButton} onClick={() => toggleBot((prev) => !prev)}>
          <div>Bot</div>
          <svg viewBox="0 0 640 512" className={chatBotIcon}>
            <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z" />
          </svg>
        </button>
      </Flip>
      </header>
    </div>
  );
}

export default App;
