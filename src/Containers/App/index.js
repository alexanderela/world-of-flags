<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
=======
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
>>>>>>> Add styling and logic to Axxount component
import Game from '../Game';
import Account from '../Account';
import Login from '../Login';
import './App.scss';
<<<<<<< HEAD
=======
import mockData from '../../mockData/mockData';
>>>>>>> Add styling and logic to Axxount component
import * as Fetch from '../../utilities/Fetch';
import { connect } from 'react-redux';
import { setCurrentCountry } from '../../actions/countryActions';
import { updateUsedCountries } from '../../actions/usedCountryActions';
<<<<<<< HEAD
import { getCurrentCountry } from '../../Thunks/countries.js';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super();
=======
import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Game from '../Game'
import Account from '../Account'
import Login from '../Login'
import './App.scss'
import mockData from '../../mockData/mockData'
import * as Fetch from '../../utilities/Fetch'
import { connect } from 'react-redux'
import { setCurrentCountry } from '../../actions/countryActions'
import { updateUsedCountries } from '../../actions/usedCountryActions'
import countryNames from '../../utilities/countryNames'
import { getCurrentCountry } from '../../Thunks/countries.js'
=======
import countryNames from '../../utilities/countryNames';
import { getCurrentCountry } from '../../Thunks/countries.js';
>>>>>>> Add styling and logic to Axxount component
// import allCountries from '../../utilities/allCountriesImagesObject.js'

export class App extends Component {
  constructor() {
<<<<<<< HEAD
    super()
    //i'd argue that we don't need any of this state if we are going to have redux
>>>>>>> Add styling for Account and login placeholders
=======
    super();
//i'd argue that we don't need any of this state if we are going to have redux
>>>>>>> Add styling and logic to Axxount component
    this.state = {
      totalPoints: 0
    };
  };

  componentDidMount() {
    this.getCountry()
  };

  getCountry = async () => {
    const { usedCountries, setCurrentCountry, updateUsedCountries } = this.props
<<<<<<< HEAD
<<<<<<< HEAD
    let randomNumber = Math.floor(Math.random() * (196 - 1) + 1);
    const currentCountry = await Fetch.fetchCorrectCountry(randomNumber, usedCountries);
    
=======
    let randomNumber = Math.floor(Math.random() * (196 - 1) + 1)
    const currentCountry = await Fetch.fetchCorrectCountry(
      randomNumber,
      usedCountries
    ) //sending this array to use in a check

>>>>>>> Add styling for Account and login placeholders
=======
    let randomNumber = Math.floor(Math.random() * (196 - 1) + 1);
    const currentCountry = await Fetch.fetchCorrectCountry(randomNumber, usedCountries); //sending this array to use in a check
    
>>>>>>> Add styling and logic to Axxount component
    setCurrentCountry(currentCountry)
    updateUsedCountries(currentCountry.name)
  }

//WHAT IS THIS FUNCTION DOING?  ALEX E
  compilePoints = (newPoints) => {
    const totalPoints = this.state.totalPoints + newPoints
    this.setState({ totalPoints });
  };

  render() {
<<<<<<< HEAD
<<<<<<< HEAD
    const { totalPoints } = this.state;
    const { user } = this.props
=======
    const { totalPoints, countryOptions, correctCountry } = this.state
    const { user } = this.props

>>>>>>> Add styling for Account and login placeholders
=======
    const { totalPoints, countryOptions, correctCountry} = this.state;
    const { user } = this.props
    
>>>>>>> Add styling and logic to Axxount component
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            if(user.loggedIn) {
              return <Game 
                compilePoints={this.compilePoints} 
                totalPoints={totalPoints}
                getCountry={this.getCountry}
                user={user}
              />
            } else {
                return <Login />
            }
          }}/>

          <Route exact path='/account' render={() => {
            return <Account totalPoints={totalPoints} />
          }} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = ({ user, currentCountry, usedCountries }) => ({ 
  user, 
  currentCountry, 
  usedCountries, 
});

export const mapDispatchToProps = (dispatch) => ({
  setCurrentCountry: country => dispatch(setCurrentCountry(country)),
  updateUsedCountries: country => dispatch(updateUsedCountries(country)),
  getCurrentCountry: (randomNumber, usedCountries) => dispatch(getCurrentCountry(randomNumber, usedCountries))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

<<<<<<< HEAD
<<<<<<< HEAD
App.propTypes = {
  user: PropTypes.object.isRequired,
  currentCountry: PropTypes.object.isRequired,
  usedCountries: PropTypes.array.isRequired,
  setCurrentCountry: PropTypes.func.isRequired,
  updateUsedCountries: PropTypes.func.isRequired,
  getCurrentCountry: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

=======
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
>>>>>>> Add styling for Account and login placeholders
=======
>>>>>>> Add styling and logic to Axxount component
