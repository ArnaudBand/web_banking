# Web Banking App

This project is a web banking application built using modern web development technologies. The app allows users to manage their banking activities, connect to bank accounts, make transactions, and visualize financial data.

## Features

- **Next.js**: Server-side rendering and static site generation.
- **TypeScript**: Type-safe JavaScript.
- **Appwrite**: Backend as a service for authentication, database, and storage.
- **Plaid**: Financial data aggregation.
- **Dwolla**: ACH payments and bank transfers.
- **React Hook Form**: Form management.
- **Zod**: Schema validation.
- **TailwindCSS**: Utility-first CSS framework.
- **Chart.js**: Data visualization.
- **ShadCN**: UI components.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js
- npm or yarn
- Appwrite server (self-hosted or cloud)
- Plaid account and API keys
- Dwolla account and API keys

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/web-banking-app.git
cd web-banking-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure environment variables:

Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
NEXT_PUBLIC_APPWRITE_PROJECT_ID=<your-appwrite-project-id>
NEXT_PUBLIC_PLAID_CLIENT_ID=<your-plaid-client-id>
NEXT_PUBLIC_PLAID_SECRET=<your-plaid-secret>
NEXT_PUBLIC_DWOLLA_APP_KEY=<your-dwolla-app-key>
NEXT_PUBLIC_DWOLLA_APP_SECRET=<your-dwolla-app-secret>
```

### Running the Application

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
/components  - React components
/hooks       - Custom hooks
/lib         - Utility functions and configurations
/pages       - Next.js pages
/public      - Public assets
/styles      - TailwindCSS styles
/types       - TypeScript types and interfaces
/validators  - Zod schemas for validation
```

## Usage

### Authentication

The application uses Appwrite for authentication. Users can sign up, log in, and manage their account information.

### Connecting Bank Accounts

Plaid is used to link users' bank accounts. Follow the prompts to securely connect your bank account.

### Transactions

Dwolla handles ACH payments and bank transfers. Users can initiate transactions from their linked accounts.

### Forms

React Hook Form and Zod are used for form handling and validation. Forms are located in the `/components/forms` directory.

### Styling

TailwindCSS is used for styling the application. Styles are defined in the `/styles` directory and components are styled using Tailwind's utility classes.

### Data Visualization

Chart.js is used to create interactive charts for visualizing financial data. Chart components are located in the `/components/charts` directory.

### UI Components

ShadCN provides a set of reusable UI components. These are integrated throughout the application for a consistent look and feel.

## License

This project is licensed under the MIT License.
