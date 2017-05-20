### Product

I created a REST api using nodejs where it converts times to different timezones. This was my first attempt at building a REST api using nodejs. 

### Initial Problems

I had trouble running `restify` on nodejs so I used `express` instead. 

### Package Settings

I used `mongodb` as my non-relational database. I used it because it had a lot of resources online and went well with `nodejs`. I could have used a relational database here if I wanted to. `mongoose` helped me access `mongodb` commands for CRUD simply and easily. `body-parser` helped me parse JSON. `moment-timezone` helped convert times into different timezones.

### Model, Route, Controller

The `Routes.js` file contains the routes to available CRUD operations. `/tasks` is where a user creates a new time. The user can also see a list of all times he has entered and also delete the entire list. To update and delete individual time, the user accesses `/tasks/:taskId`. To convert time to a different timezone, the user must pass in a valid timezone parameter `/tasks/:taskId/:timezone`. 

According to Wikipedia, timezones in string representation look like `Europe/Berlin`. However because of the extra slash in the middle, my program treated it as two parameters so I had to use a different way to pass in timezones.

Currently it supports

|Parameter | Offset |
---|---
|Berlin |   +01:00
|NewYork | -04:00
|Sydney | +11:00
|LA | -07:00

### Run

run `mongod` in one terminal and `npm run start` in another terminal.

### Testing

Testing was done through `Postman`

[Video](./RESTapi.mp4)


### Improvement

This REST api service is not too useful. There's no particular reason anyone would use it to convert time to different timezones. 






