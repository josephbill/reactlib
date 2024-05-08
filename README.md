### Process flow 
1. mkdir directoryx 
2. cd directoryx 
3. intialize the project as an npm package : npm init -y 
4. npm install react 
5. Implement a cookie management system : js-cookie 
npm install js-cookie 
6. Create a utility file for our different functions 
utils.js 
- Set cookies , get cookies , remove cookies 
- functional deliverables 
import cookies from 'js-cookies';
function pageviews(pageview){ 
    // name, email , page viewed, count +3

     Cookies.get(name, email) // params provided by movies africa
     <!-- logical unit -->
     - send the page viewed 
     - track page view count 
     - send this data to api for display on admin dash : request handling. 
       - is the data there : if not : insert a new record 
       = is the data present  : updating a record. 
       - has the cookie expired. 
}

7. we will not be creating native components 

8. packaging and distribution 
 - Index.js export all our hooks and utilities 
 - prepare our library for npm 
 - publish to npm