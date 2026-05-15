'use client'

import { useEffect, useRef } from 'react'

const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_motion;
uniform float u_state;
varying vec2 v_uv;

float bayer8(vec2 p) {
  int x = int(mod(p.x, 8.0));
  int y = int(mod(p.y, 8.0));
  int i = y * 8 + x;

  if (i == 0) return 0.0; if (i == 1) return 48.0; if (i == 2) return 12.0; if (i == 3) return 60.0;
  if (i == 4) return 3.0; if (i == 5) return 51.0; if (i == 6) return 15.0; if (i == 7) return 63.0;
  if (i == 8) return 32.0; if (i == 9) return 16.0; if (i == 10) return 44.0; if (i == 11) return 28.0;
  if (i == 12) return 35.0; if (i == 13) return 19.0; if (i == 14) return 47.0; if (i == 15) return 31.0;
  if (i == 16) return 8.0; if (i == 17) return 56.0; if (i == 18) return 4.0; if (i == 19) return 52.0;
  if (i == 20) return 11.0; if (i == 21) return 59.0; if (i == 22) return 7.0; if (i == 23) return 55.0;
  if (i == 24) return 40.0; if (i == 25) return 24.0; if (i == 26) return 36.0; if (i == 27) return 20.0;
  if (i == 28) return 43.0; if (i == 29) return 27.0; if (i == 30) return 39.0; if (i == 31) return 23.0;
  if (i == 32) return 2.0; if (i == 33) return 50.0; if (i == 34) return 14.0; if (i == 35) return 62.0;
  if (i == 36) return 1.0; if (i == 37) return 49.0; if (i == 38) return 13.0; if (i == 39) return 61.0;
  if (i == 40) return 34.0; if (i == 41) return 18.0; if (i == 42) return 46.0; if (i == 43) return 30.0;
  if (i == 44) return 33.0; if (i == 45) return 17.0; if (i == 46) return 45.0; if (i == 47) return 29.0;
  if (i == 48) return 10.0; if (i == 49) return 58.0; if (i == 50) return 6.0; if (i == 51) return 54.0;
  if (i == 52) return 9.0; if (i == 53) return 57.0; if (i == 54) return 5.0; if (i == 55) return 53.0;
  if (i == 56) return 42.0; if (i == 57) return 26.0; if (i == 58) return 38.0; if (i == 59) return 22.0;
  if (i == 60) return 41.0; if (i == 61) return 25.0; if (i == 62) return 37.0;
  return 21.0;
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

vec3 palette(float value) {
  vec3 ink = vec3(4.0, 13.0, 10.0) / 255.0;
  vec3 deep = vec3(12.0, 37.0, 28.0) / 255.0;
  vec3 moss = vec3(34.0, 64.0, 44.0) / 255.0;
  vec3 brass = vec3(101.0, 72.0, 43.0) / 255.0;
  vec3 rust = vec3(159.0, 90.0, 42.0) / 255.0;
  vec3 cream = vec3(232.0, 221.0, 189.0) / 255.0;

  if (value < 0.18) return ink;
  if (value < 0.34) return deep;
  if (value < 0.54) return moss;
  if (value < 0.70) return brass;
  if (value < 0.86) return rust;
  return cream;
}

void main() {
  vec2 uv = v_uv;
  vec2 pixel = gl_FragCoord.xy;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 p = (uv - 0.5) * aspect;
  float t = u_time * u_motion;

  float radial = 1.0 - smoothstep(0.02, 0.58, length(p * vec2(1.18, 1.75)));
  float aperture = 1.0 - smoothstep(0.24, 0.72, length(p * vec2(1.0, 1.35)));
  float carrier = sin(pixel.x * 0.085 + t * 2.1) * 0.11;
  float diagonal = sin((pixel.x - pixel.y) * 0.035 + t * 2.7) * 0.11;
  float raster = sin(pixel.y * 0.055 - t * 4.0 + noise(uv * 6.0) * 2.0) * 0.18;
  float moire = sin(length(p * vec2(1.15, 1.7)) * 45.0 - t * 2.1) * radial * 0.24;

  float voiceEnvelope = exp(-pow((uv.y - 0.56) / 0.075, 2.0));
  float voice = sin(pixel.x * 0.21 + sin(pixel.x * 0.011 + t) * 4.0 + t * 7.0) * voiceEnvelope * 0.40;

  float scanline = mod(pixel.y, 5.0) < 1.0 ? -0.12 : 0.0;
  float dropout = mod(pixel.y + floor(t * 24.0), 61.0) < 2.0 ? -0.26 : 0.0;
  float packet = step(0.965, noise(vec2(floor(pixel.x / 42.0), floor(pixel.y / 3.0)) + floor(t * 4.0))) * -0.30;
  float ordered = (bayer8(floor(pixel.xy / 2.0)) / 64.0 - 0.5) * 0.34;

  float value = 0.20 + aperture * 0.38 + radial * 0.18 + carrier + diagonal + raster + moire + voice + scanline + dropout + packet + ordered;
  value = clamp(value, 0.0, 0.99);

  vec3 color = palette(value);
  float edge = smoothstep(0.50, 0.55, radial) - smoothstep(0.55, 0.60, radial);
  color = mix(color, vec3(159.0, 90.0, 42.0) / 255.0, edge * 0.55);

  float vignette = smoothstep(0.92, 0.18, length(uv - 0.5));
  color *= 0.62 + vignette * 0.55;

  gl_FragColor = vec4(color, 1.0);
}
`

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function compileShader(gl, type, source) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }

  return shader
}

function createProgram(gl) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)

  if (!vertexShader || !fragmentShader) return null

  const program = gl.createProgram()
  if (!program) return null

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program)
    return null
  }

  return program
}

export function WebGLDitherSignalPanel({ className = '', label = 'site-agent signal' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas?.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
    })

    if (!canvas || !gl) return

    const program = createProgram(gl)
    if (!program) return

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const motionLocation = gl.getUniformLocation(program, 'u_motion')
    const stateLocation = gl.getUniformLocation(program, 'u_state')
    const buffer = gl.createBuffer()
    let animationFrame = 0
    let start = performance.now()
    let destroyed = false
    const reduceMotion = prefersReducedMotion()

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    )

    function resize() {
      const rect = canvas.getBoundingClientRect()
      const dpr = reduceMotion ? 1 : Math.min(window.devicePixelRatio || 1, 1.5)
      const width = Math.max(1, Math.floor(rect.width * dpr))
      const height = Math.max(1, Math.floor(rect.height * dpr))

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }

      gl.viewport(0, 0, width, height)
    }

    function render(now = start) {
      resize()
      gl.useProgram(program)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, (now - start) / 1000)
      gl.uniform1f(motionLocation, reduceMotion ? 0 : 1)
      gl.uniform1f(stateLocation, 0)
      gl.drawArrays(gl.TRIANGLES, 0, 3)

      if (!reduceMotion && !destroyed) {
        animationFrame = requestAnimationFrame(render)
      }
    }

    render()

    const observer = new ResizeObserver(() => render())
    observer.observe(canvas)

    return () => {
      destroyed = true
      cancelAnimationFrame(animationFrame)
      observer.disconnect()
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full [image-rendering:pixelated]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,221,189,0.05),rgba(3,28,26,0.18)_38%,rgba(0,0,0,0.54)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(232,221,189,0.08),transparent_15%,transparent_84%,rgba(0,0,0,0.42))]" />
      <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.22em] text-cream/38">
        <span>{label}</span>
        <span>webgl bayer dither // live context</span>
      </div>
      <div className="pointer-events-none absolute inset-x-4 bottom-4 grid grid-cols-[1fr_auto] items-end gap-4 font-mono text-xs uppercase tracking-[0.16em] text-rust/80">
        <span>listening field / no face / no gradient orb</span>
        <span className="text-cream/38">fragment shader</span>
      </div>
    </div>
  )
}
