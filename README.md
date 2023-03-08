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

## test review
<p>
Test review<br>
To point to another DNS record you should use the DNS record type CNAME<br>
A CNAME is an alias <br>
What is A? (DNS record) <br>
How to load fonts using CSS<br>
Know JSON syntax key value is in quotes<br>
You need the element name.class name<br>
&lsquo;i&rsquo; is in case sensitive in regex<br>
Pals before marriage <br>
reduce/map/filter ect. <br>
Query selector all would give you back a ton of stuff???<br>
What does the <link> do in HTML<br>
What is a DNS subdomain<br>
Column reverse<br>
JSON requires &ldquo;&rdquo; Java script does not</p>

<p>
Test review<br>
Dev essentials<br>
HTML<br>
Tim Berners-Lee is HTML<br>
HTTP is HyperText Transfer Protocol<br>
CSS<br>
Started by H&aring;kon Wium Lie<br>
Before CSS they were mostly hard coding the visual appearance of content with HTML elements.</p>

<p>JS<br>
Started by Brendan Eich <br>
He basically coded it in a weekend</p>

<p>The console<br>
Pwd -lets you see the present working directory<br>
ls -la lets you see the files in the directory you&rsquo;re in (la let&rsquo;s you see the hidden ones) <br>
echo - Output the parameters of the command<br>
cd - Change directory<br>
mkdir - Make directory<br>
rmdir - Remove directory<br>
rm - Remove file(s)<br>
mv - Move file(s)<br>
cp - Copy files<br>
ls - List files<br>
curl - Command line client URL browser<br>
grep - Regular expression search<br>
find - Find files<br>
top - View running processes with CPU and memory usage<br>
df - View disk statistics<br>
cat - Output the contents of a file<br>
less - Interactively output the contents of a file<br>
wc - Count the words in a file<br>
ps - View the currently running processes<br>
kill - Kill a currently running process<br>
sudo - Execute a command as a super user (admin)<br>
ssh - Create a secure shell on a remote computer<br>
scp - Securely copy files to a remote computer<br>
history - Show the history of commands<br>
ping - Check if a website is up<br>
tracert - Trace the connections to a website<br>
dig - Show the DNS information for a domain<br>
man - Look up a command in the manual<br>
Chaining commands: <br>
| - Take the output from the command on the left and pipe, or pass, it to the command on the right<br>
> - Redirect output to a file. Overwrites the file if it exists<br>
>> - Redirect output to a file. Appends if the file exists<br>
VI/VIM<br>
Keystroke - meaning<br>
:h - help<br>
I - enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.<br>
U - undo<br>
CTRL-r - redo<br>
gg - go to beginning of file<br>
G - go to end of file<br>
/ - search for text that you type after /<br>
n - next search match<br>
N - previous search match<br>
v - visually select text<br>
y - yank or copy selected text to clipboard<br>
p - paste clipboard<br>
CTRL-wv - Split window vertically<br>
CTRL-ww - Toggle windows<br>
CTRL-wq - Close current window<br>
:e - Open a file. Type ahead available. If you open a directory you can navigate it in the window<br>
:w - write file (save)<br>
:q - quit. Use :q! to exit without saving</p>

<p>Git stuff (come back)<br>
https://github.com/webprogramming260/.github/blob/main/profile/essentials/git/git.md<br>
https://github.com/webprogramming260/.github/blob/main/profile/essentials/gitHub/gitHub.md</p>

<p>Deployment<br>
-k provides the credential file necessary to access your production environment<br>
-h parameters is the domain name of your production environment<br>
-s parameter represents the name of the application you are deploying (either simon or startup) <br>
ssh is how we execute the commands remotely using the secure shell program<br>
scp is the secure copy program</p>

<p></p>

<p></p>

<p>Web servers<br>
The internet<br>
Watch this: How the Internet Works in 5 Minutes<br>
Computers must have an IP address to talk to each other <br>
DNS stands for domain name system and you can look up the IP address for any DNS using the dig console utility<br>
Once you have a computer&rsquo;s IP address (by looking it up in the DNS) you then ask for a connection route to the device. This connection route consists of many hops across the network until the destination is dynamically discovered and the connection established. With the connection the transport and application layers start exchanging data.<br>
Traceroute console utility tells us the route/hops a connection between two computers made. Each time you run traceroute it it might change a little<br>
The actual sending of data across the internet uses the TCP/IP model. This is a layered architecture that covers everything from the physical wires to the data that a web application sends. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC). Underneath that is the transport layer which breaks the application layer's information into small chunks and sends the data. The actual connection is made using the internet layer. This finds the device you want to talk to and keeps the connection alive. Finally, at the bottom of the model is the link layer which deals with the physical connections and hardware.<br>
Application<br>
HTTPS<br>
Functionality like web browsing<br>
Transport<br>
TCP<br>
Moving connection information packets<br>
Internet<br>
IP<br>
Establishing connections<br>
Link<br>
Fiber, hardware<br>
Physical connections</p>

<p>Web servers<br>
https://github.com/webprogramming260/.github/blob/main/profile/webServers/webServers/webServers.md<br>
We can run web service code and use the console application &lsquo;curl&rsquo; to make an HTTP request and see the time response<br>
A web server is a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.<br>
HTTPS, TLS, and web certificates<br>
The secure version of HTTP is called Secure Hypertext Transport Protocol (HTTPS). This is basically HTTP with a negotiated secure connection that happens before any data is exchanged. Having a secure connection means that all the data is encrypted using the TLS protocol. TLS is sometimes referred to by a now unsecure predecessor protocol named SSL. TLS works by negotiating a shared secret that is then used to encrypt data. You can see the actual negotiation that happens by using the console browser based application curl, along with the -v parameter to see the verbose output of the HTTPS exchange. The > /dev/null redirection throws away the actual HTTP response, since we only care about the negotiation, by redirecting the output to the null device.</p>

<p>HTML and CSS<br>
Hypertext Markup Language<br>
HTML elements are represented with enclosing tags that may enclose other elements or text. For example, the paragraph element, and its associated tag (p), designate that the text is a structural paragraph of text. When we talk about tags we are referring to a delimited textual name that we use to designate the start and end of an HTML element as it appears in an HTML document. Tags are delimited with the less than (<) and greater than (>) symbols. A closing tag will also have a forward slash (/) before its name.<br>
We can continue adding structure to the page with additional elements. Each of these elements may contain other elements that provide the structure of our web page. The html element represents the top level page structure. The head element contains metadata about the page and the page title. The body element represents the content structure. The main element represents the main content structure, as opposed to things like headers, footers, asides, and navigation content. These additional elements result in the following HTML page.<br>
Every HTML element may have attributes. Attributes describe the specific details of the element. For example, the id attribute gives a unique ID to the element so that you can distinguish it from other elements. The class attribute is another common element attribute that designates the element as being classified into a named group of elements. Attributes are written inside the element tag with a name followed by an optional value. You can use either single quotes (') or double quotes (&quot;) to delimit attribute values.<br>
One of the core features that made the web so successful was the ability to create hyperlinks that take you from one page to another another with a simple click. A hyperlink in HTML is represented with an anchor (a) element that has an attribute containing the address of the hyperlink reference (href). A hyperlink to BYU's home page looks like this:<br>
element meaning<br>
html The page container<br>
head Header information<br>
title Title of the page<br>
meta Metadata for the page such as character set or viewport settings<br>
script JavaScript reference. Either a external reference, or inline<br>
include External content reference<br>
body The entire content body of the page<br>
header Header of the main content<br>
footer Footer of the main content<br>
nav Navigational inputs<br>
main Main content of the page<br>
section A section of the main content<br>
aside Aside content from the main content<br>
div A block division of content<br>
span An inline span of content<br>
h<1-9> Text heading. From h1, the highest level, down to h9, the lowest level<br>
p A paragraph of text<br>
b Bring attention<br>
table Table<br>
tr Table row<br>
th Table header<br>
td Table data<br>
ol,ul Ordered or unordered list<br>
li List item<br>
a Anchor the text to a hyperlink<br>
img Graphical image reference<br>
dialog Interactive component such as a confirmation<br>
form A collection of user input<br>
input User input field<br>
audio Audio content<br>
video Video content<br>
svg Scalable vector graphic content<br>
iframe Inline frame of another HTML page</p>

<p>Special characters<br>
HTML uses several reserved characters for defining its file format. If you want to use those characters in your content then you need to escape them using the entity syntax. For example, to display a less than symbol (<) you would instead use the less than entity (&amp;lt;). You can also use the entity syntax to represent any unicode character.</p>

<p>Character Entity<br>
&amp; &amp;amp;<br>
< &amp;lt;<br>
> &amp;gt;<br>
&quot; &amp;quot;<br>
' &amp;apos;<br>
&#55357;&#56832; &amp;#128512;<br>
HTML structure elements<br>
The two major purposes of HTML is to provide structure and content to your web application. Some of the common HTML structural elements include body, header, footer, main, section aside, p, table, ol/ul, div, and span. We demonstrate the use of each element with the following HTML document. It starts with the top level content body. The body has three children, a header, main, and footer. Each of the body children then contains other structural content.<br>
The header contains a paragraph with a span, and a navigation containing multiple divisions of sub-content.<br>
The main contains multiple sections that contain either an unordered list (ul) or a table. Main also contains an aside for content that does not fit the content flow of the sections.<br>
The footer has a content division with a single span.<br>
There is a distinction between structure elements that are block vs inline. A block element is meant to be a distinct block in the flow of the content structure. An inline element is meant to be inline with the content flow of a block element. In other words, inline elements do not disrupt the flow of a block element's content. For example, the block element div (division) could have an inline element b in order to bring attention to a portion of its sub-text. Likewise a p (paragraph) element could have a span to mark the paragraph's sub-text as a person's name.<br>
HTML input elements<br>
Element Meaning Example<br>
form Input container and submission <form action=&quot;form.html&quot; method=&quot;post&quot;><br>
fieldset Labeled input grouping <fieldset> ... </fieldset><br>
input Multiple types of user input <input type=&quot;&quot; /><br>
select Selection dropdown <select><option>1</option></select><br>
optgroup Grouped selection dropdown <optgroup><option>1</option></optgroup><br>
option Selection option <option selected>option2</option><br>
textarea Multiline text input <textarea></textarea><br>
label Individual input label <label for=&quot;range&quot;>Range: </label><br>
output Output of input <output for=&quot;range&quot;>0</output><br>
meter Display value with a known range <meter min=&quot;0&quot; max=&quot;100&quot; value=&quot;50&quot;></meter><br>
HTML media elements<br>
https://github.com/webprogramming260/.github/blob/main/profile/html/media/media.md<br>
Review right before ^<br>
The HTML elements that represent media include img, audio, video, svg, and canvas. The img, audio, and video elements are all simple references to an external file, but svg and canvas both contain the code for render a visual image that can even be animated.<br>
Cascading Style Sheets<br>
Cascading Style Sheets (CSS) converts the structure and content of HTML into a vibrant, responsive, experience. The initial objective of CSS was to simply style the HTML based upon the desires of the user, developer, and browser. In modern web applications CSS styling focuses more on helping the developer create complex renderings of dynamic content that is responsive to the actions of the user and the device the application is rendered on. With CSS a web programmer can animate the page, deploy custom fonts, respond to user actions, and dynamically alter the entire layout of the page based on the size of a device and its orientation.</p>

<p>Functionally, CSS is primarily concerned with defining rulesets, or simply a rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value.<br>
There are three ways that you can associate CSS with HTML. The first way is to use the style attribute of an HTML element and explicitly assign one or more declarations.<br>
The next way to associate CSS is to use the HTML style element to define CSS rules within the HTML document. The style element should appear in the head element of the document so that the rules apply to all elements of the document.<br>
Because elements inherit the rules applied to their parents you often end up with the same declaration property applied to a single element multiple times. For example, we might set color property for all body elements to be red, and then paragraph elements to be green, and then span elements to be blue, and finally use a style element on a specific span to be black.</p>

<p>Box model<br>
CSS defines everything as boxes. When you apply styles, you are applying them to a region of the display that is a rectangular box. Within an element's box there are several internal boxes. The innermost box holds the element's content. This is where things like the text or image of an element is displayed. Next comes the padding. The padding will inherit things like the background color. After padding is the border, which has properties like color, thickness and line style. The final box is the margin. The margin is considered external to the actual styling of the box and therefore only represents whitespace. It is important to understand each of these boxes so that you can achieve the desired visual result by applying the proper CSS declaration.<br>
By default, the width and height of an element is defined by the width and height of the content box. You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.<br>
CSS Selectors<br>
To start things off, we want to make all elements in the document use a sans-serif font. We can do this by using an element name selector. By selecting the body element we will cascade our declaration down to all the children of the body, which is the whole document.<br>
body {<br>
 font-family: sans-serif;<br>
}<br>
Next we want to change the color of the second level headings (h2), but we only want to do that within the sections for each department. To make that happen we can provide a descendant combinator that is defined with a space delimited list of values where each item in the list is a descendant of the previous item. So our selector would be all h2 elements that are descendants of section elements.<br>
section h2 {<br>
 color: #004400;<br>
}<br>
We can use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading.<br>
h2 ~ p {<br>
 padding-left: 0.5em;<br>
}<br>
The next selector we will use is the class selector. Remember that any element can have zero or more classification applied to it. For example, our document has a class of introduction applied to the first paragraph, and a class of summary applied to the final paragraph of each section. If we want to bold the summary paragraphs we would supply the class name summary prefixed with a period (.summary).<br>
p.summary {<br>
 font-weight: bold;<br>
}<br>
ID selectors reference the ID of an element. All IDs should be unique within an HTML document and so this select targets a specific element. To use the ID selector you prefix the ID with the hash symbol (#). We would like to showcase our physics department by putting a thin purple border along the left side of the physics section.<br>
Attribute selectors allow you to select elements based upon their attributes. You use an attribute selector to select any element with a given attribute (a[href]). You can also specify a required value for an attribute (a[href=&quot;./fish.png&quot;]) in order for the selector to match. Attribute selectors also support wildcards such as the ability to select attribute values containing specific text (&#96;p[href*=&quot;https://&quot;]).<br>
CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. We will give just one example. Suppose we what our purple highlight bar to appear only when the mouse hovers over the text. To accomplish this we can change our ID selector to select whenever a section is hovered over.<br>
section:hover {<br>
 border-left: solid 1em purple;<br>
}<br>
CSS Fonts<br>
To import a font: <br>
The CSS font-family property defines what fonts should be used. The property value represents an ordered list of fonts. The first font in the list that is available will be used. This ability to select from a list of fonts is important because different operating systems have different default fonts and your first choice may not be available.<br>
@font-face {<br>
 font-family: 'Quicksand';<br>
 src: url('https://cs260.click/fonts/quicksand.woff2');<br>
}</p>

<p>p {<br>
 font-family: Quicksand;<br>
}<br>
Or <br>
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&amp;display=swap');</p>

<p>p {<br>
 font-family: 'Rubik Microbe';<br>
}</p>

<p>CSS Animation<br>
Using CSS to animate your components is an easy way to make your application feel alive and interactive. You create CSS animations using the animation properties and defining keyframes for what the element should look like a different times in the animation. Let's walk through an example.<br>
Example: <br>
@keyframes demo {<br>
 from {<br>
 font-size: 0vh;<br>
 }</p>

<p> 95% {<br>
 font-size: 21vh;<br>
 }</p>

<p> to {<br>
 font-size: 20vh;<br>
 }<br>
}</p>

<p>
Responsive design<br>
If you display: one of the following it will give it a special formating<br>
none Don't display this element. The element still exists, but the browser will not render it.<br>
block Display this element with a width that fills its parent element. A p or div element has block display by default.<br>
inline Display this element with a width that is only as big as its content. A b or span element has block display by default.<br>
flex Display this element's children in a flexible orientation.<br>
grid Display this element's children in a grid orientation.</p>

<p>The grid stuff is cool<br>
CSS Flexbox<br>
Now we can use Flexbox to make it all come alive. We make the body element into a responsive flexbox by including the CSS display property with the value of flex. This tells the browser that all of the children of this element are to be displayed in a flex flow. We want our top level flexbox children to be column oriented and so we add the flex-direction property with a value of column. We then add some simple other declarations to zero out the margin and fill the entire viewport with our application frame.<br>
To get the division of space for the flexbox children correct we add the following flex properties to each of the children.<br>
header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.<br>
footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.<br>
main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because with want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side.<br>
Now we just need to add CSS to the control and content areas represented by the two child section elements. We want the controls to have 25% of the space and the content to have the remaining. So we set the flex property value to 1 and 3 respectively. That means that the controls get one unit of space and the content gets three units of space. No matter how we resize things this ratio will responsively remain.<br>
That completes our original design, but we also want to handle small screen sizes. To do this, we add some media queries that drop the header and footer if the viewport gets too short, and orients the main sections as rows if it gets too narrow.<br>
To support the narrow screen (portrait mode), we include a media query that detects when we are in portrait orientation and sets the flex-direction of the main element to be column instead of row. This causes the children to be stacked on top of each other instead of side by side.<br>
To handle making our header and footer disappear when the screen is to short to display them, we use a media query that triggers when our viewport height has a maximum value of 700 pixels. When that is true we change the display property for both the header and the footer to none so that they will be hidden. When that happens the main element becomes the only child and since it has a flex value of 1, it takes over everything.</p>

<p>JavaScript</p>

<p>General notes: to import a font in CSS say: <br>
@import url(&lsquo;https://fonts.googleapis.com/css?family=Quicksand&rsquo;);<br>
JavaScript introduction<br>
Single line comment: //<br>
Block comment /* */<br>
Not nessisary but good form to have a semicolon at the end of a statement<br>
Scope is defined with curly braces<br>
console.log(&lsquo;print this text&rsquo;);<br>
Use console.time(&lsquo;demo time&rsquo;) and console.timeEnd(&lsquo;demo time&rsquo;) to time things<br>
console.count(&lsquo;a&rsquo;) counts how many times you&rsquo;ve done it<br>
Adding JavaScript to HTML<br>
You can insert JavaScript into HTML either by directly including it in the HTML within the content of a <script> element, or using by the src attribute of the script element to reference an external JavaScript file.<br>
 script><br>
 function sayGoodbye() {<br>
 alert('Goodbye');<br>
 }<br>
 </script (with opening and closing tags)<br>
Or<br>
 script src=&quot;javascript.js&quot;></script (with opening and closing tags)</p>

<p></p>

<p></p>

<p>JavaScript type and construct<br>
Use either <br>
let x = 1;<br>
const y = 2;<br>
Don&rsquo;t use var it&rsquo;s been deprecated<br>
Null The type of a variable that has not been assigned a value.<br>
Undefined The type of a variable that has not been defined.<br>
Boolean true or false.<br>
Number A 64 bit signed number.<br>
BigInt A number of arbitrary magnitude.<br>
String A textual sequence of characters.<br>
Symbol A unique value.<br>
Object A collection of properties represented by name value pairs. Values can be of any type. {a:3, b:'fish'}<br>
Function An object that has the ability to be called. function a() {}<br>
Date Calendar dates and times. new Date('1995-12-17')<br>
Array An ordered sequence of any type. [3, 'fish']<br>
Map A collection of key value pairs that support efficient lookups. new Map()<br>
JSON A lightweight data-interchange format used to share information across programs. {&quot;a&quot;:3, &quot;b&quot;:&quot;fish&quot;}<br>
&#9888; The unexpected results happen in JavaScript because it uses complex rules for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as falsy and truthy evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.<br>
(strict equality is ===, == is just normal equality)</p>

<p>If else statements<br>
if (a === 1) {<br>
 //...<br>
} else if (b === 2) {<br>
 //...<br>
} else {<br>
 //...<br>
}</p>

<p>Loops<br>
for<br>
for (let i = 0; i < 2; i++) {<br>
 console.log(i);<br>
}<br>
// OUTPUT: 0 1<br>
Do while<br>
let i = 0;<br>
do {<br>
 console.log(i);<br>
 i++;<br>
} while (i < 2);<br>
// OUTPUT: 0 1</p>

<p>While<br>
let i = 0;<br>
while (i < 2) {<br>
 console.log(i);<br>
 i++;<br>
}<br>
// OUTPUT: 0 1</p>

<p> For in<br>
const obj = { a: 1, b: 'fish' };<br>
for (const name in obj) {<br>
 console.log(name);<br>
}<br>
// OUTPUT: a<br>
// OUTPUT: b</p>

<p>Break and continue<br>
let i = 0;<br>
while (true) {<br>
 console.log(i);<br>
 if (i === 0) {<br>
 i++;<br>
 continue;<br>
 } else {<br>
 break;<br>
 }<br>
}<br>
// OUTPUT: 0 1<br>
JavaScript string<br>
Strings are a primitive type in JavaScript. A string variable is specified by surround a sequence of characters with single quotes ('), double quotes (&quot;), or backticks (&#96;). The meaning of single or double quotes are equivalent, but the backtick defines a string literal that may contain JavaScript that is evaluated in place and concatenated into the string. A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using \n.<br>
String functions<br>
length The number of characters in the string<br>
indexOf The starting index of a given substring<br>
split Split the string into an array on the given delimiter string<br>
startsWith True if the string has a given prefix<br>
endsWith True if the string has a given suffix<br>
toLowerCase Converts all characters to lowercase<br>
Functions<br>
The basic syntax of a function begins with the function keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement my return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.<br>
function hello(who) {<br>
 return 'hello ' + who;<br>
}</p>

<p>console.log(hello('world'));<br>
// OUTPUT: hello world</p>

<p>A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.<br>
function hello(who) {<br>
 who.count++;<br>
 console.log('hello ' + who.name);<br>
}</p>

<p>hello({ name: 'world', count: 0 });<br>
// OUTPUT: hello world</p>

<p>Parameters<br>
function labeler(value, title = 'title') {<br>
 console.log(&#96;${title}=${value}&#96;);<br>
}</p>

<p>labeler();<br>
// OUTPUT: title=undefined</p>

<p>labeler('fish');<br>
// OUTPUT: title=fish</p>

<p>labeler('fish', 'animal');<br>
// OUTPUT: animal=fish</p>

<p>Anonymous functions<br>
Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.<br>
// Function that takes a function as a parameter<br>
function doMath(operation, a, b) {<br>
 return operation(a, b);<br>
}</p>

<p>// Anonymous function assigned to a variable<br>
const add = function (a, b) {<br>
 return a + b;<br>
};</p>

<p>console.log(doMath(add, 5, 3));<br>
// OUTPUT: 8</p>

<p>// Anonymous function assigned to a parameter<br>
console.log(<br>
 doMath(<br>
 function (a, b) {<br>
 return a - b;<br>
 },<br>
 5,<br>
 3<br>
 )<br>
);<br>
// OUTPUT: 2</p>

<p>
function labeler(value) {<br>
 function stringLabeler(value) {<br>
 console.log('string=' + value);<br>
 }<br>
 function numberLabeler(value) {<br>
 console.log('number=' + value);<br>
 }</p>

<p>Creating, passing and returning functions<br>
// Anonymous declaration of the function that is later assigned to a variable<br>
const add = function (a, b) {<br>
 return a + b;<br>
};</p>

<p>// Function that logs as a side effect of its execution<br>
function labeler(label, value) {<br>
 console.log(label + '=' + value);<br>
}</p>

<p>// Function that takes a function as a parameter and then executes the function as a side effect<br>
function addAndLabel(labeler, label, adder, a, b) {<br>
 labeler(label, adder(a, b));<br>
}</p>

<p>// Passing a function to a function<br>
addAndLabel(labeler, 'a+b', add, 1, 3);<br>
// OUTPUT: a+b=4</p>

<p>// Function that returns a function<br>
function labelMaker(label) {<br>
 return function (value) {<br>
 console.log(label + '=' + value);<br>
 };<br>
}</p>

<p>// Assign a function from the return value of the function<br>
const nameLabeler = labelMaker('name');</p>

<p>// Calling the returned function<br>
nameLabeler('value');<br>
// OUTPUT: name=value</p>

<p>
Inner functions<br>
 if (typeof value == 'string') {<br>
 stringLabeler(value);<br>
 } else if (typeof value == 'number') {<br>
 numberLabeler(value);<br>
 }<br>
}</p>

<p>labeler(5);<br>
// OUTPUT: number=5</p>

<p>labeler('fish');<br>
// OUTPUT: string=fish<br>
JavaScript arrow functions<br>
Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.</p>

<p>This is a function in arrow syntax that takes no parameters and always returns 3.</p>

<p>() => 3;<br>
The following two invocations of sort are equivalent.</p>

<p>const a = [1, 2, 3, 4];</p>

<p>// standard function syntax<br>
a.sort(function (v1, v2) {<br>
 return v1 - v2;<br>
});</p>

<p>// arrow function syntax<br>
a.sort((v1, v2) => v1 - v2);<br>
Besides being compact, the arrow function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.</p>

<p>Return values<br>
Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.</p>

<p>() => 3;<br>
// RETURNS: 3</p>

<p>() => {<br>
 3;<br>
};<br>
// RETURNS: undefined</p>

<p>() => {<br>
 return 3;<br>
};<br>
// RETURNS: 3<br>
This pointer<br>
Next, arrow functions inherit the this pointer from the scope of where it is created. This makes what is know as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript scope. For now consider the following example.</p>

<p>The function makeClosure returns an anonymous function using the arrow syntax. Notice that the a parameter is overridden, a new b variable is created, and both a and b are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.</p>

<p>function makeClosure(a) {<br>
 a = 'a2';<br>
 const b = 'b2';<br>
 return () => [a, b];<br>
}<br>
Next, we declare the variables a and b at the top level scope, and call makeClosure with a.</p>

<p>const a = 'a';<br>
const b = 'b';</p>

<p>const closure = makeClosure(a);<br>
Now, when we call closure function it will output the values contained in scope where it was created instead of the current values of the variables.</p>

<p>console.log(closure());<br>
// OUTPUT: ['a2', 'b2']</p>

<p>console.log(a, b);<br>
// OUTPUT: 'a' 'b'<br>
Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.</p>

<p>
JavaScript array<br>
push Add an item to the end of the array a.push(4)<br>
pop Remove an item from the end of the array x = a.pop<br>
slice Return a sub-array a.slice(1,-1)<br>
sort Run a function sort an array in place a.sort((a,b) => b-a)<br>
values Creates an iterator for use with a for of loop for (i of a.values()) {...}<br>
find Find the first item satisfied by a test function a.find(i => i < 2)<br>
forEach Run a function on each array item a.forEach(console.log)<br>
reduce Run a function to reduce each array item to a single item a.reduce((a, c) => a + c)<br>
map Run a function to map an array to a new array a.map(i => i+i)<br>
filter Run a function to remove items a.filter(i => i%2)<br>
every Run a function to test if all items match a.every(i => i < 3)<br>
some Run a function to test if any items match a.some(i => 1 < 1)</p>

<p>
JavaScript object and classes<br>
A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.</p>

<p>Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).</p>

<p>const obj = new Object();</p>

<p>obj.c = [1, 2, 3];<br>
obj.hello = function () {<br>
 console.log('hello');<br>
};</p>

<p>console.log(obj);<br>
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}<br>
The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.</p>

<p>&#9888; Note the different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.</p>

<p>Object-literals<br>
You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object.</p>

<p>const obj = {<br>
 a: 3,<br>
 b: 'fish',<br>
};<br>
Object functions<br>
Object has several interesting static functions associated with it. Here are some of the commonly used ones.</p>

<p>Function Meaning<br>
entries Returns an array of key value pairs<br>
keys Returns an array of keys<br>
values Returns an array of values<br>
const obj = {<br>
 a: 3,<br>
 b: 'fish',<br>
};</p>

<p>console.log(Object.entries(obj));<br>
// OUTPUT: [['a', 3], ['b', 'fish']]<br>
console.log(Object.keys(obj));<br>
// OUTPUT: ['a', 'b']<br>
console.log(Object.values(obj));<br>
// OUTPUT: [3, 'fish']<br>
Constructor<br>
Any function that returns an object is considered a constructor and can be invoked with the new operator.</p>

<p>function Person(name) {<br>
 return {<br>
 name: name,<br>
 };<br>
}</p>

<p>const p = new Person('Eich');<br>
console.log(p);<br>
// OUTPUT: {name: 'Eich'}<br>
Because objects can have any type of property value you can create methods on the object as part of its encapsulation.</p>

<p>function Person(name) {<br>
 return {<br>
 name: name,<br>
 log: function () {<br>
 console.log('My name is ' + this.name);<br>
 },<br>
 };<br>
}</p>

<p>const p = new Person('Eich');<br>
p.log();<br>
// OUTPUT: My name is Eich<br>
This pointer<br>
Notice in the last example the use of the keyword this when we referred to the name property (this.name). The meaning of this depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the this pointer in the instruction on scope.</p>

<p>Classes<br>
You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one off object. Class declarations looks similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.<br>
class Person {<br>
 constructor(name) {<br>
 this.name = name;<br>
 }</p>

<p> log() {<br>
 console.log('My name is ' + this.name);<br>
 }<br>
}</p>

<p>const p = new Person('Eich');<br>
p.log();<br>
// OUTPUT: My name is Eich<br>
You can make properties and functions of classes private by prefixing them with a #.</p>

<p>class Person {<br>
 #name;</p>

<p> constructor(name) {<br>
 this.#name = name;<br>
 }<br>
}</p>

<p>const p = new Person('Eich');<br>
p.#name = 'Lie';<br>
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class<br>
Inheritance<br>
Classes can be extended by using the extends keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the super function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the super keyword.</p>

<p>class Person {<br>
 constructor(name) {<br>
 this.name = name;<br>
 }</p>

<p> print() {<br>
 return 'My name is ' + this.name;<br>
 }<br>
}</p>

<p>class Employee extends Person {<br>
 constructor(name, position) {<br>
 super(name);<br>
 this.position = position;<br>
 }</p>

<p> print() {<br>
 return super.print() + '. I am a ' + this.position;<br>
 }<br>
}</p>

<p>const e = new Employee('Eich', 'programmer');<br>
console.log(e.print());<br>
// OUTPUT: My name is Eich. I am a programmer</p>

<p>JSON<br>
JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.</p>

<p>Format<br>
A JSON document contains one of the following data types:</p>

<p>Type Example<br>
string &quot;crockford&quot;<br>
number 42<br>
boolean true<br>
array [null,42,&quot;crockford&quot;]<br>
object {&quot;a&quot;:1,&quot;b&quot;:&quot;crockford&quot;}<br>
null null<br>
Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square braces and commas delimit arrays, and strings are always delimited with double quotes.</p>

<p>Here is an example of a JSON document.</p>

<p>{<br>
 &quot;class&quot;: {<br>
 &quot;title&quot;: &quot;web programming&quot;,<br>
 &quot;description&quot;: &quot;Amazing&quot;<br>
 },<br>
 &quot;enrollment&quot;: [&quot;Marco&quot;, &quot;Jana&quot;, &quot;&#1601;&#1614;&#1575;&#1591;&#1616;&#1605;&#1614;&#1577;&quot;],<br>
 &quot;start&quot;: &quot;2025-02-01&quot;,<br>
 &quot;end&quot;: null<br>
}<br>
JSON is always encoded with UTF-8. This allows for the representation of global data.</p>

<p>Converting to JavaScript<br>
You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.</p>

<p>const obj = { a: 2, b: 'crockford', c: undefined };<br>
const json = JSON.stringify(obj);<br>
const objFromJson = JSON.parse(json);</p>

<p>console.log(obj, json, objFromJson);</p>

<p>// OUTPUT:<br>
// {a: 2, b: 'crockford', c: undefined}<br>
// {&quot;a&quot;:2, &quot;b&quot;:&quot;crockford&quot;}<br>
// {a: 2, b: 'crockford'}<br>
Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.</p>

<p>
Regular expression<br>
Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.</p>

<p>You can create a regular expression using the class constructor or a regular expression literal.</p>

<p>const objRegex = new RegExp('ab*', 'i');<br>
const literalRegex = /ab*/i;<br>
The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.</p>

<p>const petRegex = /(dog)|(cat)|(bird)/gim;<br>
const text = 'Both cats and dogs are pets, but not rocks.';</p>

<p>text.match(petRegex);<br>
// RETURNS: ['cat', 'dog']</p>

<p>text.replace(petRegex, 'animal');<br>
// RETURNS: Both animals and animals are pets, but not rocks.</p>

<p>petRegex.test(text);<br>
// RETURNS: true</p>

<p>Rest and spread<br>
Rest<br>
Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number. You could write this using an array.</p>

<p>function hasNumber(test, numbers) {<br>
 return numbers.some((i) => i === test);<br>
}</p>

<p>const a = [1, 2, 3];<br>
hasNumber(2, a);<br>
// RETURNS: true<br>
However sometimes you don't have an array to work with. In this case you could create one on the fly.</p>

<p>function hasTwo(a, b, c) {<br>
 return hasNumber(2, [a, b, c]);<br>
}<br>
But JavaScript provides the rest syntax to make this easier. Think of it as a parameter that contains the rest of the parameters. To turn the last parameter of any function into a rest parameter you prefix it with three periods. You can then you can call it with any number of parameters and they are all automatically combined into an array.</p>

<p>function hasNumber(test, ...numbers) {<br>
 return numbers.some((i) => i === test);<br>
}</p>

<p>hasNumber(2, 1, 2, 3);<br>
// RETURNS: true<br>
Note that you can only make the last parameter a rest parameter. Otherwise JavaScript would not know which parameters to combine into the array.</p>

<p>Technically speaking, rest allows JavaScript to provide what is called variadic functions.</p>

<p>Spread<br>
Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following.</p>

<p>function person(firstName, lastName) {<br>
 return { first: firstName, last: lastName };<br>
}</p>

<p>const p = person(...['Ryan', 'Dahl']);<br>
console.log(p);<br>
// OUTPUT: {first: 'Ryan', last: 'Dahl'}<br>
Destructuring<br>
Destructuring, not to be confused with destructing, is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.</p>

<p>An example of destructuring arrays looks like the following.</p>

<p>const a = [1, 2, 4, 5];</p>

<p>// destructure the first two items from a, into the new variables b and c<br>
const [b, c] = a;</p>

<p>console.log(b, c);<br>
// OUTPUT: 1, 2<br>
Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array.</p>

<p>You can also combine multiple items from the original object using rest syntax.</p>

<p>const [b, c, ...others] = a;</p>

<p>console.log(b, c, others);<br>
// OUTPUT: 1, 2, [4,5]<br>
This works in a similar manner for objects. Except with arrays, the assignment of the associated value was assumed by the positions in the two arrays. When object destructuring, you explicitly specify the properties you want to pull from the source object.</p>

<p>const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };</p>

<p>const { a, c } = o;</p>

<p>console.log(a, c);<br>
// OUTPUT 1, ['fish', 'cats']<br>
You can also map the names to new variables instead of just using the original property names.</p>

<p>const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };</p>

<p>const { a: count, b: type } = o;</p>

<p>console.log(count, type);<br>
// OUTPUT 1, animals<br>
Default values may also be provided for missing ones.</p>

<p>const { a, b = 22 } = {};<br>
const [c = 44] = [];</p>

<p>console.log(a, b, c);<br>
// OUTPUT: undefined, 22, 44<br>
Note that all of the above examples created new constant variables, but you can also use destructuring to reassign existing variables.</p>

<p>let a = 22;</p>

<p>[a] = [1, 2, 3];</p>

<p>console.log(a);<br>
// OUTPUT: 1</p>

<p>
Exceptions<br>
JavaStript supports exception handling using the try catch and throw syntax. An exception can be triggered whenever your code generates an exception using the throw keyword, or whenever an exception is generated by the JavaScript runtime. For example, when an undefined variable is used.</p>

<p>To catch a thrown exception, you wrap a code block with the try keyword, and follow the try block with a catch block. If within the try block, including any functions that block calls, an exception is thrown then all of the code after the throw is ignored, the call stack is unwound, and the catch block is called.</p>

<p>In addition to a catch block, you can specify a finally block that is always called whenever the try block is exited regardless if an exception was ever thrown.</p>

<p>The basic syntax looks like the following.</p>

<p>try {<br>
 // normal execution code<br>
} catch (err) {<br>
 // exception handling code<br>
} finally {<br>
 // always called code<br>
}<br>
For example:</p>

<p>function connectDatabase() {<br>
 throw new Error('connection error');<br>
}</p>

<p>try {<br>
 connectDatabase();<br>
 console.log('never executed');<br>
} catch (err) {<br>
 console.log(err);<br>
} finally {<br>
 console.log('always executed');<br>
}</p>

<p>// OUTPUT: Error: connection error<br>
// always executed<br>
&#9888; When first using exception handling it is tempting to use it as way to handle normal flows of execution. For example, throwing a file not found exception when it is common for users to request nonexistent files. Throwing exceptions should only happen when something truly exceptional occurs. For example, a file not found exception when the file is required for your code to run, such as a required configuration file. You code will be easier to debug, and your logs more meaningful if you restrict exceptions to truly exceptional situations.</p>

<p>Fallbacks<br>
The fallback pattern is commonly implemented using exception handling. To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then a locally cached version of the last available scores is used. By providing a fallback, you can always return something, even if the desired feature is temporarily unavailable.</p>

<p>function getScores() {<br>
 try {<br>
 const scores = scoringService.getScores();<br>
 // store the scores so that we can use them later if the network is not available<br>
 window.localStorage.setItem('scores', scores);<br>
 return scores;<br>
 } catch {<br>
 return window.localStorage.getItem('scores');<br>
 }<br>
}</p>

<p>Scope<br>
Understanding JavaScript scope is essential for making your programs run as you expect. Scope is defined as the variables that are visible in the current context of execution. JavaScript has four different types of scope:</p>

<p>Gobal - Visible to all code<br>
Module - Visible to all code running in a module<br>
Function - Visible within a function<br>
Block - Visible within a block of code delimited by curly braces<br>
Var<br>
Initially JavaScript used the keyword var to declare a variable. The problem with var, unlike const or let, is that it ignores block scope. Variables declared with var are always logically hoisted to the top of the function. For example, the following code shows the same variable name being used within different enclosing scopes. However, because var ignores block scope the for loop is simply assigning a new value to x rather than declaring a new variable that has the same name.</p>

<p>var x = 10;<br>
console.log('start', x);</p>

<p>for (var x = 0; x < 1; x++) {<br>
 console.log('middle', x);<br>
}</p>

<p>console.log('end', x);</p>

<p>// OUTPUT: start 10<br>
// middle 0<br>
// end 1<br>
&#9888; There are few cases where it makes sense to use var. It is strongly suggested that you only use const and let unless you fully understand why you are using var.</p>

<p>This<br>
The keyword this represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The this variable is automatically declared and you can reference this anywhere in a JavaScript program. Because the value of this depends upon the context in which it is referenced, there are three different context that this can refer to:</p>

<p>Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.<br>
Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis.<br>
Object - When this is referenced in a object it refers to the object.<br>
'use strict';</p>

<p>// global scope<br>
console.log('global:', this);<br>
console.log('globalThis:', globalThis);</p>

<p>// function scope for a global function<br>
function globalFunc() {<br>
 console.log('globalFunctionThis:', this);<br>
}<br>
globalFunc();</p>

<p>// object scope<br>
class ScopeTest {<br>
 constructor() {<br>
 console.log('objectThis:', this);<br>
 }</p>

<p> // function scope for an object function<br>
 objectFunc() {<br>
 console.log('objectFunctionThis:', this);<br>
 }<br>
}</p>

<p>new ScopeTest().objectFunc();<br>
Running the above code in a browser results in the following.</p>

<p>global: Window<br>
globalThis: Window<br>
globalFunctionThis: undefined<br>
objectThis: ScopeTest<br>
objectFunctionThis: ScopeTest<br>
Note that if we were not using JavaScript strict mode then globalFunctionThis would refer to Window.</p>

<p>Closure<br>
A closure is defined as a function and its surrounding state. That means whatever variables are accessible when a function is created are available inside of that function. This holds true even if you pass the function outside of the scope of its original creation.</p>

<p>Here is an example of a function that is created as part of an object. That means that function has access to the object's this pointer.</p>

<p>globalThis.x = 'global';</p>

<p>const obj = {<br>
 x: 'object',<br>
 f: function () {<br>
 console.log(this.x);<br>
 },<br>
};</p>

<p>obj.f();<br>
// OUTPUT: object<br>
Arrow functions are a bit different because they inherit the this pointer of their creation context. So if we change our previous example to return an arrow function, then this pointer at the time of creation will be globalThis.</p>

<p>globalThis.x = 'global';</p>

<p>const obj = {<br>
 x: 'object',<br>
 f: () => console.log(this.x),<br>
};</p>

<p>obj.f();<br>
// OUTPUT: global<br>
However, if we make function in our object that returns an arrow function, then the this pointer will be the object's this pointer since that was the active context at the time the arrow function was created.</p>

<p>globalThis.x = 'global';</p>

<p>const obj = {<br>
 x: 'object',<br>
 make: function () {<br>
 return () => console.log(this.x);<br>
 },<br>
};</p>

<p>const f = obj.make();<br>
f();<br>
// OUTPUT: object</p>

<p>JS modules<br>
Because modules create a file based scope for the code they represent, you must explicitly export the objects that you want to be visible outside the module. For example, here is a simple module that exports a function that displays an alert.<br>
When you use CommonJS modules the Node.js runtime treats all JavaScript as if it were modules and so it works seamlessly. When you use ES modules in the browser, via HTML script references, things get a little more complicated. The key thing to understand is that modules can only be called from other modules. You cannot import a module object into a globally scoped JavaScript file.<br>
From your HTML, you can differentiate that you are using a ES module by including the type of module in the script element. You can then import and use other modules and even make a module's object visible in the global scope. In the example below, we expose the alertDisplay imported function by attaching it to the global JavaScript window object so that it can then be called from the button onclick handler.</p>

<p></p>

<p></p>

<p>DOM (document object model)<br>
Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree.<br>
You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.<br>
The DOM supports the ability insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.<br>
Injecting HTML<br>
The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.</p>

<p>const el = document.querySelector('div');<br>
el.innerHTML = '<div class=&quot;injected&quot;><b>Hello</b>!</div>';<br>
However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.</p>

<p><img src=&quot;bogus.png&quot; onerror=&quot;console.log('All your base are belong to us')&quot; /><br>
Make sure that if you are injecting HTML that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.</p>

<p>Event Listeners<br>
All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.</p>

<p>const submitDataEl = document.querySelector('#submitData');<br>
submitDataEl.addEventListener('click', function (event) {<br>
 console.log(event.type);<br>
});<br>
There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.</p>

<p>Event Category Description<br>
Clipboard Cut, copied, pasted<br>
Focus An element gets focus<br>
Keyboard Keys are pressed<br>
Mouse Click events<br>
Text selection When text is selected<br>
You can also add event listeners directly in the HTML. For example, here is a onclick handler that is attached to a button.</p>

<p><button onclick='alert(&quot;clicked&quot;)'>click me</button><br>
Promises<br>
JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript Promise. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.</p>

<p>pending - Currently running asynchronously<br>
fulfilled - Completed successfully<br>
rejected - Failed to complete<br>
You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.</p>

<p>We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.</p>

<p>const delay = (msg, wait) => {<br>
 setTimeout(() => {<br>
 console.log(msg, wait);<br>
 }, 1000 * wait);<br>
};</p>

<p>new Promise((resolve, reject) => {<br>
 // Code executing in the promise<br>
 for (let i = 0; i < 3; i++) {<br>
 delay('In promise', i);<br>
 }<br>
});</p>

<p>// Code executing after the promise<br>
for (let i = 0; i < 3; i++) {<br>
 delay('After promise', i);<br>
}</p>

<p>// OUTPUT:<br>
// In promise 0<br>
// After promise 0<br>
// In promise 1<br>
// After promise 1<br>
// In promise 2<br>
// After promise 2<br>
Resolving and rejecting<br>
Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.</p>

<p>Consider the following &quot;coin toss&quot; promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.</p>

<p>const coinToss = new Promise((resolve, reject) => {<br>
 setTimeout(() => {<br>
 if (Math.random() > 0.5) {<br>
 resolve('success');<br>
 } else {<br>
 reject('error');<br>
 }<br>
 }, 10000);<br>
});<br>
If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.</p>

<p>console.log(coinToss);<br>
// OUTPUT: Promise {<pending>}<br>
If you then wait ten seconds and the log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.</p>

<p>console.log(coinToss);<br>
// OUTPUT: Promise {<fulfilled>}<br>
Then, catch, finally<br>
With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.</p>

<p>We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either heads or tails.</p>

<p>const coinToss = new Promise((resolve, reject) => {<br>
 setTimeout(() => {<br>
 if (Math.random() > 0.1) {<br>
 resolve(Math.random() > 0.5 ? 'heads' : 'tails');<br>
 } else {<br>
 reject('fell off table');<br>
 }<br>
 }, 10000);<br>
});<br>
We then chain the then, catch and finally functions to the coinToss object in order to handle each of the possible results.</p>

<p>coinToss<br>
 .then((result) => console.log(&#96;Coin toss result: ${result}&#96;))<br>
 .catch((err) => console.log(&#96;Error: ${err}&#96;))<br>
 .finally(() => console.log('Toss completed'));</p>

<p>// OUTPUT:<br>
// Coin toss result: tails<br>
// Toss completed<br>
The observer pattern<br>
Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The Observer pattern, popularized by web programming frameworks such as Angular, use a model called Observer. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.</p>

<p>Async/await<br>
JavaScript Promise objects are great for asynchronous execution, but as developers began build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the async/await syntax. The await keyword wraps the execution of a promise and removed the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected. For example, if we have a function that returns a coin toss promise.</p>

<p>const coinToss = () => {<br>
 return new Promise((resolve, reject) => {<br>
 setTimeout(() => {<br>
 if (Math.random() > 0.1) {<br>
 resolve(Math.random() > 0.5 ? 'heads' : 'tails');<br>
 } else {<br>
 reject('fell off table');<br>
 }<br>
 }, 1000);<br>
 });<br>
};<br>
We can create equivalent executions with either a promise then/catch chain, or an await with a try/catch block.</p>

<p>then/catch chain version</p>

<p>coinToss()<br>
 .then((result) => console.log(&#96;Toss result ${result}&#96;))<br>
 .catch((err) => console.error(&#96;Error: ${err}&#96;))<br>
 .finally(() => console.log(&#96;Toss completed&#96;));<br>
async, try/catch version</p>

<p>try {<br>
 const result = await coinToss();<br>
 console.log(&#96;Toss result ${result}&#96;);<br>
} catch (err) {<br>
 console.error(&#96;Error: ${err}&#96;);<br>
} finally {<br>
 console.log(&#96;Toss completed&#96;);<br>
}<br>
async<br>
One important restriction for working with await is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword. Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.</p>

<p>This can be demonstrated with a function that makes animal noises. Notice that the return value is a simple string.</p>

<p>function cow() {<br>
 return 'moo';<br>
}<br>
console.log(cow());<br>
// OUTPUT: moo<br>
If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and has a value that is the return value of the function.</p>

<p>async function cow() {<br>
 return 'moo';<br>
}<br>
console.log(cow());<br>
// OUTPUT: Promise {<fulfilled>: 'moo'}<br>
We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates.</p>

<p>async function cow() {<br>
 return new Promise((resolve) => {<br>
 resolve('moo');<br>
 });<br>
}<br>
console.log(cow());<br>
// OUTPUT: Promise {<pending>}<br>
You can see that the promise is in the pending state because the promise's execution function has not yet resolved.</p>

<p>await<br>
The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.</p>

<p>We can demonstrate await in action with the cow promise from above. If we log the output from invoking cow then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.</p>

<p>console.log(cow());<br>
// OUTPUT: Promise {<pending>}</p>

<p>console.log(await cow());<br>
// OUTPUT: moo<br>
By combining async, to define functions that return promises, with await, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.</p>

<p>Putting it all together<br>
You can see the benefit for async/await clearly by considering a case where multiple promises are required. For example, when calling the fetch web API on an endpoint that returns JSON, you would need to resolve two promises. One for the network call, and one for converting the result to JSON. A promise implementation would look like the following.</p>

<p>const httpPromise = fetch('https://simon.cs260.click/api/user/me');<br>
const jsonPromise = httpPromise.then((r) => r.json());<br>
jsonPromise.then((j) => console.log(j));<br>
console.log('done');</p>

<p>// OUTPUT: done<br>
// OUTPUT: {email: 'bud@mail.com', authenticated: true}<br>
With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.</p>

<p>const httpResponse = await fetch('https://simon.cs260.click/api/user/me');<br>
const jsonResponse = await httpResponse.json();<br>
console.log(jsonResponse));<br>
console.log('done');</p>

<p>// OUTPUT: {email: 'bud@mail.com', authenticated: true}<br>
// OUTPUT: done</p>

<p></p>

<p></p>

<p></p>

<p></p>
