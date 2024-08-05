import { useState } from 'react';
import './App.css';
import data from './data'
import Tours from './components/Tours'

function App() {

  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id!==id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return(
      <div>
        <h2>No Tours left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }
  return(
    <div>
      <div>
        <nav className="px-14 py-2  bg-violet-600 text-white justify-between flex">
          <span onclick="landing.html" className="font-bold text-xl cursor-pointer">ToursMania</span>
          <ul className="flex justify-end space-x-11">
            <li className="cursor-pointer text-[18px]">Home</li>
            <li className="cursor-pointer text-[18px]">About</li>
            <li className="cursor-pointer text-[18px]">Catalogue</li>
            <li className="cursor-pointer text-[18px]">Contact Us</li>
          </ul>
        </nav>
      </div>
      <div><Tours tours={tours} removeTour={removeTour}></Tours></div>
    </div>
    
  );
}

export default App;
