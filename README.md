### Demo Application for capturing survey data 

---
**Description:**

Short demo of application "wellbeing matters" created for gathering data from picture based surveys for children and disability students.

**Stack:**
- NextJS & React with Typescript
- TailwindCSS 
- Zod
- Jest - testing API
- Express API 
- MongoDB/Mongoose
- MongoDB Image storage with multer and gridfs
- Docker

**User authentication screen**
---
![login](https://i.imgur.com/pwVDGhc.png)

**Participant List screen**
---
![participants](https://i.imgur.com/bCFsjzG.png)
**Description:** 
Once user is authenticated, list of participants that belog to is displayed.
Each particiapnt can click on their name and take a survey that has been assigned to the group.

**Survey**
---
![question1](https://i.imgur.com/ufYL2Xh.png)
**Description:** 
Participant answers series of questions.
Once participant complete the survey, thank you message is displayed and user photo is blured until next attempt is allowed.
Gathered answers are submitted to the sever.

**Participant List screen with participant waiting for next attempt**
---
![home_screen](https://i.imgur.com/vZgTvWW.png)

**Survey Statistic Dashboard:**
![statistics](https://i.imgur.com/K9TuvRi.png)
**Description:**
All data gathered from surveys is accessible through admin dashboard

**More info**
Full version of application allows to design surveys,manage groups/participants and visualize gathered data and more..
