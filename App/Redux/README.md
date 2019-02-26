## Redux
* [`reduxsauce`](https://github.com/infinitered/reduxsauce) is used to create Actions and Reducers. You can read more about it from its GitHub reposistory.
* Instead of writing all actions and reducers in a single file, they are separated by their functionality. Eg, all the actions and reducers regarding authentication can be kept in a `AuthRedux.js`.
* Other information can be found in the example reduxes in the project. Eg. GithubRedux.js, SearchRedux.js
* All the separate reduxes are combined in the `index.js`.
* `CreateStore.js` creates the redux store and connects it to saga and any middleware which the project uses. Don't modify this file.
* `NavigationRedux.js` is used by the AppNavigation. Don't modify this file.
* `ScreenTrackingMiddleware.js` is used to track the screens. Don't modify this file.