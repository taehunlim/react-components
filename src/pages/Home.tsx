import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';

import useToggle from "../hooks/useToggle/useToggle";
import ToggleButton from "../components/ToggleButton/ToggleButton";

const Home = () => {
   useEffectOnce(() => {
      console.log("once")
   });

   const {state, toggle} = useToggle(false);

   return (
      <div>
         <button onClick={toggle}></button>
         {state ? "true" : "false"}

         <ToggleButton />
      </div>
   );
};

export default Home;