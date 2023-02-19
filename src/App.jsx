import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <h1 className='titulo-principal'>¿Cuánto falta para el comienzo del próximo mundial?</h1>
      <Counter />
    </div>
  );
}

export default App;
