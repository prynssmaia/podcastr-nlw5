import { createContext, useState, ReactNode } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean
    play: (episode: Episode) => void;
    playList: (list: Episode[], index: number) => void;
    togglePlay: () => void;
    playNext: () => void;
    playPrevious: () => void;
    setPlayingState: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
    children: ReactNode;
}

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
  const [episodeList, setEpidosdeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  
  function play(episode: Episode) {
    setEpidosdeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Episode[], index: number) {
    setEpidosdeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  function playNext() {
    const nextEpisodeIndex = currentEpisodeIndex + 1

    if (nextEpisodeIndex < episodeList.length) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  function playPrevious() {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        playList,
        isPlaying,
        playNext,
        playPrevious,
        togglePlay,
        setPlayingState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );                                  
}




