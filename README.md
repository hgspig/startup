# startup

## 01/25/23 Github 260 assignment

<p>I had a couple problems with my settings which made it so that forcing a merge conflict was a bit tricky. I fixed it by putting in the terminal 'git config pull.rebase false'. I think I'm starting to understand how Github and Git finally work. </p>

## 01/27/23 Deliverable 
**Elevator Pitch**
<p>I am making an empanada website for a women in my home ward from Bolivia. It will allow her to display pictures of all her beautiful and delicious  empanadas and receive order forms from customers. Not only will there be a way to view multiple pictures of each empanada type, there will also be reviews from customers that allow additional credibility to just how delicious her food is. </p>

**Key Features:**

* Scroll over picture gallery. 
* Details below each picture with empanada name, ingredients, customer rating, and price
* Login option with pop-up login box
* Capability to fill out an order form if logged in. If order form is attempted without being logged in the user will be prompted to log in
* Capability to add a rating on the home page as log as logged in. If user is not logged in and attempts to leave a rating they will be prompted to login 

## 02/01/23 AWS EC2 
<p>Today I figured all my AWS stuff out to get my website up and running. I now have an official website tastyempanada.click. I had some problems with my AWS account and the domaine name purchase not getting approved but it all got fixed in the end </p>

## 02/03/23 HTTPS, TLS, and certificates
<p>Today I made my website secure. I had trouble remembering the shortcuts in VIM, don't forget: i to get into insert mode and esc to exit insert mode. </p>

## 02/03/23 HTML introduction
<p>If you ever need to see a few basic commands check out this codepen: https://codepen.io/hgspig/pen/rNrPgLz </p>

## 02/08/23 HTML Website and Simon HTML
<p>The HTML Website aspect of things was very straightforward. The only part I had trouble with was resizing my profile image because it was really big to start with. I leaned a lot while doing the Simon HTML. I looked at the class simon code for a few minutes and than worked on mine while looking at the class simon webpage for a guideline. I got stuck a lot and at first I formated the bulleted lists way different but I think I understand now why they did it the way they did.</p>

## 02/08/23 CSS Practice assignment
<p>The animation was trickier than expected. This MDN page will help with that: https://developer.mozilla.org/en-US/docs/Web/CSS/animation#syntax
Also, I think I might change my startup to just be a task page instead. The user can login and then add their tasks to different categories and there will be a progress page and a way to send notifications to everyone else saying you finished a task. </p>

## 02/20/23 Simon CSS
<p>I was honestly really surprised by the use of div tags but I think I'm starting to figure out when to use them. I made a lot of mistakes along the way but tinkering with the code provided me with a lot of chances to figure out how it workes. It's exciting to have a website that looks so much cooler now with all the CSS elements </p>

## 02/21/23 Startup HTML and CSS
<p>I really like bootstrap, it's so fun to work with and really easy to costumize and stuff once you know what you're doing. I feel like I'm pretty close to finished with the HTML and CSS at this point. I am planning on needing to alter things a little more with the main checklist once I learn how to use JS. </p>

## 02/23/23 More on startup HTML and CSS
<p>I did a lot today to troubleshoot some glitches I had in the website. I fixed the footer which was a little too far down the page. I did that by hardcoding the CSS to set the height: 81vh with an @media queery. I also fixed a problem I had on the stats and index page where the card div was overstepping it's bounds and causing a right to left scrolling issue (the header and footer weren't as big as the content). I fixed this by overflow-x: hidden. I'm not sure that's really how it was supposed to be fixed but it works for now and I'll change it down the road if I need to. </p>

## JS 
<p> When you declare a variable you can do it in two ways: <br>
let y = 1; <br>
const z = 'tacos'; <br>
var x = 1; // var was deprecated <br>
</p>
### Conditionals 
<p>
<b> if else </b> <br>
if (case) { <br>
  then <br>
} else if (case) { <br>
  then <br>
} else { <br>
} <br>
The Ternary operator does the same thing but compactly: <br>
a === 1 ? console.log(1) : console.log('not 1'); <br> <br>
<b>For loops</b> <br>
for (let i = 0; i < 2; i++) { <br>
  console.log(i); <br>
} <br><br>
<b> do while</b> <br>
let i = 0; <br>
do {<br>
  console.log(i);<br>
  i++;<br>
} while (i < 2);<br>
// OUTPUT: 0 1<br>
https://github.com/webprogramming260/.github/blob/main/profile/javascript/typeConstruct/typeConstruct.md The rest are here
</p>
<p>

</p>
<p>
</p>

## 03/06/23 Simon JS
<p>I made so many mistakes when doing this part and some of them took a while to find. I had trouble with some formating and the nav bar especially. I was surprised by how much we added to the HTML files when we did the JS. This part of Simon felt way harder than the CSS/HTML. I really liked learning how they added the login information to the page in a dynamic way (with the player name). </p>

## 03/10/23 Startup JS
<p>I had a lot of trouble knowing how to get started. I ended up pattenering some of my code off of a codepen I found. I started by adding the progress bar JS code and the login information caching. After that I did the list saving values. I definitely found that my confidence with JS grew while I was doing that. I got to a good point with the code however there was a problem with the CSS. When there were more than a few items in the list the list exstended down the page however the footer stayed put where it was. It took a lot of time to fix the CSS and it would have been nice if I had planned ahead for that. I also added the ability to delete items. I'll have to be careful with how I implement the progress bars because if I'm not careful the deleted values might effect the length and number. All in all I learned a lot about JS document queries and how to use JS to add new class tags to the HTML because that is largely what my website relies on.  </p>
