# EE 461L Project
Jin Lee, Brandi Nguyen, Allen Zhou, Carson Bone, Noah Zamarripa  

## Checkpoint 1

### R1-1 Project Plan

#### Project Description
Our team is developing a minimum viable product for a Hardware-as-a-Service (Haas) system using the project management and software skills learned over this course. As of Phase 1, our stakeholder needs consist of:    

SN0: Accepted quality and reliability metrics   
SN1: Create and maintain secure user accounts and projects on the system    
SN2: View the status of all hardware resources in the system   
SN3: Request available hardware resources and datasets from published sources   
SN4: Once approved, checkout and manage these resources   
SN5: Check-in the resources and get status of all hardware resources in the system   
SN6: Deliver PoC within schedule constraints, with support for scalability  

<em>These stakeholder needs will be refined and expanded upon in the next phase of the software development process.</em>


#### Sprint Velocity
Our team plans to complete 2 user stories every week. As of phase 1, this velocity is prospective, and we will use our weekly Monday scrums to check in, assess our progress, and improve our work estimate going forward.  

#### Collaboration Tools
Our team is using Github for task management (issue tracker, project boards), Zoom for weekly scrums, and Discord for asynchronous communication.

#### Implementation Methodology
Our team will use the AGILE methodology to efficiently distribute tasks, minimize technical debt, and quickly develop working prototypes to present to our stakeholders.

### R1-2 Features
The project board for work items in this section can be found [here.](https://github.com/jin-lee-00/ee461l/projects/2)
#### User Stories  
User stories in this phase are derived from the minimum features required for each subsystem, and are organized to reflect such. These user stories serve as a starting point to identify tasks and will be refined throughout system development.

##### User management 
<ul>
	<li> As a user, I want to enter my user ID and password to sign-in to the app. </li>  
	<li> As a user, I want to easily enter my user ID and password to create a new account. </li>  
	<li> As a user, I want to easily enter information to create a new project. </li>   
	<li> As a user, I want to login to existing projects. </li>    
	<li> As a user, I want to save my user and project information. </li>    
	<li> As a user, I want to easily access saved information. </li>    
	<li> As a user, I want my user ID and password encrypted for security. </li>   
</ul>

##### Resource Management  
<ul>
	<li> As a user, I want to easily view the capacity of HWSet 1 and HWSet 2. </li>  
	<li> As a user, I want to easily view the availability of HWSet 1 and HWSet 2. </li>  
	<li> As a user, I want to store (return) and access (retrieve) all available HW. </li>  
	<li> As a user, I want to enter how many units of HWSet1 and HWSet 2 to checkout and check-in. </li>

</ul>

##### Data Access  
<ul>
	<li> As a user, I want to easily view the available public datasets for use. </li>  
	<li> As a user, I want to be able to download any of the public datasets as a zip file. </li>	
</ul>


#### Technical Debt  
There is no technical debt as of phase 1, but work to minimize them throughout development. 
#### Research Items
Our team will need to research the various tools used in implementation listed in R1-4.
<ul>
	<li> Research React.js </li>
	<li> Research MongoDB </li>
	<li> Research PyTest </li>
	<li> Research Heruko Cloud Deploy </li>
</ul>

### R1-3 High-level Sketch
#### Home Page
![home page](https://user-images.githubusercontent.com/98115244/154193552-b4bad84f-7be6-4021-b0d7-0aad1de62584.png)
#### Project Page
![project page](https://user-images.githubusercontent.com/98115244/154193565-cddc3776-b1db-4d7e-a1d5-9b3045c76757.png)
#### Sign-up
![sign up](https://user-images.githubusercontent.com/98115244/154193573-b22b5ade-0e2a-4925-9035-e2b4660d4e50.png)
#### Sign-in 
![sign in](https://user-images.githubusercontent.com/98115244/154193583-5c3fe476-6739-4b32-8b91-3400480ea253.png)

### R1-4: Tools and Approach
**Backend:** Python -Flask for framework
**Frontend:** React.js  
**Database:** MongoDB  
**Testing:** PyTest  
**Deployment:** Heroku Cloud Deploy
