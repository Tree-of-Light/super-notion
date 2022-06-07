> Note: This code is for revision control, it must be copy and pasted in the Super Admin Code section or Page Code section manually, then saved, to make live on the site. 

# Super Theming Overview
See the Super docs for more information on how things work between Notion and Super. 
- Custom Code: https://docs.super.so/custom-code
- Notion Colors: https://docs.super.so/notion-colors
- Super CSS Classes: https://docs.super.so/super-css-classes

## Instructions
There is 1 primary, site wide css file (main) and the rest is Page specific CSS code. If the CSS code needs to cover site wide styles, multiple pages or sub pages, then it needs to go in main.css since those styles are present on all pages. Page specific CSS will only work on that page. 
1. `Main`
2. Home
3. Donate
4. SpiritQuests
5. Mission

## `Main.css`
The CSS for the ToL Super Site is arranged by using the code from [main.css](./main.css) in the [Super ToL site Code section](https://app.super.so/site/e22253e5-f56b-4671-b666-dc43b02cba63/code). Login to the Super admin to edit. 


The main theme file is structured from top to bottom in sections.

1. IMPORTS & FONTS
2. TYPOGRAPHY
3. LAYOUT
4. HEADER / NAV / COVER
5. BODY / CONTENT
6. FOOTER
7. COMPONENTS
8. QUERIES - Mobile Responsiveness
9. BLOCKS - Block specific (id)
10. CHILDREN - Page (children) specific 

Each section begins something like...

```
 /* ***************************
 * 1. IMPORTS & FONTS
 * ***************************
 */
 ```

 Please be sure to put the CSS code in the most appropriate section. If it is one page specific, please put it in the Page Code section.
