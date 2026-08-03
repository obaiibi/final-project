// --- LocalStorage Keys & Data Helpers ---
const STORAGE_KEY = 'studybud_resources';

// Seed sample data with card images
const defaultData = [
  {
    id: "1",
    title: "Data Structures & Algorithms Notes",
    course: "CS101",
    category: "Lecture Notes",
    link: "https://example.com/dsa-notes",
    image: "images/study-desk.jpg",
    description: "Complete set of notes covering arrays, linked lists, binary trees, and sorting algorithms."
  },
  {
    id: "2",
    title: "Calculus II Midterm Cheatsheet",
    course: "MATH202",
    category: "Cheatsheet",
    link: "https://example.com/calc2-sheet",
    image: "images/library-workspace.jpg",
    description: "Formulas for integration by parts, trigonometric substitution, and series tests."
  }
];

function getStoredResources() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return defaultData;
  }
  return JSON.parse(stored);
}

function saveResourcesToStorage(resourcesArray) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resourcesArray));
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('resourceGrid')) {
    initExplorerPage();
  } else if (document.getElementById('resourceForm')) {
    initFormPage();
  } else if (document.getElementById('managementTableBody')) {
    initDashboardPage();
  }
});

/* ==========================================================================
   1. EXPLORER PAGE (index.html)
   ========================================================================== */
function initExplorerPage() {
  const gridContainer = document.getElementById('resourceGrid');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');

  function renderCards() {
    const resources = getStoredResources();
    const query = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    const filtered = resources.filter(res => {
      const matchesQuery = res.title.toLowerCase().includes(query) || 
                           res.course.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });

    gridContainer.innerHTML = '';

    if (filtered.length === 0) {
      gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--apple-text-muted);">No resources found matching your criteria.</p>`;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'card';

      // Fallback image if user didn't specify one
      const cardImgSrc = item.image || 'images/study-desk.jpg';

      card.innerHTML = `
        <div>
          <img src="${cardImgSrc}" alt="${sanitizeHTML(item.title)}" class="card-img">
          <span class="card-tag">${sanitizeHTML(item.category)}</span>
          <h4>${sanitizeHTML(item.title)}</h4>
          <p class="course-code">Course: <strong>${sanitizeHTML(item.course)}</strong></p>
          <p>${sanitizeHTML(item.description)}</p>
        </div>
        <a href="${sanitizeHTML(item.link)}" target="_blank" rel="noopener noreferrer">View Resource</a>
      `;
      gridContainer.appendChild(card);
    });
  }

  searchInput.addEventListener('input', renderCards);
  categoryFilter.addEventListener('change', renderCards);
  renderCards();
}
