How to create a new Proejct

1. add node_modules/ in .gitignore
2. git init
3. npm init (npm i ..., and npm i -D noedmon, concerrently)
4. npm run sd
5. git add .
6. git commit -m "Something...."
7. npm run server

8. npmx creact-react-app client(delete .gitignore and readme.md in client folder)
9. rm -rf .git in client folder
10. delete App.test.js, inedx.css, logo.svg and serviceWorker.js in client/src
11. delete serviceWorker,... files require clause in index.js and App.js
12. Clean up the App.js and App.css

What is the process of creating an application
(MongoDB -> Nodejs -> Reactjs)

1. Environment & Setuup
2. MongoDB Atlas Setup
3. Install Dependencies & Server Code
4. Connect to MongoDB
5. Create Route File
6. Create Model
7. Create all apis

Extensions & Tool

1. Redux DevTools (chrome extension)
2. React Developer Tools (chrome extension)
3. Bracket Pair Colorizer (VS code)
4. ES7 React/Redux/GraphQL/React-Native snippets (VS code)
5. Prettier - Code Formatter (VS code)
6. Auto rename tag (VS code)

Ctrl+D to selec multi words
racf + Enter => shortcut for creating a functional component (Resource Access Control Facility)

redux setup

1. import Provider and store in App.js
2. create a store.js
3. create index.js(rootReducer) in reducers folder(create)
4. create alert.js in reducers folder
5. create types and alert in actions folder(create)
6. add connect in Component

front-end development order

1. reducer(e.g. profile.js) and reducers/index.js
2. type.js
3. action
4. component
5. App.js

Heroku

1. heroku --version
2. heroku login
3. heroku create
4. git init(optional)
5. git add .(optional)
6. git status(optional)
7. git commit -m "Prepared for deployment"(optional)
8. heroku git:remote -a lit-dawn-40362
9. git push heroku master
10. heroku open
