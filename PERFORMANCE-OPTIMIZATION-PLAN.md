# Web Performance Optimization Roadmap

## Executive Summary
This plan outlines a systematic approach to improving web performance across the SailorPiecerenew project. The roadmap is divided into 4 phases with prioritized optimizations based on impact and effort.

---

## Phase 1: Measurement & Baseline (Priority: Critical)

### 1.1 Establish Performance Baseline
- **Action**: Run Lighthouse audits on all key pages
  - Command: `npx lighthouse <url> --view --output html`
  - Target: Capture scores for LCP, FID, CLS, TBT, Speed Index
- **Action**: Identify Core Web Vitals failures
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Action**: Document current bundle sizes
  - Check `dist/` or `build/` output sizes
  - Identify largest JavaScript bundles

### 1.2 Create Performance Budget
- JavaScript: < 170KB (gzipped)
- CSS: < 10KB (critical)
- Images: Lazy load everything below fold
- Font files: Subset and preload critical weights

---

## Phase 2: Critical Optimizations (Priority: High Impact)

### 2.1 Image Optimization
- [ ] Convert images to WebP/AVIF format
- [ ] Add `loading="lazy"` to all below-fold images
- [ ] Add explicit `width` and `height` attributes
- [ ] Implement lazy loading for iframes and embeds

### 2.2 JavaScript Optimization
- [ ] Implement code splitting (dynamic imports)
  ```javascript
  // Instead of
  import { HeavyComponent } from './heavy';
  // Use
  const HeavyComponent = lazy(() => import('./heavy'));
  ```
- [ ] Remove unused code (tree shaking verification)
- [ ] Defer non-critical scripts
  ```html
  <script defer src="analytics.js"></script>
  ```

### 2.3 CSS Optimization
- [ ] Extract and inline critical CSS
- [ ] Use `content-visibility: auto` for off-screen sections
- [ ] Remove unused CSS rules

### 2.4 Font Optimization
- [ ] Add `font-display: swap` to font definitions
- [ ] Preload critical font files
- [ ] Subset fonts to only include needed characters

---

## Phase 3: Caching & Delivery (Priority: Medium Impact)

### 3.1 Caching Strategy
- [ ] Configure static asset caching (Cache-Control: max-age=31536000)
- [ ] Implement ETags for dynamic content
- [ ] Add service worker for offline capability (optional)

### 3.2 CDN & Delivery
- [ ] Enable compression (Brotli preferred over Gzip)
- [ ] Consider CDN for static assets
- [ ] Enable HTTP/2 or HTTP/3

### 3.3 Third-Party Optimization
- [ ] Audit all third-party scripts
- [ ] Lazy load non-essential third-party embeds
- [ ] Use intersection observer for deferred loading

---

## Phase 4: Monitoring & Verification (Priority: Ongoing)

### 4.1 Automated Monitoring
- [ ] Integrate Lighthouse CI into CI/CD pipeline
- [ ] Set up Core Web Vitals monitoring (Search Console, PageSpeed Insights)
- [ ] Create performance regression tests

### 4.2 RUM (Real User Monitoring)
- [ ] Consider implementing RUM for production
- [ ] Track field data vs lab data discrepancies

### 4.3 Regular Audits
- [ ] Schedule monthly Lighthouse audits
- [ ] Review performance on each major deployment

---

## Quick Wins Checklist

| Optimization | Impact | Effort |
|--------------|--------|--------|
| Add `loading="lazy"` to images | High | Low |
| Add `font-display: swap` | High | Low |
| Enable compression | High | Low |
| Configure caching headers | High | Low |
| Code splitting | High | Medium |
| Remove unused code | High | Medium |
| Image format conversion | Medium | Medium |
| Critical CSS inlining | Medium | Medium |
| Preload critical assets | Medium | Low |

---

## References

### Tools
- Lighthouse: `npx lighthouse <url>`
- Bundle Analyzer: `npm run build -- --analyze`
- WebPageTest: webpagetest.org

### Documentation
- Core Web Vitals: web.dev/vitals
- Web Performance: developer.mozilla.org/en-US/docs/Web/Performance

---

## Next Steps

1. **Run baseline measurement** - Execute Lighthouse on current build
2. **Configure budget** - Add performance budgets to build config
3. **Implement quick wins** - Start with Phase 2 items
4. **Verify improvements** - Re-run audits after changes

---

*Generated: May 2026*
*Source: web-performance-optimization skill (best practices)*