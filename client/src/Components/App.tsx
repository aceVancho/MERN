import { connectReduxDevtools } from 'mst-middlewares';
import '../App.css';
import { rootStore } from '../Models/rootStore';

// Connect DEV TOOLS
const remotedev = require('remotedev');
connectReduxDevtools(remotedev, rootStore);

function App() {
  return (
    <div className="App">
      Words
    </div>
  );
}

export default App;
