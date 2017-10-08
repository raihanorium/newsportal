#News Portal Project

##Run Configuration:

###Backend:
The backend is run by Apache Maven. Please setup Maven first to run this project.

To directly run in an embedded Tomcat 7 server, run `mvn tomcat7:run`.

To build a war file, run `mvn war:war`.

The backend will run on `http://localhost:8080/api`.

###Frontend:
The frontend is run by Angular 4.
The UI app is located in `./src/main/ui/newsportal/`.

In order to run the frontend, please install Node, NPM, and Angular CLI first.
Navigate to `./src/main/ui/newsportal/` and run `ng build`. This will store all the resources in `./src/main/webapp/static/` directory.
If the backend is running, the frontend can now be accessible at `http://localhost:8080/`.