import search from '../../shared/images/search.png';
import './home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [mobile, setMobile] = useState(
    Math.min(window.screen.width, window.screen.height)
  );

  const [city, setCity] = useState('');

  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div className="box" style={{ background: 'green', height: '100%' }}>
      <div
        className="h"
        style={{
          textAlign: 'center',
          height: '100%',
          color: 'white',
          verticalAlign: 'middle',
          paddingTop: '40vh',
        }}
      >
        <h1>Weather App</h1>
        <input
          type="text"
          name="city"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            padding: '10px',
            margin: '10px',
            borderRadius: '10px',
            width: '400px',
            border: '1px solid #eee',
          }}
        />
        {mobile > 768 && (
          <img
            style={{
              width: '35px',
              position: 'absolute',
              right: '38%',
              top: '46%',
              margin: '3px',
            }}
            src={search}
          />
        )}

        {mobile < 768 && (
          <img
            style={{
              width: '35px',
              position: 'absolute',
              right: '0%',
              top: '46%',
              margin: '3px',
            }}
            src={search}
          />
        )}
      </div>
    </div>
  );
}
