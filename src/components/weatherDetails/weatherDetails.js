import './weatherDetails.css';
import { useEffect, useState } from 'react';
import MainCard from '../../shared/components/MainCard';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import useHttp from '../../hooks/useHttp';
import back from '../../shared/images/back.png';
import { dates, getIconUrl } from '../../shared/utils';

export default function WeatherDetails() {
  const { city } = useParams();
  const { sendRequest } = useHttp();
  const navigate = useNavigate();

  const [current, setCurrent] = useState({});
  const [todayData, setTodayData] = useState({});
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await sendRequest(`weather/${city}`);
    setData(response.data);
    setCurrent(response.data.daily[0]);
    setTodayData(response.data.daily[0]);
    console.log(response.data.current);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (d) => {
    if (current.dt !== d.dt) {
      setCurrent({ ...d });
    } else {
      setCurrent({ ...todayData });
    }
  };

  return (
    <>
      <img
        src={back}
        width="40px"
        style={{ margin: 5 }}
        onClick={() => navigate(-1)}
      />
      <div class="row">
        <div class="col-4 col-s-12">
          <div style={{ position: 'absolute', bottom: 20 }}>
            {data?.current && <MainCard current={current} />}
          </div>
        </div>

        <div class="col-5 col-s-9"></div>

        <div class="col-3 col-s-3 menu">
          <ul>
            {data?.daily.map((d) => (
              <li onClick={() => handleClick(d)} key={d.dt}>
                <div>
                  <img src={getIconUrl(d?.weather[0]?.icon)} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p>{dates[new Date(d.dt * 1000).getDay()]}</p>
                  <p>{new Date(d.dt * 1000).getDate()}</p>
                </div>
                <b>{d?.temp?.day}°C</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
