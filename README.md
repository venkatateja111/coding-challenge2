This project is made with using Node js and React js.

This project is deployed on heroku. The link is   https://heroku-mern1.herokuapp.com/

To run this project on a local machine , first download this repository as a zip.

Extract this project in a new folder.

In the outer  package.json file which belongs to server, user should do the following change.

"start": "concurrently \"node app.js\" \"cd client && npm run start\""


users can search the json data according to their queries.

THROUGH API:

The API's are written in this file  /api/app.js.

User can also display the data by typing the following url's in the browser.

These API'S are deployed into heroku

The links are

To search by Name
https://heroku-mern1.herokuapp.com/search_by_name_API/name=arthur

To search by Year
https://heroku-mern1.herokuapp.com/search_by_year_API/year=2016

To search by year and Category
https://heroku-mern1.herokuapp.com/search_by_year_category_API/year=2016/category=physics

To search by order like Ascending or Descending
https://heroku-mern1.herokuapp.com/search_by_order_API/order=asc

https://heroku-mern1.herokuapp.com/search_by_order_API/order=desc

