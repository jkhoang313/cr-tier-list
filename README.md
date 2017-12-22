# React Boilerplate (created by Jackson Hoang)

* Learn how to use React here (https://reactjs.org/).
* Delete the files/folders beginning with `.example`. These files/folders are meant to depict examples on how to use the app.
* The `.example.dumb-component` and `.example.smart-component` files are there as a template for creating the respective component. You can delete these files or rename them and replace the `example` with `hidden` to make them non-git-tracked. You can keep the files and copy and paste them into newly created components/files.

## Setup

1.  Pull down the repo: `git clone git@github.com:jkhoang313/react-boilerplate.git`.

* Alternatively, run `git clone -b authed git@github.com:jkhoang313/react-boilerplate.git` if you want to start from the `authed` branch.

2.  Rename the directory to be the name of your GitHub repo: `mv react-boilerplate {name_of_github_repo}`
3.  Navigate to the newly created directory: `cd {name_of_github_repo}`.

* If you started from the `authed` branch, checkout to a `master` branch: `git checkout -b master`.

4.  Set the remote origin to target your GitHub repo: `git remote set-url origin {github_repo_url}`
5.  Push up the code to your GitHub repo: `git push -u origin master`

6.  Install the required packages: `npm install`.
7.  Run the server: `make frontend`.
8.  You can access the server in the browser at `http://localhost:3000/`.

## Redux

1.  Create a folder (accordingly named) in the `redux` folder.
2.  Create a file called `actions.js` in that folder.
3.  Add the corresponding redux actions (add the constant for the action name first).
4.  The `callApi` function can create the `REQUEST`, `FAILURE`, `SUCCESS` actions for the redux store to respond too.
5.  Export the actions from this file from the main `actions.js` file
6.  Create a file called `reducer.js` in the initial folder.
7.  Create the default function to export. Update the initial state to match your app.
8.  Include this reducer into the main `reducers.js` file and include it in the rootReducer with a corresponding key (which it will be identified as in the redux store).

## Styling/Sass

* Create sass files (e.g. `_test-component.scss`) and import them into the respective `_index.scss` files to make sure they're included in the main scss file.
* Some global class helpers are included in the `_global-helpers.scss` file.
* Uses React-Bootstrap for basic components/foundation (https://react-bootstrap.github.io/).
* Uses Material-UI (http://www.material-ui.com/) for UI components.
* You can add animations through https://daneden.github.io/animate.css/ (the cdn is already included in the headers).

## Environmental Variables

* Create a `.env` file (use the variables found in `.env-example` and set them to be the correct values).
* Note: Only include `REACT_APP_DISABLE_REDUX_DEV_TOOLS` if you want to disable the redux dev tools (i.e. in a production build). It is recommended that you do not include this variable in your `.env` file.

## API Setup

* Set the environment variable `REACT_APP_BACKEND_URL` to be the correct url.

## Misc.

* Uses ESLint/Prettier/Husky for pre-commit hooks to check code syntax.
* Uses immutable.js (https://facebook.github.io/immutable-js/docs/#/) to handle Redux State.

## Adding Heroku Remotes

1.  Create a Heroku repo for your staging application.
2.  Add the Heroku repo to a remote by running: `heroku git:remote -a {name_of_heroku_app}`.
3.  Rename the remote alias to be "staging" by running: `git remote rename heroku staging`.
4.  Configure the Heroku app with the necessary environment variables.
5.  Repeat for your production Heroku repo by replacing "name_of_heroku_app" with your production heroku app and replacing "staging" in step 3 with "production".

## Deploying to Heroku

1.  Merge your feature branches to the "dev" branch.
2.  Checkout your master branch:

* Run `git merge dev` to merge your "dev" branch to the "master" branch.
* Run `git push origin master` to update your github repo's master branch.
* Run `make staging` or `make prod` to update your staging or production app.
