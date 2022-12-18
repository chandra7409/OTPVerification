# OTPVerification
OTPVerification in node.js and mongodb

User must be able to login / logout using email ID and Password. OTP should be sent to email ID. User Session and 
Authentication should be taken care of. Please create an API endpoint for the same.
 Create a POST API,  where logged in users can post any Task. The following are the required fields : Date, 
 Task : String,  Status : Completed / Incomplete. The task is basically a string which contains the task. Eg : Swimming for one hour
Create a Patch API where a logged in user must have the provision to edit the Task. He should have the provision
to edit one or more parameters of the Task Object. Eg : Date, Task or Status
 Create a delete API where the user must have provision to delete a particular task.

Note : All These APIs must be accessible only by logged in Users. Give necessary error messages. For testing, 
set an automatic session time out of 30 seconds. Session Invalid Error Notifications should also be displayed.
