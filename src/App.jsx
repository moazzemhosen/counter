// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import { Category } from './components/Category';


// function App() {
//   const navbar = [
//     { image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100", title: "Mobile" },
//     { image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100", title: "Grocery" },
//     { image: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100", title: "Electronics" },
//     { image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100", title: "Top Offers" }
//   ];

//   return (
//     <div className='nav'>
//       {navbar.map(el => <Category image={el.image} label={el.title} />)}


//     </div>
//   );
// }

// Event Listner
import './App.css';
function App() {
  const navbar = [
    { image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100", title: "Mobile" },
    { image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100", title: "Grocery" },
    { image: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100", title: "Electronics" },
    { image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100", title: "Top Offers" }
  ];
  const [counter, setCounter] = useState(0)
  const inc = () => {
    // console.log("yes")
    setCounter(counter + 1)
  }
  const dec = () => {
    // console.log("no")
    setCounter(counter - 1)
  }
  return (


    <div>
      <div className='nav'>
        {navbar.map(el => <Category image={el.image} label={el.title} />)}
      </div>
      
      total count:{counter} ;
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>decrement</button>
    </div>
  )
}

export default App;






// export default App;
