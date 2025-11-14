# Images Setup Guide

## Image Directory Structure

All images from reddyhotel.com should be placed in the `/public/images/` directory.

## Required Images

### Hotel Project Images (for Projects page):
1. `holidayInnExpressSuites.jpg` - Holiday Inn Express, Bonham, TX
2. `BestWesternPlusWillPoint.jpg` - Best Western Plus, Willspoint, TX
3. `HOLIDAYINNEXPCHILDRESSTX.jpg` - Holiday Inn Express, Childress, TX
4. `holiday-inn-express-and-suites-plainview.jpg` - Holiday Inn Express & Suites, Plainview, TX
5. `BestWesternPlusChandler.jpg` - Best Western Plus, Chandler, TX
6. `reddy-hotel-plainview.jpg` - Reddy Hotel, Plainview, TX

### How to Add Images:

1. Download images from https://reddyhotel.com/
2. Save them in `/public/images/` folder with the names listed above
3. The images will automatically be used in the Projects page

### Image Usage in Code:

The images are referenced in `src/projects.tsx` like this:
```tsx
<img src={`/images/${hotel.image}.jpg`} alt={hotel.name} className="w-full h-full object-cover" />
```

### Note:
Currently, the code uses placeholder gradients. Once you add the actual images, uncomment the `<img>` tags in the Projects component and remove the placeholder divs.

