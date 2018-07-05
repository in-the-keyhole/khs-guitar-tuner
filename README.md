khs-guitar-tuner
================

A JavaScript/React-Materialize web application for guitar tuning utilizing the React-Sound audio elements.

Server side API implemented using Java Endpoint

Installating and Running
========================

* Clone Repo 
* Import into STS Eclipse as an Existing Maven Project 

* Connect to desired server using the steps below:
* Download PostgreSQL
* Install everything with the default settings
* Open up PG Admin 4
* Click on "Severs"
* Click on "Databases" then "postgres"
* Click on "Schema"
* Right-Click on "Tables" and click "create" and name it "tunings"
* Right-Click on the table you made and select "properties"
* Navigate to the panel that lets you add columns
* Create a row for tuning_id (type: integer), tuning_description (type:text), tuning_notes (type: text)
* Right-Click on the table again an hover "scripts" and click any one of them

* then populate the database with the following information:

INSERT INTO public."tunings"(
	tuning_id, tuning_description, tuning_notes)
	VALUES (1, 'Standard', 'e,a,d,g,b,e');
	
	INSERT INTO public."tunings"(
	tuning_id, tuning_description, tuning_notes)
	VALUES (2, 'DROP D', 'd,a,d,g,b,e');
	
	INSERT INTO public."tunings"(
	tuning_id, tuning_description, tuning_notes)
	VALUES (3, 'DADGAD', 'd,a,d,g,a,d');
	
	INSERT INTO public."tunings"(
	tuning_id, tuning_description, tuning_notes)
	VALUES (4, 'Half Step Down', 'd#,g#,c#,f#,a#,d#');
	
	INSERT INTO public."tunings"(
	tuning_id, tuning_description, tuning_notes)
	VALUES (5, 'Whole Step Down', 'd,g,c,f,a,d');
	
	INSERT INTO public."tunings"(
	tuning_id, tuning_description, tuning_notes)
	VALUES (6, 'OPEN C', 'c,g,c,g,c,e');
	
	INSERT INTO public."tunings"(
	tuning_id, tuning_description, tuning_notes)
	VALUES (7, 'OPEN D', 'd,a,d,f#,a,d');

  * Find Boot Dashboard on STS Eclipse, you will see this application under local. Run it as a spring boot application.
  * Use npm start to start application
  * Once started it should take you to localhost:3000, there you can choose from different tunings and click the note to hear a sound.
>>>>>>> react
