### __Name of Student:__ Tristen Everett
### __Name of Project:__ Quilting Gallery
### __Project's Purpose or Goal:__ Quilting Project/Material Manager

### __List of absolute minimum feature the project requires to meet this purpose or goal:__

* Users will be able to navigate between 5 "Areas": Finished Projects, Current Projects, Pending Projects, All Projects, and Supplies
* Users will be able to add Projects [R1](#references) or Supplies [R2](#references)  to the database
* Users will be able to modify Projects to either move them between stages or modify properties
* Users will be able to modify stock of Supplies

* Program will render Finished Projects in a list view based on completion date, each entry will include a thumbnail of the first associated picture [R3](#references), pattern name, date (completed), and recipient
* Program will render Current Projects in a list view based on due date and colored to indicate proximity to the deadline, each entry will include a thumbnail of the first associated picture, pattern name, date (due), and completion percentage
* Program will render Pending Projects in a list view based on pattern name, each entry will include a thumbnail of the first associated picture, and pattern name
* Program will render All Projects in a list view based on pattern name, each entry will include a thumbnail of the first associated picture, pattern name, and current stage (done, in-progress, not started)
* Program will render individual Projects if selected to view allowing User to see full details and allowing ability to move through full selection of assigned pictures
* Program will render Supplies alphabetically with all items that have zero stock at the end of the list
* Program will require Users to authenticate with different accounts and store separate for each User

### __What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to _your_ track, and _your_ language) will you use to create this MVP? List them all here. Be specific.__

* React
* Redux (?)
* _Remote Database_
* _Way to Authenticate_

### __If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.__

* User will be able to obtain a "sharing code" allowing them to share view only access to their public projects
* User will be able to use "sharing code" without needing to be an authenticated user
* User who is authenticated will be able to save "sharing code" they obtain to have quicker access to view that person's projects in the future
* Program will allow organization by using barcodes and scanner to allow quick view access to entries in the database
* User will be able to search Projects based on name
* Program will only render X amount of Projects/Supplies at a time in the list and Users will be able to advance to the next grouping

* Program will allow more information about Supplies [R4](#references) to be stored
* Program will allow more information about Projects [R5](#references) to be stored
* User will be able to assign Supplies to a Project allowing better management of Supplies for timing of new purchases
* Program will be able to calculate cost of a Project based on Supplies used and expenses incurred
* Program will decrement stock from Supplies when they are assigned to a Project
* User will be able to search/filter Supplies based on custom category
* User will be provided link from Projects to the Supplies they use

### __What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?__

* _Way to Generate + Read Barcode_

### __Is there anything else you'd like your instructor to know?__



## References

1) Projects MVP include: Pattern Name, Dates (finished date/due date), Comments, Recipient (known/planned), Storage Location, Completion Percentage, Photos, Current Category
2) Supplies MVP include: Supply Name, and Stock (quantity for items/length for fabric), Description, Photo, and Storage Location
3) Pictures will not be stored in database but instead be stored as links to the picture hosted somewhere else (dropbox, google drive)
4) Supplies Stretch Goals add: Custom Category, Supplier Info, and Price (float 2 max)
5) Projects Stretch Goals add: Supplies List, Expense List, and Privacy Bool