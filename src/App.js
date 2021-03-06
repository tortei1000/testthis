import React from 'react';

import {Provider} from 'react-redux'
import store from './ducks/store'
import {HashRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './routes'


function App() {
 return (
   <Provider store={store}>
     <HashRouter>
       <Navbar />
       {routes}
       
     </HashRouter>
   </Provider>
 );
}

export default App;