import React from 'react';
import AppNavigator from './AppNavigator';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  return(

<I18nextProvider i18n={i18n}>
  <AppNavigator />;
  </I18nextProvider>

) 
};
export default App;








