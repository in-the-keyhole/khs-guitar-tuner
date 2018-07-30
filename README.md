khs-guitar-tuner
================

A JavaScript/React-Materialize web application for guitar tuning utilizing the React-Sound audio elements.

Server side API implemented using Java Endpoint

Visit our site here: www.khsguitartuner.com

Installing and Running Locally
================================

1. Clone Repo 
2. Import into STS Eclipse as an Existing Maven Project 
3. Connect to desired server using the steps below:
4. Download PostgreSQL
5. Install everything with the default settings
6. Open up PG Admin 4
7. Click on "Severs"
8. Click on "Databases" then "postgres"
9. Click on "Schema"
10. Right-Click on "Tables" and click "create" and name it "tunings"
11. Right-Click on the table you made and select "properties"
12. Navigate to the panel that lets you add columns
13. Create a row for tuning_id (type: integer), tuning_description (type:text), tuning_notes (type: text)
14. Right-Click on the table again an hover "scripts" and click on update script
15. then populate the database with the following information:

>    INSERT INTO public."tunings"(
>    tuning_id, tuning_description, tuning_notes)
>	VALUES (1, 'Standard', 'e,a,d,g,b,e');
>	
>	INSERT INTO public."tunings"(
>	tuning_id, tuning_description, tuning_notes)
>	VALUES (2, 'DROP D', 'd,a,d,g,b,e');
>	
>	INSERT INTO public."tunings"(
>	tuning_id, tuning_description, tuning_notes)
>	VALUES (3, 'DADGAD', 'd,a,d,g,a,d');
>	
>	INSERT INTO public."tunings"(
>	tuning_id, tuning_description, tuning_notes)
>	VALUES (4, 'Half Step Down', 'd#,g#,c#,f#,a#,d#');
>	
>	INSERT INTO public."tunings"(
>	tuning_id, tuning_description, tuning_notes)
>	VALUES (5, 'Whole Step Down', 'd,g,c,f,a,d');
>	
>	INSERT INTO public."tunings"(
>	tuning_id, tuning_description, tuning_notes)
>	VALUES (6, 'OPEN C', 'c,g,c,g,c,e');
>	
>	INSERT INTO public."tunings"(
>	tuning_id, tuning_description, tuning_notes)
>	VALUES (7, 'OPEN D', 'd,a,d,f#,a,d');

	INSERT INTO public."tunings"(
>	tuning_id, tuning_description, tuning_notes)
>	VALUES (8, 'OPEN G', 'd,g,d,g,b,d');

16. You will need to change the fetch calls in these locations to point to your local database: `tunings-list.jsx`, `tuning-detail-view.jsx`, `edit-view.jsx`, `delete-view.jsx`, `add-view.jsx (2x)`
17. Also, you will need to change the `application.properties` file found in `src/main/resources`
18. Find Boot Dashboard on STS Eclipse, you will see this application under local. Run it as a spring boot application.
19. Use npm start to start application
  
Once started it should take you to `localhost:3000`, there you can choose from different tunings.

If you wish to change the username and password, you may do so in `src/main/webapp/react/info.txt`
