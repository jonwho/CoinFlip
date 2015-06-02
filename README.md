# HOMEWORK 4
# Team 3 - Andrew Wang, Long Tran, Jonathan Ho

## Before submission
* Check HTML & CSS validation
* Browser compatibility
* README describes how you built your app
* Note down your team's questions and concerns
* Note down other useful information for graders

# Write up

## For grading
We think it best if the app was tested running on our Firebase app url.
The app can be run [here](https://cse134bteam3.firebaseapp.com/). Also it
would help to disable pop-up blockers so that Facebook's auth window appears
on your machine.

## HTML Validation
All of our HTML files validate with only a few warnings because of the use of
a section tag without a h2-h6 element to identify headings. Otherwise the
HTML files validate just fine.

## CSS Validation
We use Dream Team's CSS file style.css and Bootstrap's bootstrap.css to style
our app. When running a CSS validator on these files we get back a few errors.
However that is a part of using Sass and compiling it back to CSS. For rules
defined in Sass it does not always compile back to a complete valid CSS file.
We get 23 errors for style.css but that is mostly because of the fill
property that doesn't exist error which leads to parse errors on other
properties. Removing these lines affect the app UI negatively.

## Browser Compatibility
We tested the app across the 3 major browsers Chrome, Firefox, and IE.
Dream Team did a great job on cross browser experience and we did not
find any significant differences to report. The CSS styling was done very
well such that different vendors had the appropriate fixes so that UI/UX
remained uniform across the 3 browsers. The mobile experience is also easy
to navigate and use. We were worried about scaling of the charts for
different ranges of time but other than some margins being longer or
shorter than others, the mobile experience works well on phone and small
view ports in the browser. However one issue we ran into when testing
on mobile was that saving a coin to the stack wasn't possible because
the form was lost for mobile view.

## Firebase Schema
To save multiple users and their coin stack we made a users reference to hold
child references where each is an individual user. Then for each individual
user they have 3 child references gold, silver, and platinum. These 3
references hold many values where each value is a JSON format string to
represent a purchase record. A purchase record holds info like date of
purchase, quantity of coin in purchase, and amount in sales of purchase.

## Data Collection
We are using 2 sources for our app. For gold/silver/platinum futures we are
periodically updating our live data through Yahoo's finance ticker in the
COMEX/NYMEX commodity futures market. While for historical data on spot prices
we are using Quandl's API to get data from the past based on London spot prices.

## Building the app
We used JavaScript and jQuery whenever it made tasks easier. Most of the work
involved working with Firebase APIs to implement CRUD operations. The only use
of Bootstrap's CSS was in the login.html page so there was a lot of unused
portions of Bootstrap. Using Gulp like we did in Homework 3 we did a uncss
task on Bootstrap to build a CSS file for only the components we used. This
Gulp task also proved useful for Dream Team's style.css file as there were
a few unused implementations. To avoid an entirely monolithic JavaScript file
we put our JavaScript code into team3.js separate from Dream Team's main.js
file. Our team3.js file includes all our work that we needed to tie Firebase
data into our views and features that updated our Firebase datastore.

## CRUD Implementation
For Create, we assigned a unique ID to each tag in the Add screen view. Users
are expected to filled out all of the fields. Upon clicking on the "Saved" button
our Javascript function uses jQuery to pull the values from these fields based
on the unique IDs mentioend above. We perform a set of data validation checks
to ensure that all fields are filled correctly (For example, String fields cannot
be empty strings and number fields cannot be NaN). 

For Read, each user has their own entry on Firebase with 3 branches of gold,
silver, and platinum. These branches are secured in read/write to the user's
assigned UID for his choice of sign-in. For reading historical data, we made API 
calls specifying the date range of -30 days from the current date. 

For Update, we created another update view with a special URL parameter. When we
create an entry for a coin on Firebase, each entry is assigned a unique Firebase
database. For each row in the table that displays the database's data, we assign
each of these unique ID to the item. Although the update fields are  the same
throughout, a call to the "Save" button will only access the specified entry in
Firebase. 

For Delete, it is pretty much the same exact logic as Update except much simpler.
Once the call to the Delete button is fired, we get the unique Id of the item
being called on and remove its from Firebase, which triggers a value change
event and ultimately update the table once more time.

## User authentication

For now, we support utilizing Firebase's Facebook user authentication system to
assign a unique UID to each user, then issue permission only allowing users
to access coin collections belonging to that UID.  Attempts to access pages of
our application without authentication boots the user to the index page, on
which he/she must sign in via Facebook. We plan on expanding this
support to Google and email/password combinations in the future.
