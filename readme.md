# 📚 StudyBud — Campus Study Resource Hub

StudyBud is a responsive, client-side web application designed for university and college students to explore, share, and manage peer-recommended academic study materials. Built with modern semantic HTML5, pure CSS3 (Apple/iOS-inspired design), and Vanilla JavaScript, StudyBud features real-time search, category filtering, browser-based data persistence, and interactive analytics.

---

## 🌟 Key Features

### 📖 Resource Explorer (`index.html`)
- Live full-text search by course code (e.g., `CS101`, `MATH202`) or topic title.
- Dynamic filtering by category:
  - Lecture Notes
  - Study Guides
  - Practice Quizzes
  - Cheatsheets
- Responsive card-based layout with thumbnail previews.
- Fast, intuitive browsing experience.

### ➕ Resource Submission (`add-resource.html`)
- User-friendly form for contributing new study resources.
- Client-side validation for all required fields.
- Custom URL validation ensuring valid `http://` or `https://` links.
- Instant feedback messages after successful submissions.

### 📊 Analytics & Management Dashboard (`dashboard.html`)
- Displays real-time statistics including:
  - Total resources
  - Number of unique courses
  - Most popular categories
- Interactive resource management table.
- Delete resources with automatic synchronization to browser storage.

### 💾 Data Persistence
- Uses browser **LocalStorage** to save resources.
- Added or deleted resources remain available after page refresh.
- Automatically loads **12 default academic resources** (3 per category) during the first visit.

### 🍎 Apple / iOS Inspired Design
- Modern interface using Apple's system fonts:
  - `-apple-system`
  - `SF Pro Display`
- Glassmorphism navigation bar using `backdrop-filter`.
- Responsive layouts optimized for desktop, tablet, and mobile devices.
- Clean typography and smooth user experience.

---

# 📁 Folder Structure

```text
StudyBud/
│
├── index.html                 # Main resource exploration page
├── add-resource.html          # Resource submission form
├── dashboard.html             # Analytics & management dashboard
├── style.css                  # Core styling and responsive design
├── script.js                  # Application logic & LocalStorage handling
│
├── images/
│   ├── hero-banner.jpg
│   ├── study-desk.jpg
│   └── library-workspace.jpg
│
└── README.md
```

---

# 🚀 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Browser LocalStorage API
- Responsive Web Design
- CSS Flexbox & Grid
- Glassmorphism UI Design

---

# ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/obaiibi/final-project.git
```

2. Navigate to the project folder.

3. Open **index.html** in any modern web browser.

No additional installation or dependencies are required.

---

# 📖 How to Use

1. Browse academic resources on the homepage.
2. Search by course code or topic.
3. Filter resources by category.
4. Submit new study materials using the **Add Resource** page.
5. View analytics and manage resources through the **Dashboard**.

All changes are automatically saved using LocalStorage.

---

# 🎯 Project Objectives

StudyBud was developed to:

- Help students easily discover quality academic study materials.
- Encourage peer-to-peer resource sharing.
- Demonstrate modern front-end web development practices.
- Apply JavaScript for dynamic user interactions.
- Implement client-side data persistence using LocalStorage.
- Showcase responsive design principles and clean UI/UX.

---

# 🔮 Future Improvements

Potential enhancements include:

- User authentication and login system
- Resource ratings and reviews
- Bookmarking favorite resources
- File upload support (PDF, DOCX, PPT)
- Cloud database integration
- Search suggestions and auto-complete
- Dark Mode
- Course-specific dashboards
- Admin moderation panel

---

# 👨‍💻 Author

**Mustafa Meitamei**

Final Project — Web Development

---

# 📄 License

This project is intended for educational purposes only.

© 2026 StudyBud. All rights reserved.