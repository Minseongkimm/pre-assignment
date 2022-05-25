// import { useEffect } from 'react';

//url, 토큰 환경변수로 빼기

const fetchedData = fetch(
  'https://api.json-generator.com/templates/ePNAVU1sgGtQ/data',
  {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj',
    },
  }
)
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log('fetchdata', fetchedData);

const Datatest = () => {
  return <>{fetchedData}</>;
};

export default Datatest;
