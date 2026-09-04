export default defineNuxtPlugin(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const selector = '.section-heading, .problem-card, .service-card, .portfolio-card, .values-grid article, .testimonial-grid article, .price-highlights article, .method-list article, .contact-grid > div, .location-grid > div, .faq-layout > div, .business-card, .cta-panel'
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      entry.target.classList.remove('reveal-pending')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -35px' })

  const register = (root: ParentNode = document) => {
    root.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
      if (element.dataset.revealReady) return
      element.dataset.revealReady = 'true'
      element.classList.add('reveal-pending')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
      observer.observe(element)
      window.setTimeout(() => {
        element.classList.add('is-visible')
        element.classList.remove('reveal-pending')
      }, 1200)
    })
  }

  onNuxtReady(() => {
    register()
    const mutationObserver = new MutationObserver(() => register())
    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })
})
