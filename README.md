# Vehicles Filter and Results App

## Overview

This Next.js application allows users to filter vehicles on the first page and navigate to a second page to view results based on the selected filters.

### Features

- **Filter Selection Page**: Users can select various filters related to vehicles.
- **Results Page**: Displays results such as vehicle makes and models based on the selected filters.
- **Navigation**: A button on the filter selection page navigates to the results page.

### Architecture

- **Pages**:
  - **`/` (Filter Selection Page)**: The page where users can select filters for vehicles.
  - **`/results` (Results Page)**: The page that shows vehicle results based on the selected filters.

- **Routing**: Uses Next.js's built-in routing to navigate between the filter selection page and the results page.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   `git clone <repository-url>`

   `cd <repository-directory>`

2. Install the dependencies:

   `npm install`

   or, if you prefer Yarn:

   `yarn install`

3. Create .env file in the root directory and specify the host of the API into the NEXT_PUBLIC_API_HOST variable

### Running the Application

To start the development server and run the application locally:

   `npm run dev`

   or, if you prefer Yarn:

   `yarn dev`

Open your browser and navigate to `http://localhost:3000` to view the application.

### Building the Application

To build the application for production:

   `npm run build`

   or, if you prefer Yarn:

   `yarn build`

To start the production server:

   `npm start`

   or, if you prefer Yarn:

   `yarn start`

### Testing

You can run tests using:

   `npm test`

   or, if you prefer Yarn:

   `yarn test`