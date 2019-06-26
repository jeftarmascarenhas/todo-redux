import React, { Component } from 'react'

import peopleService from '../../services/peopleService'

class Request extends Component {
  state = {
    people: [],
    loading: false,
    page: 1,
  }

  componentDidMount() {
    this.getPeopleWithAsync()
  }

  getPeopleWithAsync = async () => {
    const { page, people } = this.state
    try {
      this.setState({ loading: true })
      const { data } = await peopleService.getPeopleAll(page)
      this.setState({
        people: [...people, ...data.results],
      })
    } catch (error) {
      console.log('catch: ', error)
    }
    this.setState({ loading: false })
  }

  peopleMore = () => {
    const { page } = this.state
    this.setState({ page: page + 1 }, () => {
      this.getPeopleWithAsync()
    })
  }

  getPeopleWithPromise = () => {
    this.setState({ loading: true })
    peopleService
      .getPeopleAll()
      .then(response => {
        console.log('response: ', response)
        this.setState({
          people: response.data.results,
          loading: false,
        })
      })
      .catch(error => {
        console.log('catch: ', error)
        this.setState({ loading: false })
      })
  }

  render() {
    const { people, loading } = this.state
    return (
      <div>
        <h1>Request</h1>
        {loading && <div>loading...</div>}
        <button onClick={this.peopleMore}>More</button>
        <ul>
          {!!people.length &&
            people.map((person, index) => {
              return <li key={index}>{person.name}</li>
            })}
        </ul>
      </div>
    )
  }
}

export default Request
