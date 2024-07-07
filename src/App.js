import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Product from './Pages/Product';
import Quotation from './Pages/Quotation';
import Invoice from './Pages/Invoice';
import Users from './Pages/Users';
import Customers from './Pages/Customers';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Search />
        <Routes>
          <Route exact path='/login' Component={Login} />
          <Route exact path='/' Component={Dashboard} />
          <Route exact path='/product' Component={Product} />
          <Route exact path='/quotation' Component={Quotation} />
          <Route exact path='/invoice' Component={Invoice} />
          <Route exact path='/users' Component={Users} />
          <Route exact path='/customes' Component={Customers} />
          {/* <Route exact path='/log' Component={Navbar} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
