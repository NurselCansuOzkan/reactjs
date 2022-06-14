import './App.css';
import {useState, useEffect} from "react";
import {IntlProvider, FormattedMessage} from 'react-intl'

const messages = {
  "tr":{
    title:"Merhaba Dünya",
    description:"{count} yeni mesajınız var"

  },
  "en-US":{
    title:"Hello World",
    description:"{count} have new messages",
  }
}

function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale :navigator.language;
  // console.log(defaultLocale);
  const [locale, setLocale] = useState(defaultLocale);
  console.log(locale);

  useEffect(() => {
    localStorage.setItem("locale",locale);
  }, [locale]);
  return (
    <div className="App">
      <IntlProvider locale={locale}
      messages={messages[locale]}
      >
      <FormattedMessage id="title" />
      <p>
        <FormattedMessage id='description' values={{count:5}}></FormattedMessage>
      </p>

      <br/>
      <br/>
        <button onClick={()=> setLocale("tr")}>TR</button>
        <button onClick={()=>setLocale("en-US")}>EN</button>
      </IntlProvider>
      
    </div>
  );
}

export default App;
