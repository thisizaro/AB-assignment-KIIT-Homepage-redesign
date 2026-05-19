# UI/UX Redesign of KIIT University Website

## 1. Introduction

This project was undertaken as part of a internship assignment with the objective of improving the UI/UX of an existing college website. The focus was on enhancing the frontend experience without performing a complete redesign.

The target website was the official website of Kalinga Institute of Industrial Technology (kiit.ac.in). The goal was to improve usability, readability, and responsiveness while maintaining the existing structure, branding, and content intent.

Scope of work:
- Improve frontend UI/UX
- Maintain branding and structure
- No backend modifications
- No full redesign

---

## 2. Problem Statement

The existing website suffers from several UI/UX issues that negatively impact user experience. These include poor visual hierarchy, excessive information density, inconsistent typography, weak call-to-action visibility, and navigation difficulties. Additionally, responsiveness issues affect usability on mobile devices.

---

## 3. Methodology

A structured approach was followed to ensure clarity and efficiency:

1. Conducted a UX audit using AI to identify key usability issues
2. Applied prompt engineering techniques using role, context, task, and constraints
3. Converted audit insights into actionable UI improvements
4. Rebuilt the frontend using a component-based React architecture
5. Documented all prompts and decisions for transparency

---

## 4. UX Audit Summary

### 4.1 Layout and Visual Hierarchy
- Information overload in rankings and statistics sections
- Poor spacing leading to cluttered layout
- Overuse of carousel reducing content clarity

### 4h.2 Typography
- Weak hierarchy between headings and descriptive text
- Poor readability due to inconsistent alignment
- Improper scaling of text elements

### 4.3 Colors and Contrast
- Call-to-action elements lack distinction
- Text over images suffers from low contrast
- Overuse of brand colors reduces visual clarity

### 4.4 Navigation
- Hover-based mega menus cause usability issues
- Redundant and unstructured quick links in footer

### 4.5 Responsiveness
- Multi-column layouts break on smaller screens
- Mobile navigation becomes excessively long and difficult to use

---

## 5. Identified Fix Strategy

| Problem | Solution | Priority |
|--------|--------|--------|
| Information overload | Convert to structured grid layout | High |
| Poor spacing | Introduce consistent padding system | High |
| Weak CTA visibility | Use high-contrast accent color | High |
| Navigation issues | Improve menu interaction logic | High |
| Mobile layout issues | Implement responsive grid system | High |

---

## 6. Prompt Engineering Approach

A structured prompt engineering method was used to guide AI outputs effectively:

- Role: Defines expertise of the AI
- Context: Provides background and constraints
- Task: Specifies the objective clearly
- Constraints: Ensures controlled and relevant output

This approach ensured consistent and high-quality results across different stages of the project.

---

## 7. Key Prompts Used

### 7.1 UI/UX Audit Prompt

Role: You are a senior UI/UX designer with experience improving college and institutional websites

Context: I am working on improving the frontend UI/UX of my college website as part of a startup internship. I do not want a complete redesign, only meaningful improvements that can be implemented quickly. The current website has issues but I need a structured analysis before making changes.

Task: Analyze the given website and identify UI/UX problems, https://kiit.ac.in/ (if this doesnt work i can upload the raw HTML file).

Constraints:
- Focus only on practical, high-impact improvements
- Do not suggest a full redesign
- Categorize issues into: layout, typography, colors, navigation, and responsiveness
- For each issue, explain why it is a problem
- Keep suggestions realistic for a short timeline
- Output in a clean, structured format

---

### 7.2 Prompt Engineering Prompt

Role: You are an expert prompt engineer specializing in creating high-quality prompts for frontend development tasks.

Context: I am working on improving the UI/UX of a college website as part of an internship. I have conducted a detailed UX audit identifying issues in layout, typography, colors, navigation, and responsiveness. I want to use this audit to guide AI-assisted frontend development using Claude.

Task:
Using the provided UX audit, generate a well-structured and optimized prompt that can be given to Claude Code to build a clean, modern React-based frontend. The prompt should clearly guide the AI to improve UI/UX while maintaining the original purpose and structure of the website.

Constraints:
- Keep the prompt clear, professional, and concise
- Use a structured format (role, context, task, constraints)
- Ensure the prompt is practical and implementation-focused
- Avoid unnecessary complexity or vague instructions
- The output prompt should be directly usable with minimal modification

---

### 7.3 Implementation Prompt

Role: You are a senior frontend developer and UI/UX designer specializing in modern, clean, and responsive React applications for institutional and university websites.

Context: I am working on improving the UI/UX of an existing college website as part of a startup internship. The website is Kalinga Institute of Industrial Technology (kiit.ac.in). I do not have access to the original structured source code, only the live website and extracted HTML which is not suitable for editing.

I want to rebuild an improved version of the homepage using React while keeping the overall structure, content intent, and branding similar. This is not a full redesign but a focused UI/UX improvement based on an audit.

The audit identified issues related to information overload, poor visual hierarchy, inconsistent typography, weak CTA visibility, problematic navigation behavior, and mobile responsiveness issues.

Task:
Design and implement a clean React-based homepage that improves the UI/UX of the existing website while maintaining its identity.

Incorporate the following improvements:
- Organize dense information such as rankings and statistics into structured and scannable layouts
- Replace or improve the current carousel behavior to make content more readable and less distracting
- Improve typography hierarchy, spacing, and readability
- Establish a clear and consistent CTA system with strong visual contrast
- Improve navigation usability, especially mega menu interaction
- Create a structured and role-based footer system
- Ensure proper responsive behavior across devices

Also include a minimal chatbot UI component with a floating trigger and a simple chat interface. No backend logic is required.

Constraints:
- Use React with functional components
- Keep the design clean, minimal, and professional
- Do not overdesign or introduce unnecessary complexity
- Use simple and maintainable styling
- Ensure strong responsiveness across screen sizes
- Focus on usability, spacing, and clarity
- Keep the code modular and readable
- Do not include backend or API integrations

---

## 8. Implementation

### 8.1 Tech Stack
- React (Vite)
- CSS for styling
- AI tools: Gemini and Claude

### 8.2 Component Structure

The application was rebuilt using a modular component-based structure:

- Navbar
- Mobile Menu
- Hero Section
- Rankings Section
- Stats Banner
- Academics Section
- Campus Section
- Admissions Section
- News Section
- Footer
- Chatbot Component

### 8.3 Feature Enhancements

- Improved layout and spacing
- Better typography hierarchy
- Structured data presentation
- Responsive design for all screen sizes
- Minimal chatbot UI for user interaction

---

## 9. Before vs After Improvements

Before:
- Dense and cluttered layout
- Poor readability
- Weak visual hierarchy
- Navigation difficulties

After:
- Clean and structured layout
- Improved readability and spacing
- Strong typography hierarchy
- Enhanced navigation and usability

---

## 10. Challenges Faced

- Lack of access to original source code
- Extracted HTML was not suitable for direct modification
- Balancing improvement without full redesign
- Ensuring consistency across components

---

## 11. Learnings

- Importance of structured prompt engineering
- Value of UX analysis before development
- Benefits of modular frontend architecture
- Effective use of AI as a development assistant

---

## 12. Conclusion

The project successfully improved the UI/UX of the KIIT website by addressing key usability issues while maintaining its original structure and identity. A clean and scalable React-based frontend was developed, demonstrating both technical and design improvements.