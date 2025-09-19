# Dashboard Page with NextAuth Protection Design

## 1. Overview

This document outlines the design for creating a dashboard page at `/dashboard` that requires Google authentication via NextAuth. The dashboard will display a welcome message, list enrolled classes (mock data), and provide a button to start classes that redirects to a Zoom link.

## 2. Technology Stack

- Next.js 15.5.3 (App Router)
- NextAuth.js for authentication
- Tailwind CSS for styling
- TypeScript for type safety
- Existing Layout component for consistent UI

## 3. Route Structure

The dashboard page will be created at:
```
src/app/dashboard/page.tsx
```

This follows the Next.js App Router convention where folders in the `app` directory correspond to URL paths.

## 4. Authentication Requirements

- Protection using NextAuth with Google provider
- Only login required (no specific role permissions)
- Redirect unauthenticated users to sign-in page

## 5. UI Components

### 5.1 Welcome Message
- Display "Halo, [User Name]" where [User Name] comes from the Google profile
- Personalized greeting using user's display name from Google OAuth

### 5.2 Enrolled Classes Section
- Static list of enrolled classes (mock data)
- Display as cards or list items with:
  - Class name
  - Instructor name
  - Schedule information
  - Status (e.g., "In Progress", "Upcoming")

### 5.3 "Mulai Kelas" Button
- Primary action button for each class
- Redirects to a placeholder Zoom link
- Opens in a new tab

## 6. Component Structure

```
DashboardPage (Client Component)
├── WelcomeSection
├── ClassList
│   └── ClassCard
└── Layout (existing)
```

## 7. Data Structure

### 7.1 Mock Class Data
```typescript
interface Class {
  id: string;
  name: string;
  instructor: string;
  schedule: string;
  status: 'in-progress' | 'upcoming' | 'completed';
  zoomLink: string;
}
```

## 8. Implementation Steps

1. Create dashboard directory in src/app
2. Create dashboard page component with authentication protection
3. Implement UI components with Tailwind styling
4. Integrate with existing Layout component
5. Test authentication flow and UI

## 9. Authentication Flow

1. User accesses `/dashboard`
2. NextAuth checks authentication status
3. If not authenticated, redirect to sign-in page
4. If authenticated, render dashboard content
5. Display user's name in welcome message
6. Show mock list of enrolled classes
7. Handle "Mulai Kelas" button clicks

## 10. UI Design

### 10.1 Layout
- Use existing Layout component for consistent navigation
- Responsive design using Tailwind CSS
- Mobile-friendly interface

### 10.2 Welcome Section
```tsx
<h1 className="text-3xl font-bold text-gray-900">Halo, {user.name}</h1>
<p className="text-gray-600 mt-2">Selamat datang di dashboard Anda</p>
```

### 10.3 Class Cards
- Grid layout for class items (responsive: 1 column on mobile, 3 columns on desktop)
- Each card contains:
  - Class title
  - Instructor name
  - Schedule information
  - Status badge
  - "Mulai Kelas" button

### 10.4 "Mulai Kelas" Button
```tsx
<button
  onClick={() => window.open(classItem.zoomLink, '_blank')}
  className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
>
  Mulai Kelas
</button>
```

## 11. File Structure

```
src/
└── app/
    └── dashboard/
        └── page.tsx
```

## 12. Implementation Details

### 12.1 Authentication Hook
A custom authentication hook will be implemented to handle the authentication state:

```typescript
const useAuth = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return { user, loading };
};
```

### 12.2 Mock Data
Mock data for enrolled classes will be defined as:

```typescript
const mockClasses = [
  {
    id: '1',
    name: 'Matematika Dasar',
    instructor: 'Budi Santoso',
    schedule: 'Senin, 14:00 - 16:00',
    status: 'in-progress',
    zoomLink: 'https://zoom.us/j/1234567890',
  },
  // Additional mock classes...
];
```

### 12.3 Component Structure
The dashboard page will be a client component that uses the existing layout:

```tsx
export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <WelcomeSection user={user} />
      <ClassList classes={mockClasses} />
    </div>
  );
}
```

## 13. Testing

1. Verify authentication flow works correctly
2. Test redirect for unauthenticated users
3. Confirm welcome message displays user's name
4. Validate mock class list renders properly
5. Check "Mulai Kelas" button opens Zoom link
6. Ensure responsive design works on different screen sizes