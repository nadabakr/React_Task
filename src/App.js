import './style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  RouterProvider,
} from "react-router-dom";
import router from './core/router';
import { Suspense, useState } from 'react';
import i18n from './i18n/i18n';
import LocaleContext from './LocaleContext';

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense>
        <div className='req-body'>
          <RouterProvider router={router} />
        </div>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
