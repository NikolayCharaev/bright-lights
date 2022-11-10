import './styles/style.scss';
import Header from './components/header/Header';
import News from './components/news/News';
import Company from './components/company/Company';
import Quote from './components/quote/Quote';
import LastTracks from './components/tracks/LastTracks';
import Album from './components/album/Album';
function App() {
  return (
    <>
      <Header />
      <News />
      <Company/>
      <Quote/>
      <LastTracks/>
      <Album/>
    </>
  );
}

export default App;
