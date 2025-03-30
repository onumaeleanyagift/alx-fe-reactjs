# Recipe Sharing Platform

## Overview
The Recipe Sharing Platform is a web application built using React and styled with Tailwind CSS. It allows users to browse, add, and share recipes. The platform includes multiple pages, such as a home page displaying a list of recipes, a detailed view for individual recipes, and a form for submitting new recipes.

## Features
- Display a list of recipes with images and summaries
- View detailed information about each recipe, including ingredients and preparation steps
- Add new recipes through a responsive form
- Styled with Tailwind CSS for a modern and responsive design

## Installation and Setup
### 1. Create a New React Project
To set up the project, run the following commands in your terminal:
```sh
npm create vite@latest recipe-sharing-platform -- --template react
cd recipe-sharing-platform
```

### 2. Install and Configure Tailwind CSS
Add Tailwind CSS and its dependencies:
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Modify `tailwind.config.js` to enable purging of unused styles:
```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Include Tailwind in `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Verify Tailwind CSS Integration
Run the project to ensure Tailwind CSS is correctly integrated:
```sh
npm run dev
```
Test Tailwind by adding a utility class, such as `text-blue-500`, to a component.

## Project Structure
```
recipe-sharing-platform/
├── src/
│   ├── components/
│   │   ├── HomePage.js
│   │   ├── RecipeDetail.js
│   │   ├── AddRecipeForm.js
│   ├── assets/
│   ├── data/
│   │   ├── data.json
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── public/
├── package.json
├── tailwind.config.js
```

## Features Implementation

### 1. Home Page
- Create `HomePage.js` inside `src/components/`
- Fetch mock recipe data from `src/data/data.json`
- Display recipes in a responsive grid using Tailwind CSS

### 2. Recipe Detail Page
- Create `RecipeDetail.js` inside `src/components/`
- Fetch recipe details based on ID from URL parameters
- Display ingredients, cooking instructions, and images

### 3. Add Recipe Form
- Create `AddRecipeForm.js` inside `src/components/`
- Implement input fields for recipe title, ingredients, and preparation steps
- Add validation to ensure all fields are filled before submission
- Style the form using Tailwind CSS

## Routing
Install React Router:
```sh
npm install react-router-dom
```
Set up routing in `App.js`:
```js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}
```

## Running the Project
To start the development server, run:
```sh
npm run dev
```
Open `http://localhost:5173/` in your browser.

## Repository
GitHub repository: `alx-fe-reactjs`
Project directory: `recipe-sharing-platform`

## License
This project is licensed under the MIT License.