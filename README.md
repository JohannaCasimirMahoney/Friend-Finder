# Friend-Finder

### Overview
FriendFinder is a compatibility-based application -- basically a dating app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. The survey consists of 10 questions and each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

<a href="https://youtu.be/7vCgmy8MAcw">Liri-node-app</a>


### Technology Used

* Express

* Node.js

* Heroku

* NPM install

* Path

### Instructions

* Create a folder called `FriendFinder`. Inside the folder, organize your directories so it matches the following:

  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  
  1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

3. Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.
