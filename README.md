# InvoiceHub

## Getting Started

Node.js `22.x` is required to run this project.

### Development Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- [x] Add a new invoice
  - [x] Generate invoice number with native [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) object to make it unique
  - [x] Form validation using [`react-hook-form`](https://react-hook-form.com/) and [`zod`](https://zod.dev/)
  - [x] Save invoice to local storage using [`zustand`](https://zustand.docs.pmnd.rs/)
- [x] View all invoices
  - [x] List all invoices from local storage
  - [x] Filter invoices by status, name, and number with help from [`nuqs`](https://nuqs.47ng.com/)
- [x] Delete an invoice

## Tech Stack

- [Next.js](https://nextjs.org/), for the base framework
- [Material UI](https://mui.com/material-ui/), for the UI components
- [React Hook Form](https://react-hook-form.com/), for form validation
- [Zod](https://zod.dev/), for schema validation
- [Zustand](https://zustand.docs.pmnd.rs/), for global state management
- [Nuqs](https://nuqs.47ng.com/), for filtering

## Author

This project was created by [Hendra Agil](https://hendraaagil.dev/).
