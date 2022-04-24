# EE 461L Project
Jin Lee, Brandi Nguyen, Allen Zhou, Carson Bone, Noah Zamarripa  

[Phase 1](https://github.com/jin-lee-00/ee461l/wiki/Phase-1)

## Environment Setup  

### Windows
1. Set up the virtual environment  
\> pip install python  
\> pip install virtualenv  
\> python -m virtualenv env  
\> env\Scripts\activate  

3. In (env):  
\> pip install flask  
\> set FLASK_APP=app.py  
To run the app:  
\> python flaskblog.py  
To close the virtual environment:  
\> deactivate

### Mac/Linux
\> pip install python
 
\> cd into ee461l folder
\> pip install virtualenv
\> python3 -m venv venv
\> source venv/bin/activate
 
in (venv):
\> pip install flask
 
to run the app:
\> cd into server
\> export FLASK_APP=app.py
\> flask run
 
to close the virtual environment: 
\> deactivate

## Updating Heroku App  
Once added as a collaborator, update the deployed app through the following steps:  

### Windows  
(from ee461l\\)  
*If frontend change, first delete the \\build\\ directory and run:  
\> npm run build*  
then  
\> heroku login  
\> git init  
\> heroku git:remote ee461-2  
\> git add .  
\> git commit -m "commit message"  
\> git push heroku main  
the changes will now be deployed  

**IMPORTANT:** Please ensure that the deployment is functional at the end of each work session, **then** sync the changes with this repo

# Technologies Used
[react-bootstrap](https://react-bootstrap.netlify.app/getting-started/introduction/)  
[styled components](https://styled-components.com/)
