import { useState, useRef, useEffect } from 'react';
import './MoodSongs.css';

const MoodSongs = ({ Songs }) => {
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRef = useRef(null);

  const handlePlayPause = (index) => {
    if (isPlaying === index) {
      audioRef.current.pause();
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };

  useEffect(() => {
    if (isPlaying !== null) {
      audioRef.current.src = Songs[isPlaying].url || Songs[isPlaying].audio;
      audioRef.current.play();
    }
  }, [isPlaying, Songs]);

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>

      {/* Hidden audio element */}
      <audio ref={audioRef} style={{ display: 'none' }} />

      {Songs.map((song, index) => (
        <div className='song' key={index}>
          <div className='title'>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className='play-pause-button'>
            <button onClick={() => handlePlayPause(index)}>
              {isPlaying === index ? (
                <i className='ri-pause-line'></i>
              ) : (
                <i className='ri-play-circle-fill'></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
