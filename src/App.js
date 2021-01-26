import './App.css';
import Home from './view/pages/home/Home'
import ContactContextProvider from './stores/contact/ContactContext'
import ChatContextProvider from './stores/chat/ChatContext'

function App() {



  return (
    <ContactContextProvider>
      <ChatContextProvider>
        <Home/>
      </ChatContextProvider>
    </ContactContextProvider>
  );
}

export default App;
