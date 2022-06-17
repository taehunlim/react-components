import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';

const Home = () => {
   useEffectOnce(() => {
      console.log("once")
   });

   return (
      <div>
         Home
      </div>
   );
};

export default Home;