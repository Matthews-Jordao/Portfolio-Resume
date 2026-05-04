import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const IRIS_CLOSE = 580
const IRIS_OPEN  = 620

export default function PageTransition() {
  const [phase, setPhase] = useState('idle')
  const navigate = useNavigate()
  const pending  = useRef(null)

  // Intercept all internal link clicks
  useEffect(() => {
    const handleClick = (e) => {
      if (phase !== 'idle') return

      const link = e.target.closest('a[href]')
      if (!link) return
      if (link.hasAttribute('download')) return
      if (link.getAttribute('target') === '_blank') return

      const href = link.getAttribute('href')
      if (!href) return
      if (
        href.startsWith('http')   ||
        href.startsWith('mailto') ||
        href.startsWith('#')      ||
        href.startsWith('blob:')
      ) return

      e.preventDefault()
      e.stopPropagation()
      pending.current = href
      setPhase('out')
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [phase])

  // Phase state machine
  useEffect(() => {
    if (phase === 'out') {
      const t = setTimeout(() => {
        navigate(pending.current)
        // Two rAFs so new page content paints before iris opens
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setPhase('in'))
        )
      }, IRIS_CLOSE)
      return () => clearTimeout(t)
    }

    if (phase === 'in') {
      const t = setTimeout(() => setPhase('idle'), IRIS_OPEN)
      return () => clearTimeout(t)
    }
  }, [phase, navigate])

  // Sync phase → main class
  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return
    main.classList.remove('iris-out', 'iris-in')
    if (phase === 'out') main.classList.add('iris-out')
    if (phase === 'in')  main.classList.add('iris-in')
    return () => main.classList.remove('iris-out', 'iris-in')
  }, [phase])

  return null
}
