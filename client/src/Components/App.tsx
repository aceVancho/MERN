import { connectReduxDevtools } from 'mst-middlewares';

import '../App.css';
import { rootStore } from '../Models/rootStore';

const remotedev = require('remotedev');


// Connect DEV TOOLS
connectReduxDevtools(remotedev, rootStore);

function App() {
  return (
    <div className="App">
      Words
    </div>
  );
}

export default App;
