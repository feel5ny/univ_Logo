import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import _ from 'lodash'
import { HOSTNAME } from '../config'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      results: [],
      value: '',
      univsList: [],
    }
  }
  componentDidMount = () => {
    fetch(`${HOSTNAME}/logoLists`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          univsList: data,
        })
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          errorState: true,
        })
      })
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.univsList, isMatch),
      })
    }, 500)
  }
  render() {
    const { isLoading, value, results } = this.state
    return (
      <Input
        style={{
          width: '300px',
          margin: '42px',
        }}
        placeholder="학교 이름을 검색하세요"
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        {...this.props}
      />
      // <div className="ui search">
      //   <div className="ui icon input">
      //     <input
      //       className="prompt"
      //       type="text"
      //       placeholder="학교 이름을 검색하세요"
      //     />
      //     <i className="search icon" />
      //   </div>
      //   <div className="results" />
      // </div>
    )
  }
}

export default SearchForm
