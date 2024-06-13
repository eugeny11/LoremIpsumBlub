# Blub News Feed Application

## Overview

The Blub News Feed Application is a web-based interface designed to display news items in a visually appealing and interactive format. The application is responsive and features custom scrolling for different screen sizes, a mobile menu, and a language switcher.

## Features

- **Responsive Design**: The application adapts to different screen sizes, providing a seamless experience across devices.
- **Custom Scrolling**: Implements both horizontal and vertical scrolling for news items based on the screen size.
- **Mobile Menu**: A hamburger menu that toggles the display of navigation links on mobile devices.
- **Language Switcher**: Allows users to switch between English and Russian languages with smooth transitions.

## Technologies Used

- **HTML/CSS**: For structuring and styling the web pages.
- **JavaScript**: For implementing interactive features and custom scrolling.
- **Media Queries**: For responsive design adjustments.

## Implementation Details

### Custom Scrolling

1. **Horizontal Scrolling**:
    - Activated for screens with width less than or equal to 1460px.
    - Uses JavaScript to create an infinite scrolling effect for banner icons.
    - The icons scroll horizontally and loop seamlessly.

2. **Vertical Scrolling**:
    - Activated for screens with width greater than 1460px.
    - Uses JavaScript to create an infinite scrolling effect for banner icons.
    - The icons scroll vertically and loop seamlessly.

### Mobile Menu

- A hamburger menu icon is displayed on smaller screens.
- Clicking the hamburger icon toggles the display of the mobile navigation menu.

### Language Switcher

- A button to switch the language between English and Russian.
- Smooth transitions are implemented using CSS classes for fade-in and fade-out effects.

## Running the Project

To run this project locally:

1. Clone the repository.
2. Open `index.html` in your browser.

```bash
git clone https://github.com/yourusername/blub-news-feed.git
cd blub-news-feed
open index.html
