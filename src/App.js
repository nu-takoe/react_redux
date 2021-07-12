import InputIncrease from './components/InputIncrease';
import Counter from './components/Counter';
import OtherButtons from './components/OtherButtons';
import FetchImage from './components/FetchImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <InputIncrease />
        <Counter />
        <OtherButtons />
      </div>
      <div className='fetch-pic'>
        <FetchImage />
      </div>
    </div>
  );
}

export default App;
