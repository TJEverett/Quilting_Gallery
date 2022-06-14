# Quilting Gallery

#### _Quilting Project/Material Manager, 06/14/2022_

#### By _**Tristen Everett**_

## Description



### Diagram

* [Component Diagram](./Component_Diagram.html)

### MVP User Stories (Completed)

* 

### MVP User Stories (To Be Added)

* Users will be able to navigate between 5 "Areas": Finished Projects, Current Projects, Pending Projects, All Projects, and Supplies
* Users will be able to add Projects to the database containing data for: Pattern Name, Dates (finished date/due date), Comments, Recipient (known/planned), Storage Location, Completion Percentage, Photos, and Current Category
* Users will be able to add Supplies to the database containing data for: Supply Name, Stock (quantity of items/length for fabric), Description, Photo, and Storage Location
* Users will be able to add Photos to both Projects and Supplies by inputting a URL where the Photo is saved (examples: DropBox or Google Drive)
* Users will be able to modify Projects to either move them between Current Category or modify other properties
* Users will be able to modify Supplies to either modify Stock or other properties

* Program will render Finished Projects in a list view based on completion date, each entry will include a thumbnail of the first associated photo, pattern name, date (finished), and recipient
* Program will render Current Projects in a list view based on due date and colored to indicate proximity to the deadline, each entry will include a thumbnail of the first associated picture, pattern name, date (due), and completion percentage
* Program will render Pending Projects in a list view based on pattern name, each entry will include a thumbnail of the first associated photo, and pattern name
* Program will render All Projects in a list view based on pattern name, each entry will include a thumbnail of the first associated photo, pattern name, and current stage (finished, current, or pending)
* Program will render individual Projects if selected to view allowing User to see full details and allowing ability to move through full selection of assigned photos
* Program will render Supplies alphabetically with all items that have zero stock at the end of the list
* Program will require Users to authenticate with different accounts and store separate Projects and Supplies for each User

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

### Progress Log
#### 06/14/2022
* 3:10 PM - work on building README
* 3:50 PM - create Component_Diagram to edit later
* 3:53 PM - end of day

### License

This software is licensed under the MIT license

Copyright (c) 2022 **_Tristen Everett_**