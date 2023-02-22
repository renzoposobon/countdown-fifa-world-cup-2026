import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import Map from './components/Map';
import audio from "./assets/arhbo.aac"

function App() {
  return (
    <div className="App">
      {/* <audio src={process.env.PUBLIC_URL + audio} preload='auto' autoPlay={true} controls className='audio'></audio> */}
      <div className='inicio'>
        <audio src={process.env.PUBLIC_URL + audio} preload='auto' autoPlay={true} controls className='audio'></audio>
        <h1 className='titulo-principal'>¿Cuánto falta para el comienzo del próximo Mundial de fútbol?</h1>
        <Counter />
      </div>
      <Map />
    </div>
  );
}

export default App;
