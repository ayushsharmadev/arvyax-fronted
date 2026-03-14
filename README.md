# AI-Assisted Journal - Frontend

A simple React app for writing journal entries and tracking your mental health journey.

## What It Does

- Write journal entries with nature ambience (forest, ocean, mountain)
- Get AI-powered emotion analysis for your entries
- See your mental health insights and patterns
- Clean, simple interface that's easy to use

## Quick Start

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment**
   Create `.env` file:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

3. **Run the app**
   ```bash
   pnpm dev
   ```

4. **Open browser**
   Go to `http://localhost:5173`

## How to Use

1. **Write Entry**: Pick an ambience, write how you feel, save it
2. **Analyze**: Click "Analyze" on any entry to see emotions
3. **View Insights**: Check your mental health patterns at the top

## Tech Stuff

- React 19 + TypeScript
- Tailwind CSS for styling
- Vite for fast development
- Talks to backend API for all the heavy lifting

## Project Files

```
src/
├── components/
│   ├── journal-form.tsx      # Entry creation
│   ├── journal-list.tsx      # Show all entries
│   └── journal-insights.tsx  # Mental health stats
├── App.tsx                   # Main app
└── main.tsx                  # Entry point
```

## Need Help?

- Make sure backend is running first
- Check the API URL in your `.env` file
- Refresh if something seems stuck

That's it! Simple and focused on helping you track your mental wellness.
