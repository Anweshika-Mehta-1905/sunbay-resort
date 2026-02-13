/* 24BCE0790_IA3_L1_JS_ANWESHIKA_MEHTA.js
   ANWESHIKA MEHTA | 24BCE0790 */

// 1. DISPLAY OUTPUT (4 methods)
function demonstrateDisplayMethods() {
    console.log("Welcome to Sunset Bay Resort & Spa!");
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = "<p style='text-align:center; color:#4CAF50; padding:20px; background:#e8f5e9; margin:20px;'>✨ Welcome! ✨</p>";
    document.body.insertBefore(welcomeDiv, document.body.firstChild);
    alert("Thank you for visiting Sunset Bay Resort!");
}

// 2. VARIABLES (4 ways)
var resortName = "Sunset Bay Resort & Spa";
let currentGuests = 45;
const MAX_CAPACITY = 100;

console.log("Resort Name (var):", resortName);
console.log("Current Guests (let):", currentGuests);
console.log("Max Capacity (const):", MAX_CAPACITY);

// 3. POPUPS (3 types)
function showAlertBox() {
    alert("Welcome to Sunset Bay Resort & Spa!\nYour comfort is our priority.");
}

function showConfirmBox() {
    const userResponse = confirm("Would you like to receive special offers?");
    alert(userResponse ? "Great! You'll receive our exclusive deals." : "No problem!");
}

function showPromptBox() {
    const guestName = prompt("Please enter your name:", "Guest");
    if (guestName && guestName.trim() !== "") {
        alert(`Welcome, ${guestName}! Enjoy your stay.`);
    }
}

// 4. CONDITIONALS (if-else, switch, ternary)
function checkRoomAvailability(roomType) {
    if (roomType === "deluxe") return "Deluxe Room Available - ₹6,500 per night";
    else if (roomType === "executive") return "Executive Room Available - ₹8,500 per night";
    else if (roomType === "premium") return "Premium Suite Available - ₹10,500 per night";
    else if (roomType === "presidential") return "Presidential Suite Available - ₹14,000 per night";
    else return "Please select a valid room type";
}

function getDiningRecommendation(mealTime) {
    switch(mealTime.toLowerCase()) {
        case "breakfast": return "Continental Breakfast Buffet (7:00 AM - 10:30 AM)";
        case "lunch": return "Indian Thali (12:30 PM - 3:30 PM)";
        case "dinner": return "Fine Dining (7:00 PM - 11:00 PM)";
        default: return "Restaurant open throughout the day!";
    }
}

function calculateDiscount(nights) {
    const discount = nights >= 7 ? 20 : nights >= 3 ? 10 : 0;
    return `You get ${discount}% discount!`;
}

// 5. LOOPS (for, for/in, for/of, while, do/while)
function demonstrateLoops() {
    const roomTypes = ["Deluxe", "Executive", "Premium", "Presidential"];
    const roomPrices = {deluxe: 6500, executive: 8500, premium: 10500, presidential: 14000};
    
    console.log("=== For Loop ===");
    for (let i = 0; i < roomTypes.length; i++) {
        console.log(`Room ${i + 1}: ${roomTypes[i]}`);
    }
    
    console.log("=== For...In Loop ===");
    for (let room in roomPrices) {
        console.log(`${room}: ₹${roomPrices[room]}`);
    }
    
    console.log("=== For...Of Loop ===");
    for (let room of roomTypes) {
        console.log(`Available: ${room} Room`);
    }
    
    console.log("=== While Loop ===");
    let count = 0;
    while (count < 3) {
        console.log(`Facility ${count + 1}: Available`);
        count++;
    }
    
    console.log("=== Do...While Loop ===");
    let index = 0;
    do {
        console.log(`Service ${index + 1}: Active`);
        index++;
    } while (index < 3);
}

// 6. OBJECTS
const resort = {
    name: "Sunset Bay Resort & Spa",
    location: "Vellore, Tamil Nadu",
    phone: "+91 98765 43210",
    rating: 4.8,
    rooms: {
        deluxe: { price: 6500, available: 5 },
        executive: { price: 8500, available: 3 },
        premium: { price: 10500, available: 2 },
        presidential: { price: 14000, available: 1 }
    },
    displayInfo: function() {
        return `${this.name} - Located at ${this.location}`;
    },
    checkAvailability: function(roomType) {
        return this.rooms[roomType] ? `${roomType} rooms available: ${this.rooms[roomType].available}` : "Room type not found";
    }
};

function Guest(name, checkIn, checkOut, roomType) {
    this.name = name;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.roomType = roomType;
    
    this.getStayDuration = function() {
        const start = new Date(this.checkIn);
        const end = new Date(this.checkOut);
        return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    };
    
    this.calculateTotal = function() {
        const nights = this.getStayDuration();
        const pricePerNight = resort.rooms[this.roomType].price;
        return nights * pricePerNight;
    };
}

// 7. ARRAYS
const facilities = ["Swimming Pool", "Spa & Wellness", "Fitness Gym", "Free Wi-Fi"];

function displayFacilities() {
    console.log("=== Facilities ===");
    console.log("Total:", facilities.length);
    console.log("First:", facilities[0]);
    console.log("Last:", facilities[facilities.length - 1]);
    console.log("All:", facilities.join(", "));
}

function shiftingElements() {
    let services = ["Breakfast", "Lunch", "Dinner"];
    console.log("Original:", services);
    
    let removed = services.shift();
    console.log("After shift():", services, "| Removed:", removed);
    
    services.unshift("Early Morning Tea");
    console.log("After unshift():", services);
    
    services.push("Midnight Snack");
    console.log("After push():", services);
    
    let lastRemoved = services.pop();
    console.log("After pop():", services, "| Removed:", lastRemoved);
}

function splicingAndSlicing() {
    let roomServices = ["Housekeeping", "Laundry", "Mini Bar", "Room Service", "Ironing"];
    console.log("Original:", roomServices);
    
    let basicServices = roomServices.slice(0, 3);
    console.log("Sliced:", basicServices);
    
    let removed = roomServices.splice(2, 2);
    console.log("After splice:", roomServices);
    
    roomServices.splice(1, 0, "Dry Cleaning", "Shoe Shine");
    console.log("After insertion:", roomServices);
}

// 8. FORMS
function validateBookingForm(event) {
    event.preventDefault();
    
    let isValid = true;
    let errors = [];
    
    const name = document.getElementById('guest-name').value.trim();
    const email = document.getElementById('guest-email').value.trim();
    const phone = document.getElementById('guest-phone').value.trim();
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const roomType = document.getElementById('room-type').value;
    
    if (name === '' || name.length < 3) {
        errors.push('Name must be at least 3 characters');
        isValid = false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push('Invalid email address');
        isValid = false;
    }
    
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        errors.push('Invalid phone number');
        isValid = false;
    }
    
    if (!checkIn || !checkOut) {
        errors.push('Select dates');
        isValid = false;
    }
    
    if (roomType === '') {
        errors.push('Select room type');
        isValid = false;
    }
    
    if (!isValid) {
        alert('Errors:\n' + errors.join('\n'));
        return false;
    } else {
        alert('Booking validated!\nName: ' + name + '\nRoom: ' + roomType);
        return true;
    }
}

function formElementControls() {
    const submitBtn = document.getElementById('submit-btn');
    const termsCheckbox = document.getElementById('terms-checkbox');
    
    if (termsCheckbox && submitBtn) {
        submitBtn.disabled = true;
        termsCheckbox.onchange = function() {
            submitBtn.disabled = !this.checked;
        };
    }
}

function textControl() {
    const textInput = document.getElementById('guest-name');
    if (textInput) {
        textInput.oninput = function() {
            console.log('Characters:', this.value.length);
        };
        textInput.onblur = function() {
            this.value = this.value.toUpperCase();
        };
    }
}

function resetForm() {
    const form = document.getElementById('booking-form');
    if (form) {
        form.reset();
        alert('Form reset!');
    }
}

function focusFirstField() {
    const firstField = document.getElementById('guest-name');
    if (firstField) {
        firstField.focus();
        firstField.select();
    }
}

// 9. EVENT HANDLERS
function handleRoomTypeChange() {
    const roomSelect = document.getElementById('room-type');
    if (roomSelect) {
        roomSelect.onchange = function() {
            const prices = {'deluxe': '₹6,500', 'executive': '₹8,500', 'premium': '₹10,500', 'presidential': '₹14,000'};
            if (this.value) {
                alert(`Selected: ${this.value.toUpperCase()}\nPrice: ${prices[this.value]} per night`);
            }
        };
    }
}

function setupHoverEffects() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.onmouseover = function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
            this.style.transition = 'all 0.3s ease';
            this.style.backgroundColor = '#fffbf0';
        };
        card.onmouseout = function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.backgroundColor = 'transparent';
        };
    });
}

// 10. EXTERNAL JAVASCRIPT
console.log("JavaScript loaded - ANWESHIKA MEHTA 24BCE0790");

// INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    console.log("Sunset Bay Resort Initialized\n");
    
    demonstrateLoops();
    displayFacilities();
    shiftingElements();
    splicingAndSlicing();
    
    handleRoomTypeChange();
    setupHoverEffects();
    formElementControls();
    textControl();
    
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', validateBookingForm);
    }
    
    demonstrateDisplayMethods();
    
    console.log("All features loaded!\n");
    
    setTimeout(function() {
        showAlertBox();
    }, 1000);
});
