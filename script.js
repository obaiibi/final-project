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