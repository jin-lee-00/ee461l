# EE 461L Group 2: Hardware-as-a-Service PoC
Jin Lee, Brandi Nguyen, Allen Zhou, Carson Bone, Noah Zamarripa  

[Phase 1](https://github.com/jin-lee-00/ee461l/wiki/Phase-1)  
[Phase 2 (Deployed App)](https://ee461l-2.herokuapp.com/)  

## Introduction 
This project is a proof of concept for a HaaS system with user, project, and resource management, as well as file sharing/downloading functionality.<br />
The React frontend was designed with usability and simplicity in mind, with the goal of creating an intuitive user interface.<br />
The Flask backend is small, simple, yet modular, allowing for easy maintenance/modifications.<br /> 

## User Guide  
### Sign-in/Sign-up  
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/98115244/166090984-54bbaf49-b632-4ce3-b4ca-cf7d83c0d7c6.png">  
</p>  
Sign in to the dashboard via email and password. To create a new user account, click the link below the form to sign up.<br /> 

### Navigation  
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/98115244/166090685-c8f612d9-66cd-4fbd-bffc-b1af9387a20f.png">
</p>  
The dashboard consists of a single page with a navigation bar that scrolls to each section.<br />    
To return to the top of page, click the 'HaaS' logo on the top left of the screen.<br />    
To log out, click the 'Log out' button.<br />  

### Project Management  
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/98115244/166090712-2c77901a-fc62-4d3e-ab7d-ec904804a2bf.png">  
</p>  
In the projects section, users can create, find, and manage their projects.<br />  
To create a new project, click the '+' button on the top right of the interface to expand the project creation tab.<br />  
When a project is created, it will be displayed below.<br /> 
<br />  

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/98115244/166090725-faf8d4e8-b0e0-477e-ba1f-c8692c0a2e5c.png">
</p>  
To find an existing project, enter the project ID (shown in parenthesis) and click the 'Search Project' button.<br />
To delete an existing project, click the 'x' icon on the right side of the project tab. This will delete the project from the database and return all checked out resources.<br />

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/98115244/166090954-20867aef-1b37-45a1-a02c-cad2fe998704.png">
</p>  
To manage a project, click the 'Manage' button to go to its individual page.<br />
At the top, fixed information about the project is displayed, followed by resources checked out to the project.<br />
To check out or check in resources, enter the quantity and click '+' or '-', respectively. Input quantities exceeding limits will be capped at the quantity available for check in/checkout.<br />

## Resource Management  
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/98115244/166090999-ec4615f6-9ecb-48bf-b8a1-cd028502af83.png">
</p>  
In the resources section, users can create new resources.<br />
To create a new resource, click the '+' button on the top right of the interface to expand the resource creation tab.<br />  
When a resource is created, its availability will be initialized to its capacity, and displayed below.<br /> 

## Dataset Access  
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/98115244/166091054-e1bff947-dbce-4c3d-a40a-ebc596f1453c.png">
</p>  
In the datasets section, users can download datasets from PhysioNet, as well as add new files to be shared with other users.<br />
Clicking the link in a dataset tab will redirect to the dataset page, while the 'Download' button will download the zip file. <br />
To create a new dataset download, click the '+' button on the top right of the interface to expand the dataset creation tab.<br />  
When a dataset is created, its page will be initialized to the page URL, and its download will be initialized to the zip URL.<br /> 




## Implementation  
[React](https://reactjs.org/)  
[Styled Components](https://styled-components.com/)  
[Flask](https://flask.palletsprojects.com/en/2.1.x/)  
[MongoDB](https://www.mongodb.com/)  
[Heroku](https://dashboard.heroku.com/)
