# Shay Kay — Creative Director & AI Visual Creator Portfolio

A premium editorial-style portfolio website built with modern web technologies, inspired by the sophisticated design language of luxury brand experiences.

## Features

- **Premium Editorial Design**: Large-scale typography, generous whitespace, and cinematic layouts
- **Smooth Scrolling**: Powered by Lenis for a weighted, premium scroll feel
- **Advanced Animations**: GSAP ScrollTrigger for scroll-linked animations and reveals
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **Media Placeholders**: Ready to replace with your own content
- **Performance Optimized**: Clean, efficient code with minimal dependencies
- **No Build Required**: Pure HTML/CSS/JS — ready to deploy immediately

## Project Structure

```
/
├── index.html              # Main portfolio page
├── styles.css              # All styling with responsive design
├── script.js               # Animations and interactions
├── package.json            # Project metadata
├── README.md               # This file
├── data/
│   └── projects.js         # Project and content data structure
└── public/
    └── media/
        ├── hero.mp4                    # Hero section video
        ├── shay-portrait.jpg           # About section portrait
        ├── projects/                   # Portfolio project media
        │   ├── beauty-skincare.mp4
        │   ├── beauty-skincare-poster.jpg
        │   ├── health-wellness.mp4
        │   ├── health-wellness-poster.jpg
        │   ├── health-secondary.jpg
        │   ├── product-stories.mp4
        │   ├── product-stories-poster.jpg
        │   ├── storytelling-short.mp4
        │   ├── storytelling-poster.jpg
        │   ├── health-tech.mp4
        │   ├── health-tech-poster.jpg
        │   ├── ugc-01.mp4
        │   ├── ugc-02.mp4
        │   ├── ugc-03.mp4
        │   └── ovena-featured.mp4
        ├── process/                    # Process stage videos
        │   ├── concept.mp4
        │   ├── production.mp4
        │   ├── editing.mp4
        │   └── delivery.mp4
        └── testimonials/               # Client testimonial images
            ├── client-01.jpg
            ├── client-02.jpg
            └── client-03.jpg
```

## How to Replace Media Placeholders

### 1. Hero Section
Replace `/public/media/hero.mp4` with your hero video:
- Recommended: Cinematic, 16:9 aspect ratio
- Format: MP4 (H.264)
- Duration: 10-30 seconds
- File size: Keep under 50MB for web

### 2. Featured Work Project
Replace `/public/media/projects/ovena-featured.mp4` with your featured project video

### 3. Capabilities Gallery
Each capability section has a placeholder. Add images/videos for:
- `01 / AI Films`
- `02 / Beauty & Skincare`
- `03 / Health & Wellness`
- `04 / AI UGC`
- `05 / Product Visuals`
- `06 / Paid Social`
- `07 / Creative Direction`
- `08 / Graphic Design`

### 4. Process Sections
Replace these with your creative process visuals:
- `/public/media/process/concept.mp4` - Concept & Creative Strategy
- `/public/media/process/production.mp4` - AI Production
- `/public/media/process/editing.mp4` - Edit & Motion
- `/public/media/process/delivery.mp4` - Campaign-ready Content

### 5. Portfolio Projects (Selected Work)
Six projects with specific layouts:

**Project 01 - Beauty**: Single large portrait video
- File: `/public/media/projects/beauty-skincare.mp4`

**Project 02 - Healthcare**: Dual offset layout
- Large: `/public/media/projects/health-wellness.mp4`
- Small: `/public/media/projects/health-secondary.jpg`

**Project 03 - Product**: Full-width landscape
- File: `/public/media/projects/product-stories.mp4`

**Project 04 - Storytelling**: Cinematic 2.39:1 aspect
- File: `/public/media/projects/storytelling-short.mp4`

**Project 05 - Health Tech**: Asymmetric layout
- File: `/public/media/projects/health-tech.mp4`

**Project 06 - Social UGC**: Vertical 9:16 triptych
- Files: 
  - `/public/media/projects/ugc-01.mp4`
  - `/public/media/projects/ugc-02.mp4`
  - `/public/media/projects/ugc-03.mp4`

### 6. About Section
Replace `/public/media/shay-portrait.jpg` with your portrait
- Recommended: 3:4 aspect ratio
- Professional headshot or creative portrait
- File size: Keep under 1MB

## Customizing Text Content

Edit the following in `index.html`:

### Navigation & Branding
- `SHAY KAY™` - Your name/brand (line 24)
- Navigation links: Work, Capabilities, About, Contact (lines 26-29)

### Hero Section (lines 38-53)
- `CREATIVE DIRECTOR · AI VISUAL CREATOR` - Your tagline
- `Ideas, made visible.` - Your headline
- Supporting copy and CTA text

### Proof Strip (lines 57-69)
- Three key confidence indicators specific to your practice

### Featured Work (lines 73-100)
- `Building visual worlds for brands.` - Section heading
- `Ovena Health` - Featured project title and description

### Capabilities (lines 104-160)
- Eight capabilities with titles and numbers

### Process Sections (lines 229-329)
- Customize the four stages: Think → Build → Shape → Deliver
- Adjust text to match your actual workflow

### Testimonials (lines 464-502)
- Replace with real client testimonials
- Update client names, companies, and project types

### About Section (lines 519-563)
- `SHAY KAY` - Your name
- Role description and biography
- Location and availability
- Expertise areas

### Contact Links
- Update email: `hello@example.com` (line 615)
- Social media links: Instagram, LinkedIn, Upwork (lines 664-666)

## Design System

### Color Palette
```css
--bg-light: #F2F0EA        /* Warm stone background */
--bg-dark: #111111         /* Dark sections */
--text-dark: #111111       /* Main text */
--text-light: #F2F0EA      /* Light text on dark */
--text-secondary: #696760  /* Secondary/muted text */
--accent: #B5A895          /* Warm accent (use sparingly) */
```

To change colors, edit the `:root` variables in `styles.css` (lines 15-23).

### Typography
- Font: System fonts (Inter, Helvetica Neue, Segoe UI)
- To use custom fonts, add via Google Fonts or self-hosted files
- Update the `font-family` in `styles.css` (line 45)

### Spacing
Responsive spacing using CSS variables:
```css
--spacing-xs: 16px    /* Mobile padding */
--spacing-sm: 24px
--spacing-md: 32px
--spacing-lg: 50px    /* Desktop padding */
--spacing-xl: 70px
```

Automatically adjusts for tablet and mobile.

## Running the Site

### Option 1: Simple HTTP Server (Python)
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

### Option 2: Node HTTP Server
```bash
npx http-server
```

### Option 3: Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

### Option 4: Deploy to Production
Upload all files to any web host:
- Netlify
- Vercel
- GitHub Pages
- Traditional hosting (FTP/SSH)

No build process needed — it's ready to go!

## Animations & Interactions

### Scroll Animations
- Section reveals on scroll
- Image scale and parallax effects
- Typography animation stagger
- Smooth Lenis scroll feel

### Hover Effects (Desktop Only)
- Project media slight scale on hover
- Navigation link underline reveal
- CTA link color transition

### Mobile Optimizations
- Touch-friendly scrolling
- Simplified marquee animations
- Video autoplay in view
- No excessive parallax

### Customize Animations
Edit `script.js` to adjust:
- Animation timing (duration in ms)
- Scroll trigger points
- Easing functions
- Parallax intensity
- Hover scales

## Performance Tips

1. **Compress Media Files**
   - Videos: Use H.264 codec, ~10-15 Mbps bitrate
   - Images: Use WebP format where supported, fallback to JPG
   - Posterframes: 1-2MB JPEG for fast loading

2. **Optimize Large Files**
   - Use CDN for media delivery
   - Consider lazy-loading for below-fold sections
   - Enable gzip compression on server

3. **Caching**
   - Set long cache headers for static assets
   - Use service workers for offline support

4. **Analytics**
   - Add Google Analytics, Hotjar, or Mixpanel tags
   - Track user engagement and scroll depth

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS 12+
- Android 6+
- IE11 not supported (uses modern CSS Grid, CSS Variables, etc.)

## Accessibility

- Semantic HTML structure
- Color contrast meets WCAG AA standards
- Keyboard navigation support
- Screen reader friendly
- Focus management for interactive elements

## SEO Optimization

### Add to index.html head:
```html
<!-- Already included: -->
<title>Shay Kay — Creative Director & AI Visual Creator</title>
<meta name="description" content="...">

<!-- Consider adding: -->
<meta name="keywords" content="creative direction, AI video, film production">
<meta property="og:title" content="Shay Kay Portfolio">
<meta property="og:description" content="...">
<meta property="og:image" content="/path/to/social-share.jpg">
<link rel="canonical" href="https://yourdomain.com">
```

## Advanced Customization

### Adding New Sections
1. Add HTML in `index.html`
2. Add CSS in `styles.css`
3. Add animations in `script.js` using ScrollTrigger pattern

### Changing Layouts
Projects use flexible grid layouts:
- Modify `.project-layout` grid-template-columns
- Adjust gap and alignment
- Use `@media` queries for responsive changes

### Custom Fonts
Replace system fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

## Troubleshooting

### Videos not playing
- Check browser autoplay policies (video must have `muted` attribute)
- Ensure video codec compatibility
- Check file paths are correct

### Animations lag on mobile
- Reduce animation complexity
- Disable parallax on smaller screens (already done)
- Use CSS transforms (gpu-accelerated)

### Layout breaks on tablet
- Check responsive breakpoints in CSS
- Adjust grid columns for medium screens
- Test at different viewport sizes

## Future Enhancements

- Add contact form with email integration
- Implement case study pages
- Add blog/articles section
- Dark mode toggle
- Multi-language support
- Video modal lightbox
- Client filtering by service type
- Real-time analytics dashboard

## Support & Questions

For questions about structure or customization:
1. Check the HTML comments in `index.html`
2. Review CSS variable definitions
3. Look at GSAP ScrollTrigger documentation
4. Inspect element using browser DevTools

## License

This portfolio template is provided as-is for your use.

---

**Ready to customize?** Start by replacing the media files in `/public/media/` with your own work, then update the text content in `index.html`. Enjoy!
