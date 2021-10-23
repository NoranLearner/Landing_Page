
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/* Define Global Variables */

// Store All Sections Element in This variable sections
const sections = document.querySelectorAll('section')

// Store UL Element in This variable navList
const navList = document.getElementById('navbar__list')

// For The Performance - Execute The Steps and Store it in Variable fragment and Append it to the navList Variable
const fragment = document.createDocumentFragment()

/* End Global Variables */

/* Start Build The Navbar */

// Apply This steps to All Sections
sections.forEach((element, index) => {
  // Store data-nav Attribute in Variable linkText
  const linkText = element.getAttribute('data-nav')
  // Store linkText in Variable textnode
  // The createTextNode method creates a Text Node with the specified text.
  const textnode = document.createTextNode(linkText)
  // Create Anchor Element and Store it in Variable newLink
  const newLink = document.createElement('a')
  // Create List Element and Store it in Variable newLi
  const newLi = document.createElement('li')
  // Add the textnode - data-nav Attribute - in Anchor Element
  newLink.appendChild(textnode)
  // Add the Anchor Element in the List Element
  newLi.appendChild(newLink)
  // Scroll to section on link click by listenting to the click-event in the newLink
  newLink.addEventListener('click', () => {
    element.scrollIntoView({ behavior: 'smooth' })
  })
  // Add the List Element in Window
  fragment.appendChild(newLi)
})
// Build the Menu
navList.appendChild(fragment)

/* End Build The Navbar */

/* Start Add class 'active' to section when near top of viewport */

// Attach a Scroll event to the Window.
window.addEventListener('scroll', () => {
  sections.forEach((element2, index) => {
    // Store data-nav attribute in Variable dataNav
    const dataNav = element2.getAttribute('data-nav')
    // Return the size of an element and its position relative to the viewport
    const rect = element2.getBoundingClientRect()
    if (rect.top > 0 && rect.top < 300) {
      sections.forEach((activeSec) => {
        // Returns a Boolean value, indicating whether an element has the specified class name: .your-active-class
        if (activeSec.classList.contains('your-active-class')) {
          // Removes class name: .your-active-class from the element
          activeSec.classList.remove('your-active-class')
        }
      })
      // Adds class name: .your-active-class to the element.
      element2.classList.add('your-active-class')
      // Store All Anchor Element in This variable links
      const links = document.querySelectorAll('a')
      links.forEach((activeLink) => {
        // Returns a Boolean value, indicating whether an element has the specified text
        if (activeLink.innerText === dataNav) {
          links.forEach((delActiveLink) => {
            // Removes class name: .activeLink from the element
            delActiveLink.classList.remove('activeLink')
          })
          // Adds class name: .activeLink to the element
          activeLink.classList.add('activeLink')
        }
      })
    }
  })
})

/* End Add class 'active' to section when near top of viewport */

/* Start Go To Top Button */

// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// Get the button
const goToTopElement = document.getElementById('back-to-top')

// When the user clicks on the button, scroll to the top of the document
function goToTop (params) {
  goToTopElement.addEventListener('click', () => {
    window.scrollTo({ top: 0 })
  })
}

// When the user scrolls down 50px from the top of the window, show the button
window.addEventListener('scroll', () => {
  const scrollPrecent = ((window.innerHeight + window.scrollY) / document.body.offsetHeight) * 100
  // show or hide Scroll Top Button
  if (scrollPrecent > 50) {
    // show
    goToTopElement.classList.remove('display__none')
  } else {
    // Hide
    goToTopElement.classList.add('display__none')
  }
})

/* End Go To Top Button */
