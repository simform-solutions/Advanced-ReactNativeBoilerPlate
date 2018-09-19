#  React-Native Boiler Plate

[![js-eslint-style](https://img.shields.io/badge/lint%20compliance-eslint-brightgreen.svg?style=flat)](http://eslint.org/) [![js-airbnb-style](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript/)

* Extension of the [ignite react-native boiler plate](https://github.com/infinitered/ignite-ir-boilerplate-andross) using eslint and airbnb javascript compliant React Native App utilizing [Ignite](https://github.com/infinitered/ignite)
* We have used redux-persist along with redux-saga.

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Rename the project bundle id and package name:([react-native-rename](https://github.com/junedomingo/react-native-rename) is useful module sin this step)

**Step 4:** Install the Application with `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `npm run ios`
  * for Android
    * run `npm run android`
    * Use the sdk versions for any third party library you add as mentioned in Project/android/app/build.gradle. Since google forces to use target sdk 26 or onwards.

## :heavy_exclamation_mark: Eslint and Airbnb javascript Compliant :heavy_exclamation_mark:

This project adheres to Airbnb style guide. We have setup and enabled eslint for this project. We suggest that you keep following it.

**To Lint**

This is implemented using [eslint](https://eslint.org). Just run `npm run lint`

**To Fix Lint Errors**

run `npm run fixcode`

**Bypass Lint And Run Project**

If you have to bypass lint and just run the project for special case.
  * for iOS
    * run `react-native run-ios`
  * for Android
    * run `react-native run-android`

**Understanding Linting Errors**

The linting rules are from airbnb and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react). [Airbnb errors can be found here.](https://github.com/airbnb/javascript)
We have customised the linting as per our requirements. You can check the .eslintrc of the project and modify it as per your requirements.

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!
