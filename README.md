# Tech Quiz App – Cypress Testing Suite

This project is a full-stack **Tech Quiz Application** built using the MERN stack (MongoDB, Express, React, Node.js). The app presents users with a set of ten random tech questions, tracks their answers, displays the final score, and allows them to retake the quiz.

This enhanced version integrates **Cypress** for both **component** and **end-to-end testing** to ensure the quiz functionality behaves as expected.

---


## ✅ Features

- Start a quiz by clicking "Start"
- Answer multiple-choice tech questions
- View your final score after the quiz
- Restart the quiz at any time

---

## 🧪 Testing with Cypress

Cypress is used for:

- **Component Testing**: Ensures the `Quiz` component renders questions, handles answers, and displays score correctly.
- **End-to-End Testing**: Simulates user interaction from quiz start to finish.

### Run Tests

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev