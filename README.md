**Student Finance Tracker**

0. Overview

The Student Finance Tracker is a web-based application designed to help students manage and monitor their personal expenses. 

The application allows users to:
- Add and delete transactions
- Track total spending
- View a dashboard summary
- Set a spending cap
- Persist data using LocalStorage
- Run basic module tests

This project was built using modular JavaScript (ES Modules), semantic HTML, and responsive CSS.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

1. Features

. Transaction Management

- Add new expense records
- Validate input fields
- Delete transactions
- Automatically update dashboard totals

. Dashboard


- Total number of records
- Total amount spent
- Basic spending summary
- Spending cap indicator

. Data Persistence


- Data is saved in LocalStorage
- Automatically loads saved transactions on page refresh

. Modular Architecture


JavaScript is split into separate modules:

- `state.js` → Manages application state
- `storage.js` → Handles LocalStorage logic
- `validators.js` → Validates form input
- `search.js` → Provides search/filter functionality
- `ui.js` → Handles DOM rendering
- `main.js` → Main controller and event listeners

--------------------------------------------------------------------------------------------------------------------

2. Folder Structure

student-finance-tracker/
│
├── index.html
├── README.md
├── seed.json
├── tests.html
│
├── styles/
│ └── main.css
│
└── scripts/
├── state.js
├── storage.js
├── validators.js
├── ui.js
├── search.js
└── main.js

----------------------------------------------------------------------------------------------------------------

3. Technologies Used

- HTML5 (Semantic structure)
- CSS3 (Mobile-first responsive design)
- JavaScript (ES6 Modules)
- LocalStorage API

--------------------------------------------------------------------------------------------------------------------

4. How to Run the Project

. Clone the repository: git clone https://github.com/n.yves01/student-finance-tracker.git

. Open the project folder.

. Open `index.html` in a modern browser.

No additional dependencies or build tools are required.

-----------------------------------------------------------------------------------------------------------------------

5. Running Tests

Open: (tests.html)

------------------------------------------------------------------------------------------------------------------------

6. Design Decisions

- Mobile-first CSS layout
- Modular JavaScript structure for maintainability
- Separation of concerns (state, storage, UI, validation)
- Accessibility considerations (skip link, labels, aria-live regions)

-------------------------------------------------------------------------------------------------------------------------------

7. Future Improvements

- Add charts for visual spending trends
- Add edit functionality for transactions
- Category-based filtering
- Export data as CSV
- Dark mode support

------------------------------------------------------------------------------------------------------------------------------------

8. Author

NYIRIHIRWE yves  
2026


