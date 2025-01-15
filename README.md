# Drink Tracker App

A Next.js application that helps you monitor and visualize your daily drink consumption through an interactive calendar interface. This application is particularly useful for those wanting to track and modify their drinking habits, offering a visual representation of consumption patterns over time.

## Features

The application provides several key features to help you track your drink consumption effectively:

- **Interactive Calendar Interface**: A month-view calendar that responds to clicks and shows your daily consumption at a glance.
- **Visual Feedback System**: Intuitive color-coding that helps you quickly understand your consumption levels:
  - Green (0 drinks): Indicating days of no consumption
  - Yellow (1-2 drinks): Representing moderate consumption
  - Orange (3 drinks): Showing increased consumption
  - Red (4-5 drinks): Warning level consumption
  - Black (6+ drinks): High consumption alert
- **Persistent Data Storage**: All your data is securely stored in Supabase, ensuring you never lose your tracking history
- **Monthly Navigation**: Easily move between months to review past habits or plan for the future
- **Real-time Updates**: Changes are instantly saved and reflected in the interface

## Prerequisites

Before setting up the application, ensure you have the following installed and configured:

1. **Node.js**: Version 18 or higher is required
   - Download from [Node.js official website](https://nodejs.org)
   - Verify installation with `node --version`

2. **Package Manager**: Either npm (comes with Node.js) or yarn
   - If using yarn, install it with `npm install -g yarn`
   - Verify with `yarn --version`

3. **Supabase Account**:
   - Sign up at [Supabase](https://supabase.com)
   - Keep your dashboard open for the next steps

## Detailed Setup Instructions

### 1. Supabase Configuration

First, let's set up your database:

1. Create a new Supabase project:
   - Log into Supabase
   - Click "New Project"
   - Choose a name (e.g., "drink-tracker")
   - Set a secure database password
   - Choose your region (pick the closest to your users)
   - Wait for project creation (usually 1-2 minutes)

2. Set up the database table:
   - In your new project, go to the SQL editor
   - Copy and paste this exact SQL:
   ```sql
   create table drinks (
     id uuid default gen_random_uuid() primary key,
     date timestamp with time zone not null unique,
     quantity integer not null,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );

   -- Add an index to improve query performance
   create index idx_drinks_date on drinks(date);
   ```
   - Click "Run" to create your table

3. Get your API credentials:
   - Go to Project Settings (gear icon)
   - Click API in the sidebar
   - Copy your Project URL and anon/public key

### 2. Local Development Setup

1. Clone and prepare the repository:
```bash
# Clone the repository
git clone https://github.com/yourusername/drink-tracker.git

# Navigate to project directory
cd drink-tracker

# Create environment file
touch .env.local
```

2. Set up environment variables:
   Open `.env.local` in your editor and add:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url_from_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_from_supabase
```

3. Install dependencies:
```bash
# Using npm
npm install

# Or using yarn
yarn install
```

4. Start the development server:
```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

5. Access the application:
   - Open your browser
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You should see the calendar interface

### 3. Vercel Deployment

Follow these steps to deploy your application:

1. Prepare your repository:
   - Create a GitHub repository
   - Push your local code:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin your_github_repo_url
   git push -u origin main
   ```

2. Set up Vercel:
   - Visit [Vercel](https://vercel.com)
   - Sign up or log in
   - Click "New Project"
   - Import your GitHub repository
   - Configure the project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `next build`
     - Output Directory: .next

3. Add environment variables in Vercel:
   - In project settings, find "Environment Variables"
   - Add both variables from your `.env.local`:
     ```
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     ```
   - Ensure they're added to all environments (Production, Preview, Development)

4. Deploy:
   - Click "Deploy"
   - Wait for the build to complete
   - Your app is now live!

## Using the Application

The drink tracker is designed to be intuitive and easy to use:

1. **Adding Drinks**:
   - Click on any date in the calendar
   - Each click increments the drink count for that day
   - The color changes automatically based on the count
   - After 6 drinks, clicking again resets to 0

2. **Navigation**:
   - Use the left arrow (←) to view previous months
   - Use the right arrow (→) to view future months
   - The current month and year are displayed at the top

3. **Data Persistence**:
   - All changes are automatically saved
   - Your data syncs across devices
   - No manual saving required

## Troubleshooting Common Issues

1. **Data Not Saving**:
   - Check your environment variables
   - Verify your internet connection
   - Check the browser console for errors

2. **Calendar Not Loading**:
   - Clear your browser cache
   - Verify Supabase connection
   - Check for JavaScript errors in the console

## Tech Stack Details

This application is built using modern web technologies:

- **Next.js**: React framework for production-grade applications
- **React**: Library for building user interfaces
- **Supabase**: Open-source Firebase alternative for database management
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Reusable component library built on Radix UI

## Contributing

We welcome contributions! Here's how you can help improve the drink tracker:

1. **Fork the Repository**:
   - Visit the GitHub repository
   - Click "Fork" in the top right
   - Clone your fork locally

2. **Create a Feature Branch**:
```bash
git checkout -b feature/YourFeatureName
```

3. **Make Your Changes**:
   - Write your code
   - Add tests if applicable
   - Update documentation as needed

4. **Commit Your Changes**:
```bash
git commit -m "feat: add some amazing feature"
```

5. **Push to Your Fork**:
```bash
git push origin feature/YourFeatureName
```

6. **Open a Pull Request**:
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes
   - Submit the PR

## License

This project is licensed under the MIT License. This means you can:
- Use the code commercially
- Modify the code
- Distribute the code
- Use the code privately

See the [LICENSE.md](LICENSE.md) file for the full license text.

## Support and Contact

If you encounter any issues or have questions:
1. Check the Issues tab on GitHub
2. Create a new issue if needed
3. Provide detailed information about your problem
