# Quilting Gallery

#### _Quilting Project/Material Manager, 01/26/2024_

#### By _**Tristen Everett**_

## Description



### Diagram

* [Component Diagram](./Component_Diagram.html)

### MVP User Stories (Completed)

* Users will be able to navigate between 5 "Areas": Finished Projects, Current Projects, Pending Projects, All Projects, and Supplies
* Users will be able to **PRACTICE CREATING** Projects containing data for: Pattern Name, Dates (finished date/due date), Comments, Recipient (known/planned), Storage Location, Completion Percentage, Photos, and Current Category
* Users will be able to **PRACTICE CREATING** Supplies containing data for: Supply Name, Stock (quantity of items/length for fabric), Description, Photo, and Storage Location
* Users will be able to add Photos to both Projects and Supplies by inputting a URL where the Photo is saved (examples: DropBox or Google Drive)

* Program will render Finished Projects in a list view **in the order they were entered**, each entry will include a thumbnail of the first associated photo, pattern name, date (finished), and recipient
* Program will render Current Projects in a list view **in the order they were entered**, each entry will include a thumbnail of the first associated picture, pattern name, and date (due)
* Program will render Pending Projects in a list view **in the order they were entered**, each entry will include a thumbnail of the first associated photo, and pattern name
* Program will render All Projects in a list view **in the order they were entered**, each entry will include a thumbnail of the first associated photo, pattern name, and current stage (finished, current, or pending)
* Program will render All Supplies **in the order they were entered**, each entry will include a thumbnail of the first associated photo, supply name, and first associated stock amount

### MVP User Stories (To Be Added)

* Users will be able to add Projects to the **DATABASE** containing data for: Pattern Name, Dates (finished date/due date), Comments, Recipient (known/planned), Storage Location, Completion Percentage, Photos, and Current Category
* Users will be able to add Supplies to the **DATABASE** containing data for: Supply Name, Stock (quantity of items/length for fabric), Description, Photo, and Storage Location
* Users will be able to **MODIFY** Projects to either move them between Current Category or **MODIFY** other properties
* Users will be able to **MODIFY** Supplies to either **MODIFY** Stock or other properties

* Program will render Finished Projects in a list view **based on completion date**, each entry will include a thumbnail of the first associated photo, pattern name, date (finished), and recipient
* Program will render Current Projects in a list view **based on due date and colored to indicate proximity to the deadline**, each entry will include a thumbnail of the first associated picture, pattern name, and date (due)
* Program will render Pending Projects in a list view **based on pattern name**, each entry will include a thumbnail of the first associated photo, and pattern name
* Program will render All Projects in a list view **based on pattern name**, each entry will include a thumbnail of the first associated photo, pattern name, and current stage (finished, current, or pending)
* Program will render individual Projects if selected to view allowing User to see full details and allowing ability to move through full selection of assigned photos **NO SPECIFIC VIEW YET**
* Program will render Supplies alphabetically with all items that have zero stock at the end of the list **SORTING LOGIC**
* Program will require Users to authenticate with different accounts and store separate Projects and Supplies for each User **DATABASE NEEDED**

### Future User Stories (Completed)

* 

### Future User Stories (To Be Added)

* Projects will contain a new data set for Privacy (default as public)
* User will be able to obtain a "sharing code" allowing them to share view only access to their public projects
* User will be able to use "sharing code" without needing to be an authenticated user
* User who is authenticated will be able to save "sharing code" they obtain to have quicker access to view that person's projects in the future

* Program will allow organization by using barcodes and scanner to allow quick view access to entries in the database

* Program will only render X amount of Projects/Supplies at a time in the list and Users will be able to advance to the next grouping

* User will be able to search Projects and Supplies based on name

* Add check for image website inputs to only allow images (possible website)[https://stackoverflow.com/questions/9714525/javascript-image-url-verify]
* Supplies will contain new data sets for: Custom Category, Supplier Info, and Price (max 2 decimals)
* Projects will contain new data sets for: Supplies List, and Expense List
* User will be able to assign Supplies to a Project allowing better management of Supplies for timing of new purchases
* Program will be able to calculate cost of a Project based on Supplies used and expenses incurred
* Program will decrement stock from Supplies when they are assigned to a Project
* User will be able to search/filter Supplies based on custom category
* User will be provided link from Projects to the individual Supplies they use

## Setup/Installation Requirements

1. Clone this Repo
2. Run `npm install` from within the root directory of the cloned project
3. Run `npm start` from within the root directory of the cloned project
4. The webpage should start automatically in your default browser. If it doesn't go to http://localhost:3000 in your preferred browser

## Technologies Used

* [Create React App](https://github.com/facebook/create-react-app)
* Redux
* React-Redux
* Firebase

### [External Resources Used](./ResourceCredits.md)

<!-- ### Progress Log
#### 06/14/2022
* 3:10 PM - work on building README
* 3:50 PM - create Component_Diagram to edit later
* 3:53 PM - end of day
#### 06/15/2022
* 1:40 PM - work on building Component_Diagram
* 3:37 PM - end of day
#### 06/16/2022
* 1:05 PM - work on building Component_Diagram
* 4:03 PM - end of day
#### 06/17/2022
* 1:05 PM - work on building Component_Diagram
* 4:06 PM - end of day
#### 11/10/2022
* 1:45 PM - work on setting up files for building static site
* 2:07 PM - start working on static site
* 3:30 PM - end of day
#### 11/15/2022
* 2:00 PM - work on CSS file for styling drop down menus
* 3:15 PM - return to working on building NavigationBar using new CSS styles
* 3:45 PM - end of day
#### 11/16/2022
* 1:45 PM - work on designing account component
* 3:50 PM - end of day
#### 11/18/2022
* 2:05 PM - work on CustomModal component
* 2:45 PM - work on adding a modal for account creation
* 4:15 PM - end of day -->

### License

This software is licensed under the MIT license

Copyright (c) 2024 **_Tristen Everett_**