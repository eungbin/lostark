import {  } from 'react';

export default function Main() {
  const accessToken = import.meta.env.VITE_API_KEY;

  fetch('https://developer-lostark.game.onstove.com/news/notices', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "authorization": "bearer " + accessToken
    }
  })
  .then(res => res.json())
  .then(res => console.log(res))

  return (
    <section className='w-full h-full'>
      
    </section>
  );
}