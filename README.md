# Cost Calculators Website

A brutalist-style cost calculator website featuring 70+ specialized calculation tools for personal finance, business, real estate, construction, and more.

## Website URL
https://costcalculators.github.io

## Features

- **70+ Calculators**: Mortgage, loans, construction costs, shipping, electricity, fuel economy, profit margins, and more
- **Brutalist Design**: Bold typography, raw materials, geometric shapes with vibrant color palette
- **Smooth Animations**: CSS animations and transitions for engaging user experience
- **SEO Optimized**: Complete meta tags, schema markup, sitemap, robots.txt, and structured data
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Web Application Ready**: Progressive Web App capabilities with manifest.json

## Directory Structure

```
/
├── index.html                 # Homepage
├── 404.html                   # 404 error page
├── sitemap.xml               # XML sitemap for search engines
├── robots.txt                # Robots meta file
├── manifest.json             # PWA manifest
├── .htaccess                 # Server configuration
│
├── calculators/              # Calculator pages
│   ├── mortgage.html
│   ├── loan.html
│   ├── shipping.html
│   ├── electricity.html
│   ├── fuel.html
│   ├── construction.html
│   ├── profit-margin.html
│   └── down-payment.html
│
├── components/               # Reusable components (loaded dynamically)
│   ├── header.html
│   ├── footer.html
│   ├── sidebar.html
│   └── all-calculators.html
│
├── styles/                   # CSS files
│   ├── main.css             # Main stylesheet
│   └── calculator.css       # Calculator-specific styles
│
├── js/                       # JavaScript files
│   ├── main.js              # Main functionality
│   ├── components.js        # Component utilities
│   └── calculator-template.js # Calculator class template
│
└── assets/                   # Images and icons
    ├── logo.svg
    ├── favicon.png
    └── favicon-generator.html
```

## Design System

### Color Palette
- **Primary**: #0066ff (Blue)
- **Secondary**: #00cc66 (Green)
- **Accents**: Yellow (#ffcc00), Red (#ff3333), Purple (#9933ff), Orange (#ff9900)
- **Dark**: #1a1a1a (Background)
- **Light**: #f5f5f5 (Text)

### Typography
- **Font**: Courier New, monospace (Brutalist style)
- **Headings**: Bold, uppercase, large font sizes with letter spacing
- **Body**: Regular weight, 14-16px size

### Animations
- Slide in animations on page load
- Float animations on hero visual elements
- Hover effects on interactive elements
- Staggered animations for grid items

## Calculator Features

Each calculator includes:
- Real-time calculations as user types
- Formatted currency and numeric displays
- Multiple result cards for comprehensive information
- Responsive layout
- SEO schema markup

### Available Calculators
1. Mortgage Payment Calculator
2. Loan Payment Calculator
3. Shipping Cost Calculator
4. Electricity Cost Calculator
5. Fuel Economy Calculator
6. Construction Cost Calculator
7. Profit Margin Calculator
8. Down Payment Calculator

## SEO Features

- Meta descriptions for all pages
- Open Graph tags for social sharing
- Schema.org structured data (WebApplication type)
- Sitemap.xml for search engine indexing
- robots.txt file
- Mobile-friendly viewport configuration
- Canonical URLs

## Performance Optimization

- Gzip compression enabled via .htaccess
- Cache control headers for static assets
- Lightweight CSS without heavy frameworks
- Vanilla JavaScript (no heavy dependencies)
- Optimized images and SVG logos

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Development

### Local Development
1. Clone or download the repository
2. Serve files using a local web server
3. Open index.html in your browser

### Adding New Calculators
1. Create new HTML file in `/calculators/` directory
2. Use the calculator template with proper schema markup
3. Add link to the calculator in `/components/all-calculators.html`
4. Update `/sitemap.xml` with new page

### Customization
All colors are defined in CSS variables in `styles/main.css`:
```css
:root {
  --color-primary: #0066ff;
  --color-secondary: #00cc66;
  /* ... other colors ... */
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

- Lightweight: < 500KB total size
- Fast load times with minimal JavaScript
- Brutalist design reduces dependency on images
- Server-side caching enabled

## Future Enhancements

- More calculator categories (taxes, insurance, etc.)
- Advanced calculators with charts and graphs
- User accounts for saving calculations
- PDF export functionality
- Multi-language support
- Dark/light theme toggle

## License

This project is open source and available for personal and commercial use.

## Support

For issues, feature requests, or questions, please contact: info@costcalculators.io

---

**Last Updated**: December 2025
**Version**: 1.0.0
