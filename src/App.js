import './App.css';
import Home from './view/pages/home/Home'
import ContactContextProvider from './stores/contact/ContactContext'

function App() {
  return (
    <ContactContextProvider>
      <Home/>
    </ContactContextProvider>
  );
}

export default App;
