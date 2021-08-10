import './App.css';
import Routes from './routes';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div className="App">
      <Menu/>
      {Routes}
     
    </div>
  );
}

export default App;
