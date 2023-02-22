import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import Map from './components/Map';
import audio from "./assets/arhbo.aac"

function App() {
  return (
    <div className="App">
      <audio src={process.env.PUBLIC_URL + audio} preload='auto' autoPlay="true"></audio>
      {/* <Form /> */}
      <h1 className='titulo-principal'>¿Cuánto falta para el comienzo del próximo mundial?</h1>
      <Counter />
      <Map />
    </div>
  );
}

export default App;
