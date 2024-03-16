# Wine-iest

[Wine-iest live on Heroku](https://wine-iest-2a48e153d64e.herokuapp.com/)

Wine-iest is a place for building lists of favorite wines for different occasions.  Users can search a database to find wines to add to each list, and can then edit the lists or delete them.  Eventually, users will have the ability to manually enter wines that aren't in the database, and share their lists with other users.

<img width="1353" alt="Screenshot 2024-03-16 at 9 33 58 AM" src="https://github.com/zacmea/project2/assets/152098774/de98539d-b019-4613-a659-9ba62737857e">


## Ideation
### Trello board [here](https://trello.com/invite/b/Yg5CzclE/ATTI361b8321efd359841509edb0f0a1d1e65391A3B7/project-2)

### ERD [(link to Miro board)](https://miro.com/app/board/uXjVNlo1OXQ=/?share_link_id=757118089960)

![Screenshot 2024-03-02 at 3 58 06 PM](https://github.com/zacmea/project2/assets/152098774/c1201d7b-2d79-4329-af45-6bc2cf608c79)

### Wire Frames
![Screenshot 2024-03-02 at 4 00 45 PM](https://github.com/zacmea/project2/assets/152098774/efb9211e-0e52-4e28-ba10-0cb127fe9989)
![Screenshot 2024-03-02 at 4 00 56 PM](https://github.com/zacmea/project2/assets/152098774/9ef26402-b726-479e-b45d-7126e8bf67cd)
![Screenshot 2024-03-02 at 4 01 03 PM](https://github.com/zacmea/project2/assets/152098774/ea61c72a-0708-4c53-99bf-33aacdfc327d)
![Screenshot 2024-03-02 at 4 02 53 PM](https://github.com/zacmea/project2/assets/152098774/75c85063-ce28-452e-aec1-2b1f65b9f22e)
![Screenshot 2024-03-02 at 4 03 03 PM](https://github.com/zacmea/project2/assets/152098774/32e04cc4-63d4-47d9-b268-ab34248fe1bd)
![Screenshot 2024-03-02 at 4 03 11 PM](https://github.com/zacmea/project2/assets/152098774/cdee2110-4364-487e-8aad-d8a195bc4219)
![Screenshot 2024-03-02 at 4 03 21 PM](https://github.com/zacmea/project2/assets/152098774/ab0ed6c2-6281-4c19-ba1b-64d1b30e086e)
![Screenshot 2024-03-02 at 4 03 41 PM](https://github.com/zacmea/project2/assets/152098774/b4c7275c-db2f-4640-b0cc-00e2a5b4aa28)
![Screenshot 2024-03-02 at 4 03 34 PM](https://github.com/zacmea/project2/assets/152098774/5f2da49c-efd4-4d0c-b876-1f6abc16f534)

## Building
### Technology Used
In this Project I used:
- HTML
- CSS
- JavaScript
- Express.js / Node.js
- Mongoose / MongoDB

This project follows the MVC structure.  The bulk of the project was handled with express.  RESTful routing was handled with controllers, and models were used to generate the MongoDB schemas.  CSS was used to apply styling throughout.

### Approach taken

I began the project by making ultra-lo-fi wireframes on scrap paper (not shown) because I find visuals helpful for processing my ideas.  I then created my ERDs, and used them to create models for Users and Wines. The Collexns model came after.  Once all of this was accomplished, I began building the basic layout for the controllers, starting with the /seed route.  I used [Vivino API]([url](https://github.com/aptash/vivino-api)) from user aptash to create the seed database.  I then started to build ejs pages for the wines and then moved to the collections ejs pages, ending with the user ejs pages. I nailed down authentication and then began fully building out the rest of the routes.  I began styling at the end and apparently fell back in time to the 90s for the first iteration of styling.  Later, I will adjust the styling to make it current.

## Installation and Startup Instructions
To get start Please Navigate to
[Wine-iest live on Heroku](https://wine-iest-2a48e153d64e.herokuapp.com/)

If you are fork this repo make sure to npm i to install all necessary dependencies.


## Roadbloacks
### Unsolved Problems
The main issues for which I struggle to find a workaround are style-based. 

### Un-added features
I wanted users to be able to share their lists with other users.  I also wanted to allow users to add wines manually to the database.  I finally wanted to give users a way to delete and update their profile.  Time was the major limiting factor for these concerns.


## Special Thanks
Thanks to classmate Tyler Carson for helping me find the API I used to create my seed.js model.
Thanks to gitHub user aptash for creating the [Vivino API]([url](https://github.com/aptash/vivino-api))
Thanks to instructors Billie & Justin for giving their time to thought-partner and debug with me.
Thanks to the cohort's Discord crew for keeping me on track and accountable throughout the project.
