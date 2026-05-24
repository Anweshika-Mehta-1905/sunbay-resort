Sunset Bay Resort & Spa - JavaScript Project
Student Name: ANWESHIKA MEHTA
Registration Number: 24BCE0790
Course: JavaScript IA3 Lab Assignment
Institution: VIT (Vellore Institute of Technology)

📋 Project Overview
This project demonstrates a fully functional hotel website with interactive JavaScript features. The website includes room booking functionality, interactive elements, and all 10 required JavaScript concepts.

📁 Project Structure
project-folder/
├── index.html (or your HTML filename)
├── style.css
├── 24BCE0790_IA3_L1_JS_ANWESHIKA_MEHTA.js
└── README.md
Important: All files must be in the same folder!

🚀 How to Run the Project
Method 1: Direct Opening

Download all project files to the same folder
Double-click on the HTML file
It will open in your default browser
Press F12 to open Developer Console and see JavaScript outputs

Method 2: Using VS Code (Recommended)

Open the project folder in VS Code
Install "Live Server" extension
Right-click on HTML file → "Open with Live Server"
Browser will open automatically
Press F12 to see console outputs


✅ 10 JavaScript Features Implemented
1. JavaScript Display Output (4 Methods)

console.log() - Outputs to browser console
document.write() - Writes to HTML document (commented out)
innerHTML - Dynamically updates page content (green welcome message)
alert() - Shows popup dialog box

Where to see: Open console (F12), welcome message appears at top of page

2. JavaScript Variables (4 Declaration Methods)

var - Function-scoped variable: resortName
let - Block-scoped variable: currentGuests
const - Constant variable: MAX_CAPACITY
Implicit global - Shown but commented (not recommended)

Where to see: Console displays all variable values on page load

3. Popup or Dialog Boxes (3 Types)

alert() - Simple notification popup
confirm() - Yes/No question dialog
prompt() - User input dialog

How to test:

Alert popup appears automatically after 1 second
Type showConfirmBox() in console
Type showPromptBox() in console


4. Conditional Structure (3 Types)

if-else - checkRoomAvailability() function
switch - getDiningRecommendation() function
Ternary operator - calculateDiscount() function

How to test (in console):
javascriptcheckRoomAvailability('deluxe')
getDiningRecommendation('breakfast')
calculateDiscount(5)

5. JavaScript Loops (5 Types)

for loop - Standard counter loop
for...in loop - Iterates over object properties
for...of loop - Iterates over array values
while loop - Condition-checked loop
do...while loop - Executes at least once

Where to see: Console shows all loop outputs automatically on page load
How to test: Type demonstrateLoops() in console

6. JavaScript Objects

Object literal - resort object with properties and methods
Constructor function - Guest() constructor
Object methods - displayInfo(), checkAvailability()

How to test (in console):
javascriptresort.displayInfo()
resort.checkAvailability('deluxe')

7. JavaScript Arrays (3 Categories)
a) Creating and Accessing Arrays

Create arrays
Access by index
Use array properties (length)
Join array elements

How to test: Type displayFacilities() in console
b) Shifting Elements

shift() - Remove first element
unshift() - Add to beginning
push() - Add to end
pop() - Remove last element

How to test: Type shiftingElements() in console
c) Splicing and Slicing

slice() - Copy portion (non-destructive)
splice() - Remove/insert elements (destructive)

How to test: Type splicingAndSlicing() in console

8. Forms (4 Features)
a) Form Validation
Validates:

Name (minimum 3 characters)
Email (valid format)
Phone (10-digit Indian number starting with 6-9)
Check-in/Check-out dates
Room type selection

How to test: Fill and submit the booking form
b) Form Element Controls

Submit button disabled until terms checkbox is checked
Dynamic enable/disable functionality

How to test: Try submitting without checking the terms checkbox
c) Text Control

Character counter (shows in console)
Auto-uppercase conversion on blur

How to test: Type in the name field and click outside
d) Reset and Focus Methods

resetForm() - Clears all form fields
focusFirstField() - Sets focus to name field

How to test: Click "Reset Form" button or type functions in console

9. Event Handler Attributes (3 Types)
a) onchange
Triggers when room type is selected from dropdown
How to test: Select a room type from the booking form dropdown
b) onmouseover
Triggers when mouse hovers over room cards
How to test: Hover your mouse over any room card (they grow and get shadow)
c) onmouseout
Triggers when mouse leaves the card area
How to test: Move mouse away from card (returns to normal)

10. External JavaScript
The entire JavaScript code is in a separate .js file linked to HTML
Implementation: <script src="24BCE0790_IA3_L1_JS_ANWESHIKA_MEHTA.js"></script>

🎯 Interactive Features on the Page
Automatic Features (No Action Needed):

✅ Welcome message appears at top (innerHTML)
✅ Console logs all demonstrations
✅ Alert popup after 1 second
✅ All loops run automatically
✅ Array operations shown in console

Interactive Features (User Action Required):

🖱️ Hover over room cards → Cards animate (grow + shadow)
📝 Type in name field → Character count in console + auto-uppercase
✅ Check terms checkbox → Submit button becomes enabled
📋 Select room type → Alert shows price
📤 Submit form → Validation runs with error/success messages
🔄 Click Reset → Form clears


🧪 Testing Guide
Step 1: Open the Page

Open HTML file in browser
Press F12 to open Developer Tools
Go to Console tab

Step 2: Check Automatic Features
You should immediately see:
JavaScript loaded - ANWESHIKA MEHTA 24BCE0790
Sunset Bay Resort Initialized

=== For Loop ===
Room 1: Deluxe
Room 2: Executive
...
Step 3: Test Interactive Features
Test Popups:
javascriptshowAlertBox()      // Shows welcome alert
showConfirmBox()    // Shows yes/no dialog
showPromptBox()     // Shows input dialog
Test Conditionals:
javascriptcheckRoomAvailability('deluxe')     // Returns room info
getDiningRecommendation('dinner')   // Returns dining info
calculateDiscount(7)                // Returns discount %
Test Loops:
javascriptdemonstrateLoops()  // Runs all 5 loop types
Test Arrays:
javascriptdisplayFacilities()      // Shows array access methods
shiftingElements()       // Shows shift/unshift/push/pop
splicingAndSlicing()     // Shows slice/splice methods
Test Objects:
javascriptresort.displayInfo()              // Shows resort info
resort.checkAvailability('premium')  // Check room availability
Test Form:

Fill out booking form with invalid data → See error messages
Fill with valid data → See success message
Type in name field → Watch console for character count
Check/uncheck terms → Submit button enables/disables
Click "Reset Form" → All fields clear


📊 Console Commands Reference
Open console (F12) and try these commands:
Popup Functions:
javascriptshowAlertBox()
showConfirmBox()
showPromptBox()
Conditional Functions:
javascriptcheckRoomAvailability('deluxe')
checkRoomAvailability('premium')
getDiningRecommendation('breakfast')
getDiningRecommendation('lunch')
calculateDiscount(3)
calculateDiscount(10)
Loop Functions:
javascriptdemonstrateLoops()
Array Functions:
javascriptdisplayFacilities()
shiftingElements()
splicingAndSlicing()
Object Methods:
javascriptresort.displayInfo()
resort.checkAvailability('executive')
resort.rooms.deluxe
Form Functions:
javascriptresetForm()
focusFirstField()

🐛 Troubleshooting
Problem: JavaScript not working
Solution 1: Check file location

All files must be in the same folder
Check filename spelling (case-sensitive!)

Solution 2: Check script tag in HTML
html<!-- Should be before </body> -->
<script src="24BCE0790_IA3_L1_JS_ANWESHIKA_MEHTA.js"></script>
</body>
Solution 3: Check console for errors

Press F12
Look for red error messages
Most common: "Failed to load resource" = wrong file path


Problem: No console output
Solution: Make sure you're in the Console tab

Press F12
Click "Console" tab (not Elements or Network)
Refresh the page (Ctrl+R or Cmd+R)


Problem: Form not validating
Solution: Check form IDs match JavaScript

Name field: id="guest-name"
Email field: id="guest-email"
Phone field: id="guest-phone"
Date fields: id="check-in" and id="check-out"
Room select: id="room-type"
Terms checkbox: id="terms-checkbox"
Submit button: id="submit-btn"


Problem: Hover effects not working
Solution: Make sure your HTML has elements with class="card"
html<div class="card">
    <!-- content -->
</div>

📝 Feature Checklist
Use this to verify all features are working:
Display Output:

 console.log() - Check console
 innerHTML - Green welcome message visible
 alert() - Popup appears after 1 second

Variables:

 var, let, const displayed in console

Popups:

 alert() - Works
 confirm() - Works
 prompt() - Works

Conditionals:

 if-else - checkRoomAvailability() works
 switch - getDiningRecommendation() works
 ternary - calculateDiscount() works

Loops:

 for - Console output visible
 for...in - Console output visible
 for...of - Console output visible
 while - Console output visible
 do...while - Console output visible

Objects:

 Object literal created (resort)
 Constructor function created (Guest)
 Object methods work

Arrays:

 Creating/accessing - Works
 Shifting elements - Works
 Splicing/slicing - Works

Forms:

 Validation - Works with errors
 Element controls - Checkbox enables button
 Text control - Character count + uppercase
 Reset/focus - Works

Event Handlers:

 onchange - Room select shows alert
 onmouseover - Cards grow on hover
 onmouseout - Cards return to normal

External JS:

 JavaScript file properly linked
 All features working


💻 Browser Compatibility
Tested and working on:

✅ Google Chrome (Recommended)
✅ Mozilla Firefox
✅ Microsoft Edge
✅ Safari


📚 Technologies Used

HTML5 - Structure and semantic markup
CSS3 - Styling, positioning, animations
JavaScript (ES6) - All interactive functionality

Variables (var, let, const)
Functions
Objects and Arrays
DOM Manipulation
Event Handlers
Form Validation
Loops and Conditionals




🎓 Learning Outcomes
This project demonstrates:

✅ Understanding of JavaScript fundamentals
✅ DOM manipulation techniques
✅ Event handling and user interaction
✅ Form validation and control
✅ Object-oriented programming basics
✅ Array and string manipulation
✅ Debugging using console
✅ Integration of HTML, CSS, and JavaScript


📞 Support
If you encounter any issues:

Check the Troubleshooting section above
Make sure all files are in the same folder
Verify file names match exactly
Check browser console for error messages


📄 File Descriptions
24BCE0790_IA3_L1_JS_ANWESHIKA_MEHTA.js

Main JavaScript file containing all 10 features
290 lines of clean, functional code
Well-commented and organized by feature

index.html (or your HTML file)

Hotel website structure
Booking form
Navigation and content sections
Links to CSS and JavaScript

style.css

Complete styling for the website
Responsive design elements
Animations and transitions


🏆 Assignment Completion Status
✅ Feature 1: JavaScript Display Output (4 methods) - COMPLETE
✅ Feature 2: JavaScript Variables (4 ways) - COMPLETE
✅ Feature 3: Popup Boxes (3 types) - COMPLETE
✅ Feature 4: Conditional Structure (3 types) - COMPLETE
✅ Feature 5: JavaScript Loops (5 types) - COMPLETE
✅ Feature 6: JavaScript Objects - COMPLETE
✅ Feature 7: JavaScript Arrays (3 operations) - COMPLETE
✅ Feature 8: Forms (4 features) - COMPLETE
✅ Feature 9: Event Handlers (3 types) - COMPLETE
✅ Feature 10: External JavaScript - COMPLETE
Total: 10/10 Features Implemented ✅

📅 Project Information
Project Title: Sunset Bay Resort & Spa Interactive Website
Assignment: JavaScript IA3 Lab 1
Student: ANWESHIKA MEHTA
Registration: 24BCE0790
Date: 2026
Status: Complete

🌟 Key Features Highlight

Interactive Booking System with complete validation
Real-time Form Controls with dynamic enable/disable
Hover Effects on cards with smooth animations
Console Demonstrations of all JavaScript concepts
Clean, Maintainable Code with minimal comments
User-Friendly Interface with clear feedback
Professional Design suitable for real hotel website


Thank you for reviewing this project! 🎉

© 2026 ANWESHIKA MEHTA - VIT University
