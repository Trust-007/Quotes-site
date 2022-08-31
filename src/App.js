import { Route, Redirect, Switch } from 'react-router-dom';

import AllQuote from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';




function App() {
  
   

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='quotes'/>
        </Route>
        <Route path='/quotes' exact>
          <AllQuote />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail/>
        </Route>
        <Route path='/add-quotes'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch> 
     </Layout> 
    
  );
}

export default App;
