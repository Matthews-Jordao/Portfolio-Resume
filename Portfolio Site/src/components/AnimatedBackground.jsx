import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const getNoiseValue = (x, y, time) => {
      const scale = 0.005
      const val1 = Math.sin(x * scale + time * 0.0005) * Math.cos(y * scale + time * 0.0003)
      const val2 = Math.sin((x + y) * scale * 0.5 + time * 0.0004) * 0.5
      const val3 = Math.sin((x - y) * scale * 0.3 + time * 0.0002) * 0.3
      return (val1 + val2 + val3) * 0.4 + 0.5
    }

    const drawLine = (x1, y1, x2, y2, time, strength = 1) => {
      const noise = getNoiseValue((x1 + x2) / 2, (y1 + y2) / 2, time)
      const opacity = noise * strength

      ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.3})`
      ctx.lineWidth = 1 + noise * 1.5
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }

    const drawBlob = (centerX, centerY, radius, time, offset = 0) => {
      const points = 40
      const noiseScale = getNoiseValue(centerX, centerY, time + offset)
      const opacity = noiseScale * 0.5

      ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.1})`
      ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.2})`
      ctx.lineWidth = 1

      ctx.beginPath()

      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2
        const noiseVariation = getNoiseValue(
          centerX + Math.cos(angle) * 100,
          centerY + Math.sin(angle) * 100,
          time
        )
        const variableRadius = radius * (0.6 + noiseVariation * 0.6)
        const x = centerX + Math.cos(angle) * variableRadius
        const y = centerY + Math.sin(angle) * variableRadius

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.closePath()
      ctx.fill()
      ctx.stroke()
    }

    const drawTopoLines = (time) => {
      const w = canvas.width
      const h = canvas.height
      const spacing = 80

      for (let y = 0; y < h; y += spacing) {
        for (let x = 0; x < w; x += spacing * 2) {
          drawLine(
            x,
            y + Math.sin(time * 0.0002 + y * 0.005) * 15,
            x + spacing * 2,
            y + Math.sin(time * 0.0002 + y * 0.005) * 15,
            time,
            0.5 + Math.sin(time * 0.0001 + y * 0.01) * 0.3
          )
        }
      }

      for (let x = 0; x < w; x += spacing) {
        for (let y = 0; y < h; y += spacing * 2) {
          drawLine(
            x + Math.cos(time * 0.0002 + x * 0.005) * 15,
            y,
            x + Math.cos(time * 0.0002 + x * 0.005) * 15,
            y + spacing * 2,
            time,
            0.5 + Math.cos(time * 0.0001 + x * 0.01) * 0.3
          )
        }
      }

      for (let i = 0; i < 8; i++) {
        const startY = (h / 8) * i
        const wave = Math.sin(time * 0.0001 + i * 0.5) * 30
        for (let x = 0; x < w; x += 100) {
          const y = startY + Math.sin(x * 0.01 + time * 0.0003 + i) * 50 + wave
          const nextY = startY + Math.sin((x + 100) * 0.01 + time * 0.0003 + i) * 50 + wave

          drawLine(x, y, x + 100, nextY, time, 0.4)
        }
      }
    }

    const animate = (time) => {
      ctx.fillStyle = 'rgb(15, 23, 42)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const blobConfigs = [
        { x: 0.2, y: 0.2, r: 150, offset: 0 },
        { x: 0.8, y: 0.3, r: 180, offset: 1000 },
        { x: 0.5, y: 0.7, r: 200, offset: 2000 },
        { x: 0.15, y: 0.65, r: 160, offset: 3000 },
        { x: 0.85, y: 0.85, r: 170, offset: 4000 },
        { x: 0.5, y: 0.15, r: 140, offset: 5000 },
      ]

      blobConfigs.forEach(config => {
        drawBlob(
          canvas.width * config.x,
          canvas.height * config.y,
          config.r,
          time,
          config.offset
        )
      })

      drawTopoLines(time)

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
