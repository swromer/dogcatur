import React, { useEffect, useState } from 'react'
import logo from './dogcaturga_logo.png';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';

import './App.css';
import '@aws-amplify/ui-react/styles.css';

import awsConfig from './aws-exports';

//import { createUser, updateUser, deleteUser } from './graphql/mutations'
//import { listUsers } from './graphql/queries'

Amplify.configure(awsConfig);

/*const result = await API.graphql(graphqlOperation(createUser, {
  input: {
    name: 'Scott Romer'
  }
}))

const usersResult = await API.graphql(graphqlOperation(listUsers))
console.log(result)
*/

function App({signOut, user}) {
  return (
    <div className="App">
        <Heading level={1}>Hello {user.username}</Heading>
        <Button onClick={signOut}>Sign out</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Woof woof!
          </p>
        </header>
    </div>
  );
}

export default withAuthenticator(App);
