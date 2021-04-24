import { Player } from '../components/Player';
import { Header } from '../components/Header';
import styles from '../styles/app.module.scss';
import '../styles/global.scss';
import { PlayerContext } from '../contexts/PlayerContext';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [episodeList, setEpidosdeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  
  function play(episode) {
    setEpidosdeList([episode]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play }}>
      <div className={styles.appWrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>    
  ) 
}

export default MyApp
