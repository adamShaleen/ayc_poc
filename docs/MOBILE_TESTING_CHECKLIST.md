# Mobile Testing Checklist

## Astoria Yacht Club Website

This document provides a comprehensive checklist for testing the website on mobile devices. Use this to verify responsive behavior, touch interactions, and mobile-specific features.

---

## Table of Contents

1. [Test Devices](#test-devices)
2. [Browser Dev Tools](#browser-dev-tools)
3. [Pages to Test](#pages-to-test)
4. [Feature Checklist](#feature-checklist)
5. [Responsive Breakpoints](#responsive-breakpoints)
6. [Touch Interactions](#touch-interactions)
7. [Performance Testing](#performance-testing)
8. [Accessibility Testing](#accessibility-testing)
9. [Common Issues](#common-issues)

---

## Test Devices

### Priority Devices (Must Test)

| Device | Screen Size | OS | Notes |
|--------|-------------|-----|-------|
| iPhone 14/15 | 390 x 844 | iOS 17+ | Most common iPhone |
| iPhone SE | 375 x 667 | iOS 15+ | Smallest iPhone in use |
| Samsung Galaxy S23 | 360 x 780 | Android 13+ | Popular Android |
| iPad | 768 x 1024 | iPadOS 17+ | Tablet baseline |
| iPad Pro | 1024 x 1366 | iPadOS 17+ | Large tablet |

### Secondary Devices (Should Test)

| Device | Screen Size | OS |
|--------|-------------|-----|
| iPhone 14 Pro Max | 430 x 932 | iOS 17+ |
| Google Pixel 7 | 412 x 915 | Android 13+ |
| Samsung Galaxy Tab | 800 x 1280 | Android 13+ |
| OnePlus 11 | 412 x 915 | Android 13+ |

### Edge Cases (Nice to Test)

- Older iPhones (iPhone 8, X)
- Budget Android phones
- Foldable devices (Samsung Fold)
- Landscape orientation on phones

---

## Browser Dev Tools

### Chrome DevTools (Recommended)

1. Open DevTools: `Cmd+Option+I` (Mac) or `Ctrl+Shift+I` (Windows)
2. Click device toolbar: `Cmd+Shift+M` or `Ctrl+Shift+M`
3. Select device or set custom dimensions

**Useful Device Presets:**
- iPhone 14 Pro Max
- iPhone SE
- iPad
- Samsung Galaxy S20 Ultra

**Tips:**
- Enable "Touch simulation" for touch events
- Test both portrait and landscape
- Throttle network to "Fast 3G" for real-world simulation

### Safari Web Inspector (iOS Testing)

1. Enable Web Inspector on iOS device
2. Connect device via USB
3. Safari > Develop > [Your Device]

### Firefox Responsive Design Mode

1. `Cmd+Option+M` (Mac) or `Ctrl+Shift+M` (Windows)
2. Select device or custom dimensions

---

## Pages to Test

### High Priority Pages

| Page | URL | Key Elements to Check |
|------|-----|----------------------|
| Home | `/` | Hero, events carousel, CTAs |
| Events List | `/events/list` | Event cards, filters |
| Events Calendar | `/events/calendar` | Calendar view, date picker |
| Gallery | `/gallery` | Image grid, lightbox, swipe |
| Racing | `/racing` | Schedule, series cards |
| About | `/about` | Timeline, stats, images |
| Board | `/about/board` | Member cards, expansion |
| Membership | `/membership` | Plan cards, CTAs |
| Apply Form | `/membership/apply` | Form inputs, validation |
| Resources | `/resources` | Accordions, links |
| Reciprocity | `/cruising/reciprocity` | Search, filters, map |

### Demo Pages

| Page | URL | Purpose |
|------|-----|---------|
| Performance | `/demo/performance` | Verify stats display correctly |
| CMS | `/demo/cms` | Check mockup layouts |
| Mobile | `/demo/mobile` | Verify phone mockups |

---

## Feature Checklist

### Navigation

- [ ] Hamburger menu visible on mobile (<768px)
- [ ] Menu opens/closes smoothly
- [ ] Menu items are finger-friendly (44px minimum)
- [ ] Close button is easily reachable
- [ ] Submenus work correctly
- [ ] Active page is indicated
- [ ] Logo links to home
- [ ] Menu closes when navigating

### Forms

- [ ] Input fields are 44px minimum height
- [ ] Labels are visible and clear
- [ ] Email inputs show email keyboard
- [ ] Phone inputs show numeric keyboard
- [ ] Date inputs use native picker
- [ ] Validation errors are visible
- [ ] Submit button is full-width on mobile
- [ ] Form scrolls properly when keyboard opens

### Images & Gallery

- [ ] Images load quickly
- [ ] Images are properly sized (not oversized)
- [ ] Lightbox works on tap
- [ ] Swipe left/right in lightbox
- [ ] Pinch-to-zoom works
- [ ] Close button is accessible
- [ ] Image captions are readable

### Calendar/Events

- [ ] Calendar is readable on mobile
- [ ] Events are tappable
- [ ] Event details fit screen
- [ ] Date navigation works
- [ ] View switching works (month/week/list)
- [ ] Event cards show key info

### Touch Interactions

- [ ] All links/buttons ≥44px tap target
- [ ] No accidental taps (elements not too close)
- [ ] Hover states have touch alternatives
- [ ] Swipe gestures work where expected
- [ ] Long-press doesn't cause issues
- [ ] Scroll is smooth

### Mobile Actions

- [ ] Phone numbers are click-to-call
- [ ] Email addresses are click-to-email
- [ ] Addresses open maps app
- [ ] "Add to calendar" works
- [ ] External links indicate they leave site

---

## Responsive Breakpoints

Test each page at these widths:

| Breakpoint | Width | What Changes |
|------------|-------|--------------|
| Mobile | 320px | Single column, hamburger nav |
| Mobile L | 375px | Slightly wider columns |
| Mobile XL | 425px | More breathing room |
| Tablet | 640px | Two-column layouts begin |
| Tablet L | 768px | Full tablet layout |
| Desktop | 1024px | Full navigation, sidebars |
| Desktop L | 1280px | Max-width containers |
| 4K | 1440px+ | Extra whitespace, larger text |

### Breakpoint Testing Procedure

1. Start at 320px width
2. Slowly expand browser width
3. Check for:
   - Layout breaks
   - Text overflow
   - Image distortion
   - Element overlap
   - Missing content
4. Note the exact pixel where issues occur

---

## Touch Interactions

### Test Touch Gestures

| Gesture | Where Used | Expected Behavior |
|---------|------------|-------------------|
| Tap | Everywhere | Opens link/button |
| Double-tap | Images | Zoom (if enabled) |
| Long-press | None | Should not trigger actions |
| Swipe left/right | Gallery lightbox | Navigate photos |
| Swipe down | Events page | Pull to refresh |
| Pinch | Gallery images | Zoom in/out |
| Two-finger rotate | Maps | Rotate map |

### Touch Target Audit

Check these elements meet 44px minimum:

- [ ] Navigation links
- [ ] Buttons (all types)
- [ ] Form inputs
- [ ] Checkboxes and radio buttons
- [ ] Dropdown arrows
- [ ] Close buttons
- [ ] Social media icons
- [ ] Footer links
- [ ] Pagination controls
- [ ] Filter chips

---

## Performance Testing

### Lighthouse Mobile Audit

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Mobile" device
4. Select "Performance" category
5. Click "Analyze page load"

**Target Scores:**
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥90
- SEO: ≥90

### Network Throttling Tests

| Connection | Download | Upload | Latency |
|------------|----------|--------|---------|
| Fast 3G | 1.5 Mbps | 750 Kbps | 562ms |
| Slow 3G | 400 Kbps | 400 Kbps | 2000ms |
| Offline | - | - | - |

**Test Each Page For:**
- [ ] Initial load time (<3s on Fast 3G)
- [ ] Time to interactive (<5s on Fast 3G)
- [ ] Images load progressively
- [ ] Content is visible before JS loads
- [ ] Error states for failed requests

### WebPageTest

Use [webpagetest.org](https://www.webpagetest.org) for:
- Real device testing
- Video of page load
- Waterfall analysis

---

## Accessibility Testing

### Screen Reader Testing

**iOS VoiceOver:**
1. Settings > Accessibility > VoiceOver > On
2. Navigate by swiping left/right
3. Double-tap to activate

**Android TalkBack:**
1. Settings > Accessibility > TalkBack > On
2. Navigate by swiping left/right
3. Double-tap to activate

### Accessibility Checklist

- [ ] All images have alt text
- [ ] Form fields have labels
- [ ] Focus is visible
- [ ] Color is not the only indicator
- [ ] Text has sufficient contrast
- [ ] Content is readable when zoomed 200%
- [ ] Page works without JavaScript
- [ ] Skip link is available

---

## Common Issues

### Layout Problems

| Issue | Cause | Fix |
|-------|-------|-----|
| Horizontal scroll | Content wider than viewport | Check for fixed widths, add overflow-x: hidden |
| Text too small | Hardcoded font sizes | Use responsive font sizes |
| Elements overlap | Absolute positioning | Use flexbox/grid with proper spacing |
| White space on right | Margin/padding overflow | Check container margins |

### Touch Problems

| Issue | Cause | Fix |
|-------|-------|-----|
| Can't tap links | Tap target too small | Increase padding to 44px |
| Wrong link tapped | Elements too close | Add more spacing |
| Hover state stuck | :hover not clearing | Add @media (hover: hover) |
| Scroll hijacked | JS scroll handlers | Use passive event listeners |

### Form Problems

| Issue | Cause | Fix |
|-------|-------|-----|
| Wrong keyboard | Missing input type | Add type="email", "tel", etc. |
| Page jumps on focus | Fixed headers | Add scroll-margin-top |
| Can't see what I'm typing | Keyboard covers input | Implement proper viewport handling |
| Submit button cut off | Fixed positioning | Use sticky positioning |

---

## Testing Tools

### Online Tools

- [BrowserStack](https://www.browserstack.com) - Real device testing
- [Responsinator](http://www.responsinator.com) - Quick device preview
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev)

### Browser Extensions

- Responsive Viewer (Chrome)
- Viewport Resizer (Chrome)
- Mobile simulator (Firefox)

### Native Tools

- Xcode Simulator (iOS)
- Android Studio Emulator

---

## Test Results Template

```markdown
## Mobile Test Report

**Date:** YYYY-MM-DD
**Tester:** Name
**Device:** iPhone 14 / Chrome DevTools
**Browser:** Safari / Chrome

### Pages Tested
- [ ] Home
- [ ] Events
- [ ] Gallery
- [ ] Racing
- [ ] About
- [ ] Membership

### Issues Found

| Page | Issue | Severity | Screenshot |
|------|-------|----------|------------|
| /events | Calendar text too small | Medium | [link] |

### Performance Scores

| Page | Performance | Accessibility |
|------|-------------|---------------|
| Home | 95 | 98 |

### Sign-off
- [ ] All critical issues resolved
- [ ] Ready for production
```

---

## Quick Reference

### CSS Breakpoints (Tailwind)
```css
sm: 640px   /* @media (min-width: 640px) */
md: 768px   /* @media (min-width: 768px) */
lg: 1024px  /* @media (min-width: 1024px) */
xl: 1280px  /* @media (min-width: 1280px) */
2xl: 1536px /* @media (min-width: 1536px) */
```

### Touch Target Minimum
```css
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 12px;
}
```

### Mobile-First Media Query
```css
/* Mobile styles by default */
.element { ... }

/* Tablet and up */
@media (min-width: 768px) {
  .element { ... }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element { ... }
}
```

---

*Last updated: January 2025*
*Questions? Contact webmaster@astoriayachtclub.org*
