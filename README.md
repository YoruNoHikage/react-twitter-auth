[![NPM](https://nodei.co/npm/react-twitter-auth.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-twitter-auth/)

[![npm version](https://badge.fury.io/js/react-twitter-auth.svg)](https://badge.fury.io/js/react-twitter-auth)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

# React Twitter Authentication Component

> A React Twitter oAUth Sign-in / Log-in Component for React

**This component has been modified to only fulfill the first step as I needed the second step to be performed through a GraphQL query. If you're looking for a complete step with REST endpoints call, check [react-twitter-auth](https://github.com/GenFirst/react-twitter-auth) or look at the example.**

## Installation

`npm install react-twitter-auth`

## Usage

```jsx harmony
<TwitterLogin
  requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
  callback={this.callback}
/>
```

Custom content that overrides default content:

```jsx harmony
 <TwitterLogin
  requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
  callback={this.callback}
  render={renderProps => (
    <button onClick={renderProps.onClick}>Custom sign in with Twitter</button>
  )}
/>
```

## Options

| params          | value  | default value       | description                                                                   |
|:---------------:|:------:|:-------------------:|:-----------------------------------------------------------------------------:|
| tag             |string  |button               |tag that should be used to create element that will be used as loging element  |
| text            |string  |Sign in with Twitter |text that will be shown in component                                           |
| loginUrl        |string  |                     |URL that will be used to finish 3rd step of authentication process             |
| requestTokenUrl |string  |                     |URL that will be used to get request token                                     |
| callback        |function|                     |function that will be called with the oauth token and the verifier             |
| disabled        |boolean |false                |disable component                                                              |
| style           |object  |                     |style object                                                                   |
| className       |string  |                     |class name for component                                                       |
| dialogWidth     |number  |600                  |dialog width                                                                   |
| dialogHeight    |number  |400                  |dialog height                                                                  |
| showIcon        |bool    |true                 |should default icon be visible                                                 |
| credentials     |string  |same-origin          |indicates whether the user agent should send cookies from the other domain in the case of cross-origin requests. Possible values: `omit`, `same-origin`, `include`|
| customHeaders   |object  |{}                   |custom headers should be object with fields that needs to be sent to user server. Field name will be used as header key and field value as header value. Because of bug in fetch implementation all keys will be lowercase.|
| render          |func    |                     |this props can be used in order to override default component content|

# Examples

Full example can be found in [example](https://github.com/YoruNoHikage/react-twitter-auth/tree/master/example) folder.

You can find tutorial that explains in details how to implement Twitter authentication with RESTful backend [here](https://medium.com/@robince885/how-to-do-twitter-authentication-with-react-and-restful-api-e525f30c62bb).

# Workflow

The detailed explanation of the whole process can be found in Twitter documentation. In picture below you can find out all the steps that are needed.

![Twitter authentication workflow](https://cdn-images-1.medium.com/max/800/1*RTsSRbVeEzPaC68hRT8n2g.png)

# License

react-twitter-auth is released under [MIT License](https://opensource.org/licenses/MIT).
