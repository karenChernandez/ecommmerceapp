import HomePage from './components/HomePage/HomePage';
import GallaryPage from './components/GallaryPage/GallaryPage';
import FormPage from './components/FormPage/FormPage';
import ContactPage from './components/ContactPage/ContactPage';
import{Switch, Route} from 'react-router-dom';

export default (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/GallaryPage' component={GallaryPage}/>
            <Route exact path='/FormPage' component={FormPage}/>
            <Route exact path='/ContactPage' component={ContactPage}/>
        </Switch>
    );

