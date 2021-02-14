import {useState, useEffect} from 'react';
import barton_springs from './assets/barton_springs.jpg';
import barton_springs_2 from './assets/barton_springs_2.jpg';
import bed_1 from './assets/bed_1.jpg';
import bed_2 from './assets/bed_2.jpg';
import covey_move from './assets/covey_move.jpg';
import eat_ass from './assets/eat_ass.jpg';
import fall_pee from './assets/fall_pee.JPG';
import grump from './assets/grump.jpg';
import kiss from './assets/kiss.jpg';
import kiss_christmas from './assets/kiss_christmas.jpg';
import luke_birthday from './assets/luke_birthday.jpg';
import miami_1 from './assets/miami_1.jpg';
import miami_date from './assets/miami_date.jpg';
import palm_springs_tongue from './assets/palm_springs_tongue.JPG';
import san_clemente from './assets/san_clemente.jpg';
import tennis from './assets/tennis.jpg';

import ambien_trip from './assets/ambien_trip.jpg';
import brooke_birthday from './assets/brooke_birthday.jpg';
import brooke_glasses from './assets/brooke_glasses.jpg';
import brooke_naked_work from './assets/brooke_naked_work.jpg';
import covey_repair from './assets/covey_repair.jpg';
import dogs from './assets/dogs.jpg';
import drive_in from './assets/drive_in.jpg';
import furniture_shopping from './assets/furniture_shopping.jpg';
import golf from './assets/golf.jpg';

import smith_morehouse from './assets/smith_morehouse.jpg';

import './App.css';

const images = [
  {
    img: brooke_birthday,
    text:
      'This was such a fun day. I loved that you loved that day, and shared your bday with me. I also loved slamming around utah lake in a jet ski.',
  },
  {
    img: golf,
    text:
      'You were the cutest and most fun playing golf (drinking white claws and driving the cart). You were wild, smiling, laughing, and I loved that day with you. ',
  },
  {
    img: brooke_glasses,
    text:
      'Another night when you were really happy, and goofy. Remember shooting the nerf gun against the glasses?',
  },
  {
    img: smith_morehouse,
    text: 'We had so many fun summer activities like this one. You are my #1 adventure partner.'
  },
  {
    img: barton_springs_2,
    text:
      'Barton springs was one of the highlights of texas with you. You looked great, the water was relaxing, and it was just a really special moment to experience the springs for the first time with you.',
  },
  {
    img: bed_1,
    text:
      'I dont remember exactly when this was, but I love going to sleep with you. Lying in bed with you while talking and cuddling is one of my favorite things.',
  },
  {
    img: covey_repair,
    text:
      'You were patient with me as I tried so hard to fix your apartment. In the end we got it and you kept saying how cute I looked this day which made me feel really good.',
  },
  {
    img: bed_2,
    text: 'You fell asleep like this! So fucking cute.',
  },
  {
    img: covey_move,
    text:
      'Im here to support you through thick and thin, brooke. This was a really hard time for you feeling unsafe, but we got through it together. I admire you for getting out of there and arguing like a Bingham HS debate champ to break your lease.',
  },
  {
    img: barton_springs,
    text:
      'I love being goofy with you. You have really got me more into taking photos and Im grateful for that too. Idk why but I just like this one.',
  },
  {
    img: eat_ass,
    text:
      'I might have got banned from eating ass but at least i have a pic to document it while it lasted.',
  },
  {
    img: furniture_shopping,
    text:
      'I had so much fun with you this day and I couldnt stop staring at you; you were the most beautiful girl in the whole furniture shop. Even that cute worker guy was flirting with you :)',
  },
  {
    img: fall_pee,
    text: 'We laughed so much we both peed our pants. Need I say more.',
  },
  {
    img: grump,
    text:
      'Sometimes you are a grump. But I still have a major soft spot for you when youre grumpin.',
  },
  {
    img: kiss,
    text:
      'I love this pic. This was just a chill day and even though it was a paddle board fail I loved hanging with you and the girls.',
  },
  {
    img: ambien_trip,
    text: 'LOL AMBIEN',
  },
  {
    img: kiss_christmas,
    text:
      'This is one of my favorites. I was so excited you brought over mistletoe. That was a fun party and you helped me not stress so much and make it fun.',
  },
  {
    img: drive_in,
    text:
      'Man. This was such a fun date but also my heart was hurting because I wanted you to be my gf and I wasnt sure if it was going to happen or not. Also was this the time your car died? LOL',
  },
  {
    img: luke_birthday,
    text:
      'You made my bday in palm springs so special. I was being a butt about what I wanted, but you made it perfect.',
  },
  {
    img: miami_1,
    text:
      'We just got back from Miami and it was such a good trip. I loved playing in the water with you, looking at sea life, getting in trouble for getting sand in your suit. the usual <3 ',
  },
  {
    img: brooke_naked_work,
    text:
      'I think we had morning sex and then you just went to work naked hahaha.',
  },
  {
    img: miami_date,
    text:
      'I didnt think this date turned out so good, but you were so sweet saying how nice it was, it made me feel good. I love picnicing with you.',
  },
  {
    img: palm_springs_tongue,
    text:
      'This trip was mostly magical because of you. Looking at these photos it feels like a really good dream.',
  },
  {
    img: san_clemente,
    text:
      'We were so happy and relaxed walking along the beach boardwalk. I really felt close to you as we people watched, held hands, and looked at the water.',
  },
  {
    img: tennis,
    text:
      'You appeased me and played tennis, and we actually had fun! Thank you for being willing to try new stuff with me.',
  },
  {
    img: dogs,
    text:
      'Little Chihuahua in front, Big Bulldog in the back. I love being your partner and I like that we look out for each other. You got the bark and I got the bite. Love you.',
  },
];

function App() {
  const [imageToShowDetails, setImageToShowDetails] = useState('');

  return (
    <div className="App">
      <div className="header">
        <h1>Happy Valentines, Brooke</h1>
        <p>
          Here are some of my favorite photos and memories of the last 8 months
          of dating you. Love you!
        </p>
      </div>
      {images.map(i => (
        <div
          className="image-wrapper"
          style={{
            background: `url(${i.img}) 50% 50% no-repeat`,
            backgroundSize: 'cover',
          }}
          onClick={() => setImageToShowDetails(i)}>
          {imageToShowDetails === i && (
            <div
              style={{
                backgroundColor: 'white',
                opacity: '0.8',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <div style={{padding: '0px 10px'}}>{i.text}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
