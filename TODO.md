# TODO: Add Framer Motion Animations to All Components and Pages

## Overview
Add smooth animations using Framer Motion for transitions, scroll effects, and navigation across all components and pages.

## Tasks

### 1. Page Transitions (App.tsx)
- [x] Import AnimatePresence from framer-motion
- [x] Wrap Routes with AnimatePresence
- [x] Add exit animations for page transitions

### 2. Home Page Components (Home.tsx)
- [x] Import motion, useInView from framer-motion
- [x] Add scroll-triggered fade-in animations to Hero, About, Services, Portfolio, Contact sections

### 3. Hero Component (Hero.tsx)
- [x] Replace CSS transitions with framer-motion AnimatePresence for slideshow
- [x] Add slide-in/out animations for slides
- [x] Animate text overlays

### 4. About Component (About.tsx)
- [x] Add fade-in animation for the entire section
- [x] Stagger animation for text and image

### 5. Services Component (services.tsx)
- [x] Add stagger animation for the grid of cards
- [x] Animate card hover effects with framer-motion
- [x] Animate the caption box section

### 6. Blog Page (Blog.tsx)
- [x] Animate hero section fade-in
- [x] Add stagger animation to BlogCards

### 7. BlogCards Component (blogCards.tsx)
- [x] Add stagger animation for the grid of cards
- [x] Animate card hover effects

### 8. BlogDetail Page (BlogDetail.tsx)
- [ ] Animate hero section
- [ ] Stagger content sections
- [ ] Animate navigation buttons

### 9. Contact Component (contact.tsx)
- [ ] Animate form fade-in
- [ ] Stagger form fields
- [ ] Animate image section

### 10. Aboutus Page (Aboutus.tsx)
- [ ] Animate hero section
- [ ] Add scroll animations to each section (My Story, Gallery, Guarantee, Your Story)
- [ ] Stagger gallery images

### 11. NavBar Component (NavBar.tsx)
- [ ] Animate mobile menu open/close with slide-down
- [ ] Add hover animations to links

### 12. Portfolio Page (portofolio.tsx)
- [ ] Animate filter buttons
- [ ] Add stagger animation to portfolio grid
- [ ] Animate item hover effects

### 13. PortfolioDetail Page (portofolioDetail.tsx)
- [ ] Animate hero section
- [ ] Stagger gallery images
- [ ] Animate description section

### 14. Services Page (services.tsx)
- [ ] Animate hero section
- [ ] Stagger package cards
- [ ] Animate FAQ accordion
- [ ] Animate quote section

### 15. FedBacks Component (FedBacks.tsx)
- [ ] Enhance slideshow with framer-motion
- [ ] Animate image overlays

### 16. Testimonals Component (Testimonals.tsx)
- [ ] Add stagger animation to testimonials
- [ ] Animate quote icons

### 17. Footer Component (Footer.tsx)
- [ ] Animate footer fade-in on scroll
- [ ] Stagger social links

### 18. NotFound Page (notfound.tsx)
- [ ] Animate 404 content fade-in

## Followup Steps
- [ ] Test all animations on different screen sizes
- [ ] Optimize performance (reduce motion for users who prefer it)
- [ ] Ensure animations don't interfere with accessibility
