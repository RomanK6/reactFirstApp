import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import Login from './components/Login/Login';
import React, { Suspense } from 'react';
import {initializeApp} from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './components/common/withRouter/withRouter';
import Preloader from './components/common/Preloader/Preloader';
// SamuraiJSApp
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
// React.lazy
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


/*
const App = (props) => {
  return (

      <div className="App">
        <HeaderContainer />
        <Sidebar />
        <Routes>
          <Route path='/profile' element={<ProfileContainer/>}>
            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
          </Route>
          <Route path='/dialogs/*' element={
            <DialogsContainer/>
          } />
          <Route path='/news' element={<News />}/>
          <Route path='/friends' element={<Friends />}/>
          <Route path='/users' element={<UsersContainer />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
    
  )
}*/

class App extends React.Component {
  componentDidMount () {
    this.props.initializeApp()
}
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      
      <div className="App">
        <HeaderContainer />
        <Sidebar />
        <Suspense fallback={<Preloader />} >
          <Routes>
            <Route path='/profile' element={<ProfileContainer/>}>
              <Route path='/profile/:userId' element={<ProfileContainer/>}/>
            </Route>
            <Route path='/dialogs/*' element={
              <DialogsContainer/>
            } />
            <Route path='/news' element={<News />}/>
            <Route path='/friends' element={<Friends />}/>
            <Route path='/users' element={<UsersContainer />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </Suspense>
        
        
      </div>
    
  )
  }

}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
  )(App);

let SamuraiJSApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;
/*
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
  )(App);
  */