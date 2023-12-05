import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component{
  state = {activeId : countryAndCapitalsList[0].id}
  changeCapital = (event) => {
    this.setState({activeId:event.target.value})
  }
  getCountry = () => {
    const {activeId} = this.state
    const findCountry = countryAndCapitalsList.find(every => 
      every.id===activeId
    )
    return findCountry.country
  }
  render(){
    const {activeId} = this.state
    const country = this.getCountry(activeId)
    return(
      <div className="bg-container">
      <div className="card">
      <h1 className="head">
      Countries And Capitals
      </h1>
      <select onChange={this.changeCapital} className="con" value={activeId}>
      {
        countryAndCapitalsList.map(each => (
        <option key={each.id} value={each.id} className="capital">
        {each.capitalDisplayText}
        </option>
      ))
      }
      </select>
      <p className="para">is capital of which country?</p>
      <p className="country">{country}</p>
      </div>
      </div>
    )
  }
}
export default Capitals 