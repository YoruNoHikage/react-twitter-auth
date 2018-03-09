import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';

class App extends Component {

  constructor() {
    super();

    this.callback = this.callback.bind(this);
  }

  callback(oAuthVerifier, oauthToken) {
    return window.fetch(`${this.props.loginUrl}?oauth_verifier=${oAuthVerifier}&oauth_token=${oauthToken}`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      response.json().then(body => {
        alert(JSON.stringify(body));
      });
    }).catch(error => {
      alert(error);
    });
  }

  render() {
    const customHeader = {};
    customHeader['Test'] = 'test-header';
    return (
      <div>
        <TwitterLogin
          requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
          callback={this.callback}
          showIcon
          customHeaders={customHeader}
        />

        <TwitterLogin
          requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
          callback={this.callback}
          customHeaders={customHeader}
          render={renderProps => (
            <button onClick={renderProps.onClick}>Custom sign in with Twitter</button>
          )}
        />
      </div>
    );
  }
}

export default App;
