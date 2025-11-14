# How to Test the Welcome Modal

The welcome modal is set to show **once per browser session**. Here's how to see it again:

## Method 1: Clear Session Storage
1. Open browser DevTools (F12 or right-click → Inspect)
2. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
3. Click **Session Storage** on the left
4. Find your localhost URL
5. Delete the `hasSeenWelcome` key
6. Refresh the page

## Method 2: New Incognito/Private Window
1. Open a new incognito/private browsing window
2. Navigate to your site
3. The modal will appear

## Method 3: Quick Console Command
1. Open browser console (F12)
2. Type: `sessionStorage.removeItem('hasSeenWelcome')`
3. Press Enter
4. Refresh the page

## The Modal Features:
- ✅ Beautiful gradient background with backdrop blur
- ✅ Animated sparkles icon that rotates and pulses
- ✅ Gradient text for "Reddy Hotels"
- ✅ Animated entrance with staggered delays
- ✅ Gradient button with arrow animation
- ✅ Top accent bar that animates in
- ✅ Click anywhere to dismiss

## Z-Index Setup:
- Top Header: z-50
- Main Nav: z-40
- Welcome Modal Backdrop: z-999
- Welcome Modal Content: z-1000

The modal will always appear above all other elements!

