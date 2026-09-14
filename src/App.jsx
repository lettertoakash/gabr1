import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Welcome to my application</h1>
        <p>GitHub Actions practice successful</p>
      </header>
      <MainContent />
    </>
  );
}

export default App;
