#  Advanced React-Native Boiler Plate

[![React Native](https://img.shields.io/badge/React%20Native-v0.57.8-blue.svg)](https://facebook.github.io/react-native/)
[![React Navigation V3](https://img.shields.io/badge/React%20Navigation-v3.0.9-blue.svg)](https://reactnavigation.org/)
[![js-eslint-style](https://img.shields.io/badge/lint%20compliance-eslint:recommended-brightgreen.svg?style=flat)](http://eslint.org/)

* This is an extension of the [ignite react-native boiler plate](https://github.com/infinitered/ignite-ir-boilerplate-andross). It uses eslint-recommended and utilizes [Ignite](https://github.com/infinitered/ignite)

* This is an advanced boilerplate which uses react-native, redux-saga, redux-persist, apisauce. It will be a very useful to kickstart your project if you are using these frameworks/librarirs. Or want to have some strict linting style.

* We have used [react-native-extended-stylesheet](https://github.com/vitalets/react-native-extended-stylesheet) in this project. Since every mobile application should be responsive even if we don't use flex-layout for all the styling in the application. Instead of using the StyleSheet provided by react-native, we recommend using the stylesheet provided by this library.

## Removed modules/libraries from the original [ignite react-native boiler plate](https://github.com/infinitered/ignite-ir-boilerplate-andross)

  * storybook
  * standard and snazzy linting guides
  * [react-native-i18](https://github.com/AlexanderZaytsev/react-native-i18n)


## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Rename the project bundleId, package name and application name.

**Step 4:** Install the Application with `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `npm run ios`
  * for Android
    * run `npm run android`
    * Use the sdk versions for any third party library you add as mentioned in Project/android/app/build.gradle. Since google forces to use target sdk 26 or onwards.

## <div style="display: flex;align-items: center;"><img src="https://eslint.org/img/logo.svg" width="35" title="eslint" style="vertical-align: middle;"> Eslint Compliant</div>

This project adheres to "eslint:recommended" style guide. We have setup and enabled eslint for this project. We suggest that you keep following it. There are pre-commit hooks implemented to prevent bad commits. So if you don't lint your code before commititng it, you won't be able to commit it.

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
