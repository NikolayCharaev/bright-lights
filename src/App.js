import './styles/style.scss';
import Header from './components/header/Header';
import News from './components/news/News';
import Company from './components/company/Company';
import Quote from './components/quote/Quote';

function App() {
  return (
    <>
      <Header />
      <News />
      <Company/>
      <Quote/>
    </>
  );
}

export default App;
