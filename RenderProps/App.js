import React, { Component, Fragment } from 'react'

const App = () => {
  return (
    <Wrapper
      link="https://jsonplaceholder.typicode.com/users"
      render={({ list, isLoading, error }) => (
        <div>
          <h2>Random Users</h2>
          {error ? <p>{error.message}</p> : null}
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <ul>{list.map(user => <li key={user.id}>{user.name}</li>)}</ul>
          )}
        </div>
      )}
    />
  );
}

export default App