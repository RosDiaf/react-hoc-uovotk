import React, { Component, Fragment } from 'react'

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    if(this.props.data instanceof Object){
       this.props.data
        .then((response) => {
          console.log(response)
          this.setState({
            data: response
          })
      })
    }
  }
  render() {
    return(
      <Fragment>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <th>ID</th>
              <th>Author</th>
              <th>Resource</th>
              <th>Url</th>
            </thead>
            <tbody>
              {this.state.data ? 
                this.state.data.data.list.map((subitem,i) => {
                  return (
                    <tr key={i}>
                      <td>{subitem.author.id}</td>
                      <td >{subitem.author.name}</td>
                      <td>{subitem.author.resource}</td>
                      <td><a href={subitem.author.uri} target="_blank">Url</a></td>
                    </tr>
                  )
              } ) : null }
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default Page;