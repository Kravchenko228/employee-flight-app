# employee-flight-app

The application provides a simple interface for managing and viewing employee flight data. It includes:

- A list of employees
- Associated flights per employee
- Automatic flight refresh every 60 seconds (per selected employee)
- Contextual flight detail display upon row selection
- Responsive and accessible layout

## Core Functionality

- **Component-Driven Architecture**: Employees list, flight table, and flight info are structured as standalone Angular components.
- **Auto Refresh (per employee)**: Flights are refreshed every 1 minute based on the selected employee context.
- **Expandable Flight Table**: The selected flight expands in the table to show additional flight information (plane number, duration, gates).
- **Custom Pipe**: Duration values (in minutes) are transformed to `Xh Ym` format using a custom Angular pipe.
- **Default Selections**: The first employee and their first flight are auto-selected when data is loaded.
- **Clean Separation of Concerns**: All service logic, UI state, and DOM logic are isolated appropriately.

## Technologies Used

- Angular 17 (standalone component structure)
- RxJS for reactive state handling
- HTML & SCSS (without frameworks like Tailwind or Bootstrap)
- TypeScript with strict typing

## Setup Instructions

1. Install dependencies:
   npm install
2. Start development server:
   ng serve
3. Open in browser:
   http://localhost:4200 (or any)
