# Lineage - Family Tree Visualization

A responsive, interactive web application for visualizing and exploring a family tree across up to 7 generations. Lineage provides an intuitive way to navigate through family connections and view detailed information about individual family members.

## Features

- **Interactive Family Tree**: Navigate through all 7 generations of your family history
- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices
- **Color-Coded Generations**: Each generation has a distinct color for easy visual identification
- **Gender Differentiation**: Males and females are visually distinguished for quick recognition
- **Individual Person Pages**: Detailed view for each family member showing their personal information
- **Family Connections**: Easily navigate between parents, children, and spouses
- **Full Tree View**: See the entire family structure in a comprehensive tree layout

## Project Structure

- **`index.html`**: Main entry point with generation selection and navigation
- **`css/`**:
  - `styles.css`: All styling for the application, including responsive design
- **`js/`**:
  - `data.js`: Contains the family data structure and relationships
  - `main.js`: Core functionality for rendering the family tree and handling navigation
- **`pages/`**:
  - `person.html`: Template for individual family member details
  - `full-tree.html`: Displays the complete family tree visualization
- **`images/`**: Contains any images used in the application

## Usage

1. **Home Page**: Start at index.html to select a generation to explore
2. **Person Cards**: Click on any person card to view their detailed information
3. **Navigation**: Use the breadcrumb navigation to move between generations
4. **Full Tree**: Access the comprehensive family tree view from the navigation

### Color Coding

- **Generations**: Each generation has a unique background color for easy identification
  - Generation 1: Blue (#d4e6f9)
  - Generation 2: Mint Green (#d4f9e6)
  - Generation 3: Peach (#f9e6d4)
  - Generation 4: Lavender (#e6d4f9)
  - Generation 5: Aqua (#d4f9f9)
  - Generation 6: Rose (#f9d4d4)
  - Generation 7: Golden Yellow (#f9f9d4)
- **Gender**: 
  - Male: Light blue border
  - Female: Light pink border

## Technical Implementation

- Pure JavaScript with no external dependencies
- Modular data structure for easy maintenance and updates
- DOM manipulation for dynamic content rendering
- URL parameter handling for navigation between views
- Responsive CSS using flexbox for layout adaptability

## Setup and Deployment

1. Clone the repository
2. No build process needed - this is a static website
3. Open `index.html` in a browser to view locally
4. Deploy to any static web hosting service (GitHub Pages, Netlify, etc.)

The application is designed to be easy to customize with your own family data by modifying the data structure in `js/data.js`.