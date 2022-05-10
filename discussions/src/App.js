import logo from './logo.svg';
import './App.css';
import User from './componets/class';
import ColorChange from './Hooks/useState';
import Person from './Hooks/hookObject';

function App() {
  return (
    <div className="App">      
        <User />
        <ColorChange />
        <Person />
    </div>
  );
}
export default App;