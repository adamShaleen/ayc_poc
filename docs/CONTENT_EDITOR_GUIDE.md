# Content Editor Guide

## Astoria Yacht Club Website - Content Management

Welcome to the AYC website content management system! This guide will help you update and manage content on the website. No technical skills are required.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [The Editing Interface](#the-editing-interface)
3. [Common Tasks](#common-tasks)
   - [Adding an Event](#adding-an-event)
   - [Uploading Photos](#uploading-photos)
   - [Creating a Newsletter](#creating-a-newsletter)
   - [Updating Board Members](#updating-board-members)
   - [Editing Page Content](#editing-page-content)
4. [Working with Images](#working-with-images)
5. [Preview & Publishing](#preview--publishing)
6. [Troubleshooting](#troubleshooting)
7. [Getting Help](#getting-help)

---

## Getting Started

### Accessing the CMS

1. Go to **https://ayc.sanity.studio** (bookmark this!)
2. Log in with your Google account (must be authorized)
3. You'll see the main dashboard with all content types

### First Time Setup

- Contact the webmaster to get your account authorized
- We recommend using Chrome or Firefox for the best experience
- The CMS works on tablets and phones, but desktop is recommended for editing

### Understanding the Interface

```
┌─────────────────────────────────────────────────────────────┐
│  📋 Content Types    │         Document Editor              │
│                      │                                      │
│  ▶ Events           │  [Title field]                       │
│  ▶ Gallery          │  [Date picker]                       │
│  ▶ Newsletter       │  [Rich text editor]                  │
│  ▶ Members          │  [Image upload]                      │
│  ▶ Pages            │                                      │
│  ▶ Announcements    │         [Publish] [Preview]          │
└─────────────────────────────────────────────────────────────┘
```

---

## The Editing Interface

### Content List View

When you click on a content type (like "Events"), you'll see:
- A list of all items of that type
- Draft items are marked with a yellow dot
- Published items have a green dot
- Search and filter options at the top

### Document Editor

When you open a document to edit:
- Each field has a label and helpful description
- Required fields are marked with a red asterisk *
- Changes are saved automatically as drafts
- Use the **Publish** button to make changes live

### Key Buttons

| Button | What it does |
|--------|--------------|
| **Publish** | Makes your changes visible on the live website |
| **Unpublish** | Removes content from the live site (keeps draft) |
| **Duplicate** | Creates a copy of the current document |
| **Delete** | Permanently removes the document |
| **Preview** | Shows how it will look on the live site |

---

## Common Tasks

### Adding an Event

Events appear on the calendar and events list pages.

**Step-by-step:**

1. Click **Events** in the left sidebar
2. Click the **+ Create** button (top right)
3. Fill in the fields:

| Field | Description | Required |
|-------|-------------|----------|
| Title | Event name (e.g., "Wednesday Night Racing") | Yes |
| Slug | URL-friendly name (auto-generated) | Yes |
| Start Date | When the event begins | Yes |
| End Date | When it ends (optional for single-day events) | No |
| Location | Where it takes place | Yes |
| Event Type | Racing, Cruising, Social, or Meeting | Yes |
| Description | Full details about the event | Yes |
| Featured Image | Photo for the event (optional) | No |

4. Click **Publish** when ready

**Tips:**
- For recurring events (like Wednesday Night Racing), you can duplicate a previous event
- Add a registration link if sign-ups are required
- Include contact info for questions

---

### Uploading Photos

Photos go to the Gallery section of the website.

**Step-by-step:**

1. Click **Gallery** in the left sidebar
2. Click **+ Create**
3. Drag and drop your image into the upload area
4. Fill in the details:

| Field | Description |
|-------|-------------|
| Title | Brief title (e.g., "Start of Memorial Day Regatta") |
| Caption | Longer description of what's happening |
| Album | Category: Racing, Cruising, Social, Clubhouse, or Historical |
| Date Taken | When the photo was taken |
| Photographer | Credit for the photographer |

5. Click **Publish**

**Bulk Upload:**
- You can upload multiple photos at once by selecting them all
- Each photo still needs individual titles and captions

**Image Tips:**
- Photos are automatically optimized for web
- Original files are preserved
- Recommended: At least 1200px wide for best quality
- Supported formats: JPG, PNG, WebP

---

### Creating a Newsletter

The Prior Edition newsletters are created here.

**Step-by-step:**

1. Click **Newsletter** in the sidebar
2. Click **+ Create**
3. Fill in the header info:
   - Title (e.g., "The Prior Edition - January 2025")
   - Issue month/year
   - Cover image (optional)

4. Add sections using the **+ Add Section** button:
   - Commodore's Message
   - Racing Report
   - Cruising News
   - Social Events
   - Announcements
   - Classifieds

5. For each section:
   - Enter the section title
   - Use the rich text editor for content
   - Add images as needed
   - Select an author if applicable

6. Preview the newsletter before publishing
7. Click **Publish** when ready

**Rich Text Editor Tips:**
- **Bold**: Select text and click B or press Ctrl+B
- **Italic**: Select text and click I or press Ctrl+I
- **Headings**: Use H2 for main sections, H3 for subsections
- **Links**: Highlight text and click the link icon
- **Images**: Click the image icon in the toolbar

---

### Updating Board Members

Board member profiles appear on the Board of Directors page.

**Step-by-step:**

1. Click **Members** in the sidebar
2. Find the person to update (use search if needed)
3. Click their name to open the editor
4. Update any fields:
   - Photo (click "Change" to upload new)
   - Title/Role
   - Bio
   - Contact information
5. Click **Publish**

**For new board members:**
1. Click **+ Create**
2. Fill in all required fields
3. Check "Board Member" to display on the board page
4. Select their role from the dropdown

---

### Editing Page Content

Static pages like About, Resources, etc. can be edited too.

**Step-by-step:**

1. Click **Pages** in the sidebar
2. Find and click the page to edit
3. The page is built from content blocks:
   - **Text Block**: Rich text content
   - **Image Block**: Single image with caption
   - **Card Grid**: Grid of linked cards
   - **Accordion**: Expandable FAQ-style sections
   - **Callout**: Highlighted info box

4. Edit existing blocks or add new ones with **+ Add Block**
5. Drag blocks to reorder them
6. Preview to check your changes
7. Publish when ready

---

## Working with Images

### Uploading Images

- **Drag and drop** directly into the upload area
- Or click to browse your computer
- Maximum file size: 10MB
- Supported formats: JPG, PNG, GIF, WebP

### Image Best Practices

| Use Case | Recommended Size |
|----------|------------------|
| Featured/Hero images | 1920 x 1080 px |
| Event images | 1200 x 800 px |
| Gallery photos | 1200 px wide minimum |
| Profile photos | 400 x 400 px (square) |

### Alt Text

Always add descriptive alt text for accessibility:
- ✅ Good: "Sailboats racing downwind during Wednesday Night Racing"
- ❌ Bad: "IMG_1234" or "boat picture"

### Cropping & Focal Point

- Click on an image to set the focal point
- This determines what's visible when the image is cropped
- Useful for banner images or thumbnails

---

## Preview & Publishing

### Draft vs Published

| Status | What it means |
|--------|---------------|
| 🟡 Draft | Only visible in the CMS, not on the live site |
| 🟢 Published | Visible to everyone on the live website |

### Using Preview

1. Click the **Preview** button in the editor
2. A new tab opens showing the live site with your changes
3. Only you can see the preview (not public)
4. Make adjustments and preview again
5. Publish when satisfied

### Publishing Workflow

```
Edit in CMS → Preview → Adjust if needed → Publish → Live on site!
```

### Scheduling Content

Some content types support scheduled publishing:
1. Set the "Publish Date" to a future date
2. The content will automatically go live at that time
3. Great for events or announcements

---

## Troubleshooting

### Common Issues

**Q: My changes aren't showing on the website**

A:
1. Make sure you clicked **Publish** (not just saved)
2. Wait 1-2 minutes for the cache to clear
3. Try a hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)

**Q: I accidentally deleted something**

A:
1. Check the "History" tab in the document
2. You can restore any previous version
3. If completely deleted, contact the webmaster

**Q: The image won't upload**

A:
1. Check file size (max 10MB)
2. Make sure it's a supported format (JPG, PNG, etc.)
3. Try a different browser
4. Contact webmaster if issue persists

**Q: I can't find a document**

A:
1. Use the search bar at the top
2. Check if filters are applied (clear them)
3. Make sure you're in the right content type
4. It might have been archived or deleted

**Q: The preview looks different from published**

A:
1. Make sure all changes are saved
2. Refresh the preview
3. Check for any validation errors in the editor

### Error Messages

| Error | Solution |
|-------|----------|
| "Required field" | Fill in all fields marked with * |
| "Invalid format" | Check dates are in correct format |
| "Upload failed" | Try a smaller file or different format |
| "Unable to publish" | Check for validation errors, fix and retry |

---

## Getting Help

### Quick Contacts

- **Website Issues**: webmaster@astoriayachtclub.org
- **Account Access**: secretary@astoriayachtclub.org
- **General Questions**: Post in the AYC Members group

### Resources

- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Video Tutorials](#) (coming soon)
- Monthly "Website Workshop" sessions

### Reporting Bugs

If something isn't working:
1. Take a screenshot of the error
2. Note what you were trying to do
3. Email webmaster@astoriayachtclub.org with details

---

## Quick Reference Card

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+S | Save draft |
| Ctrl+B | Bold text |
| Ctrl+I | Italic text |
| Ctrl+K | Add link |
| Ctrl+Z | Undo |
| Ctrl+Shift+Z | Redo |

### Content Checklist

Before publishing, check:
- [ ] All required fields filled in
- [ ] Images have alt text
- [ ] Links work correctly
- [ ] Dates and times are accurate
- [ ] Preview looks correct
- [ ] Spelling and grammar checked

---

*Last updated: January 2025*
*Questions? Contact webmaster@astoriayachtclub.org*
