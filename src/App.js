import logo from './logo.svg';
import './App.css';
import { MyApp } from './MyApp';
import { MyProvider } from './MyProvider';
import { MyConsumerWithHook } from './MyConsumerWithHook';
import { MyComponent } from './AppWithUseReducer';

function App() {
      return (
            <div className="App">
                  <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                              Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                              className="App-link"
                              href="https://reactjs.org"
                              target="_blank"
                              rel="noopener noreferrer"
                        >
                              Learn React
                        </a>
                  </header>
                  <MyProvider>
                        <MyApp />
                        <MyConsumerWithHook />
                  </MyProvider>
                  <MyComponent />
            </div>
      );
}

export default App;
