export default defineNuxtPlugin(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return

  const selector = '.service-card, .portfolio-card, .price-highlights article, .problem-card, .values-grid article, .estimator-card, .hero-v2-card'

  const bind = (element: HTMLElement) => {
    if (element.dataset.tiltReady) return
    element.dataset.tiltReady = 'true'

    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      element.style.setProperty('--tilt-x', `${(-y * 4).toFixed(2)}deg`)
      element.style.setProperty('--tilt-y', `${(x * 5).toFixed(2)}deg`)
      element.style.setProperty('--glow-x', `${((x + 0.5) * 100).toFixed(1)}%`)
      element.style.setProperty('--glow-y', `${((y + 0.5) * 100).toFixed(1)}%`)
    })

    element.addEventListener('pointerleave', () => {
      element.style.setProperty('--tilt-x', '0deg')
      element.style.setProperty('--tilt-y', '0deg')
      element.style.setProperty('--glow-x', '50%')
      element.style.setProperty('--glow-y', '50%')
    })
  }

  const register = () => document.querySelectorAll<HTMLElement>(selector).forEach(bind)
  onNuxtReady(() => {
    register()
    new MutationObserver(register).observe(document.body, { childList: true, subtree: true })
  })
})
