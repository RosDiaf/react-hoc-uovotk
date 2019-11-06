import React, { Component, Fragment } from 'react'

class Wrapper extends React.Component {
  state = {
    isLoading: true,
    error: null,
    list: []
  };

  fetchData() {
    axios.get(this.props.link)
      .then((response) => {
        this.setState({
          list: response.data,
          isLoading: false
        });
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.setState({ isLoading: true }, this.fetchData);
  }

  render() {
    return this.props.render(this.state);
  }
}

export default Wrapper