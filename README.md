# Friend-Finder

### Overview
Friend Finder is a compatibility-based dating application. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. The survey consist of 10 questions, each answer will be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question. 

Each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`). With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.

### Requirements

* Friend Finder Repo

* server.js (npm packages)

* `htmlRoutes.js` (includes two routes)

* A GET Route to `/survey` which should display the survey page.
* A default, catch-all route that leads to `home.html` which displays the home page.

* `apiRoutes.js` (includes two routes)

* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

* Application Data will be saved inside of `app/data/friends.js` as an array of objects.


### Technology Used

* Express to handle routing 

* Path

* Node

* Heroku
