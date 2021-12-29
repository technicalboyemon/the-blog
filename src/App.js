import './App.css';
import { Emon } from './Components/Emon';

function App() {
  const e = "Developer";
  var ea = "Full stack"
  return (
    <>
      <div className="h">
        Emon Ahmed {ea}
      </div>
      <Emon />
    </>
  );
}

export default App;
