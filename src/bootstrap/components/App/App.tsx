import React from 'react';
import Header from '../Header/Header';import {
  HashRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import {Content} from '../../../modules/content/components/Content/Content'
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/*' element={<Content/>} />
          <Route path="*" element ={<NoMatch />}/>
        </Routes>      
    </div>
    </HashRouter>
  );
};

const NoMatch:React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <h3>
        404. No match for <code>{pathname}</code>
      </h3>
    </div>
  );
}
  
export default App;
