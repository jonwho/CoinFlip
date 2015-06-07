# HOMEWORK 5
# Team 3 - Andrew Wang, Long Tran, Jonathan Ho, Kevin Tran

# Write up - updated for HW5
* Find our report at CSE134B_Team3.pdf

## Development and distribution version
* Development code is the root directory files/folders.
* Distribution version of the app can be found in the dist directory.

## Improvements from HW4
* Got saving coin stack to work in mobile view
* Added Google auth
* Added email/pass auth login
* Added email/pass registration
* Added coin/buillion pictures
* Added types of coin/buillion
* Added logout to nav
* Added settings to sidebar
* Able to change email or password of user if logged in with email/pass auth
* One step build process using Gulp
* Default values for saving to stack
* Rollbar analytics - error tracking and action tracking
* CSS improvements

* Test subjects reported that a lack of knowledge of existing coins/bullions presented a formidable challenge towards building a portfolio effectively. 
    * We populated a database of frequently traded coins and bullion bars and redesigned our creation/update page to be centered around these coins and bars
    * Overhaul of update page resulted in it now dynamically loading default data into the fields based on the user-selected coin
* Account management system
    * We now support not only Facebook authentication, but Google+ and email/password combinations as well
    * Implemented full account management capabilities - changing email, changing password, and password reset email functions
* Build/Analytics
    * Added Rollbar error tracking and Mixpanel action tracking to gathering information regarding our application’s performance
    * Wrote build automation script to compile production release of application
* UI/UX
    * Implemented many fine tweaks to the CSS and layout in response to test subject feedback to improve aesthetics. For example, we moved the optional account management system to the left sidebar and replace it with the Logout button due to users finding the Logout functionality more worthy of the top-right corner real estate.

## For grading
We think it best if the app was tested running on our Firebase app url.
The app can be run [here](https://cse134bteam3-hw5.firebaseapp.com/). Also it
would help to disable pop-up blockers so that Facebook's auth window appears
on your machine. Also note that GMail sends the reset password email to the
spam folder, so it is noteworthy to check that folder.

## HTML Validation
All of our HTML files validate with only a few warnings because of the use of
a section tag without a h2-h6 element to identify headings. Otherwise the
HTML files validate just fine.

## CSS Validation
We use Dream Team's CSS file style.css and jquery-ui.css to style 
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
view ports in the browser. 

## Firebase Schema
To save multiple users and their coin stack we made a users reference to hold
child references where each is an individual user. Then for each individual
user they have 3 child references gold, silver, and platinum. These 3
references hold many values where each value is a JSON format string to
represent a purchase record. A purchase record holds info like date of
purchase, quantity of coin in purchase, and amount in sales of purchase.
We also store our database of frequently-traded assets within a child whose
name reflect the metal and type (coin vs. bullion) of the asset.

## Data Collection
We are using 3 sources for our app. For gold/silver/platinum futures we are
periodically updating our live data through Yahoo's finance ticker in the
COMEX/NYMEX commodity futures market. While for historical data on spot prices
we are using Quandl's API to get data from the past based on London spot prices.
We also populated our database of frequently traded assets with a webscraper
gathering information from APMEX's precious metals trading page.

## Building the app
We used JavaScript and jQuery whenever it made tasks easier. Most of the work
involved working with Firebase APIs to implement CRUD operations. To avoid an 
entirely monolithic JavaScript file we put our JavaScript code into team3.js 
separate from Dream Team's main.js file. Our team3.js file includes all our 
work that we needed to tie Firebase data into our views and features that 
updated our Firebase datastore. For some changing email/pass and logout functions
we implemented those in main.js so logical groupings made code easier to read
in the future. More detailed in our report is how we built the app for
distribution. To quickly summarize here we made a one step build possible by
using gulp to build and package our app into a dist directory. The newly built
dist directory is ready for production because it concatenates multiple CSS
and JavaScript files to combined.css and combined.js respectively. Thus making
it easier and quicker to serve.

## CRUD Implementation
For Create, we assigned a unique ID to each tag in the Add screen view. Users
are expected to select one of the pre-defined, commonly-traded coins that we
have populated from our Firebase servers. Update selection, the fields relevant
to the physical properties of the coin will automatically be filled out, leaving
the user to just fill out the price and premium they bought the coin at, the  
quantity of asset, and the date of purchase. Upon clicking on the "Saved" button
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
Firebase. Note that since HW4, we have locked the metal type, asset type, name,
and purchase fields when updating an element. The rationale behind this is that
if you are going to change any of these fields that are critical to defining
a numismatic asset, then it is crucial to simply delete the entry and create
a new one. 

For Delete, it is pretty much the same exact logic as Update except much simpler.
Once the call to the Delete button is fired, we get the unique Id of the item
being called on and remove its from Firebase, which triggers a value change
event and ultimately update the table once more time.

## User authentication
To obtain authentication credentials, we support Google+ authentication, 
Facebook authentication, and Firebase-based email/password authentication. 
For users of email/password authentication, we maintain the options for 
the user to change their email or their password upon logging in (via the
left side bar). We also integrate a “Forgot Password?” link on the front
page to send them via email a token password by which they could login to
CoinFlip and change their password. These functions can be found in 
main.js. Login credentials are set to expire after 24 hours.
With this, we assign a unique UID to each user, then issue permission 
only allowing users to access coin collections belonging to that UID. 
Attempts to access pages of our application without authentication
boots the user to the index page, on which he/she must sign in
again.
