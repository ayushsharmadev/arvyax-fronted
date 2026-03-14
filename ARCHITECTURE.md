# Frontend Architecture

Simple overview of how the React app works.

## App Structure

```
App (Main Component)
├── JournalForm    - Write entries
├── JournalInsights - See your stats
└── JournalList    - View all entries
```

## How It Works

### Main App Component
- Keeps track of all your journal entries
- Gives you a unique ID so your entries stay yours
- Loads your entries when you open the app

### JournalForm Component
- Simple form with ambience dropdown
- Text area for writing your thoughts
- Save button that talks to the backend
- Clears form after saving

### JournalList Component
- Shows all your entries newest first
- Each entry has date and ambience info
- "Analyze" button to get AI insights
- Loading state while analyzing

### JournalInsights Component
- Fetches your mental health stats
- Shows total entries, top emotion, preferred ambience
- Updates automatically when you add new entries

## Data Flow

1. **Write Entry**: Form → Backend API → Updates entry list
2. **Analyze Entry**: Click analyze → Backend processes → Shows results
3. **View Insights**: Auto-fetches from backend → Displays your patterns

## User ID Magic

The app remembers you using localStorage:
- First visit? Creates a random ID for you
- Comes back later? Uses the same ID
- No login needed for demo purposes

## State Management

Super simple - just React hooks:
- `useState` for forms and loading states
- `useEffect` for fetching data
- Props to pass data between components

## Styling

- Tailwind CSS for clean, modern look
- Responsive design works on phones and desktop
- Simple color scheme with accent buttons
- Focus on readability and ease of use

## API Connection

Talks to backend at `VITE_API_URL`:
- Sends journal entries to be saved
- Gets your entry history
- Requests AI analysis
- Fetches your mental health insights

## That's It

No complex architecture - just a simple, focused React app that helps you track your mental wellness journey.
