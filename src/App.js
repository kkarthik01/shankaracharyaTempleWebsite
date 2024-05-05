import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import MoreInfo from './components/MoreInfo';
import PhotosContainer from './components/PhotosContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <PhotosContainer />
      <AboutUs />
      <MoreInfo />
      <ContactUs />
    </div>
  );
}

export default App;
