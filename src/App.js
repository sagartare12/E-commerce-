
import React from 'react'
import { Switch , Route } from 'react-router-dom'
import Category from './pages/Keyboard/Keyboard'
import   Mouse  from './pages/Headphones/Mouse'
import Home from './pages/Home'
import { ProductsProvider } from './context/products'
import { KeyboardGrid } from './pages/Keyboard/KeyboardGrid'
import { KeyboardMain } from './pages/Keyboard/KeyboardMain'

function App() {
  return (
    <div>
      <ProductsProvider>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/keyboard">
         
          <KeyboardMain />
        </Route>
        <Route path="/mouse">
          <Mouse />
        </Route>
        <Route>
          Error 404 page not found
        </Route>
      </Switch>
      </ProductsProvider>
      
    </div>
  );
}

export default App;
