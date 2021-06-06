import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs'



function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1 style={{textAlign: 'center'}}>Search By</h1>
          <br />
          <Tabs />
          
          

        </div>

      </div>
    </div>
  );
}

export default App;
