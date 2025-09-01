<template>
  <div class="aurora-container" ref="auroraContainer">
    <canvas ref="canvas" class="aurora-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Renderer, Camera, Transform, Mesh, Program, Geometry } from 'ogl'

interface Props {
  colorStops?: string[]
  amplitude?: number
  blend?: number
  speed?: number
  intensity?: number
}

const props = withDefaults(defineProps<Props>(), {
  colorStops: () => ['#7cff67', '#171D22', '#7cff67'],
  amplitude: 1.0,
  blend: 0.5,
  speed: 1.0,
  intensity: 1.0
})

const canvas = ref<HTMLCanvasElement>()
const auroraContainer = ref<HTMLDivElement>()

let renderer: Renderer
let camera: Camera
let scene: Transform
let mesh: Mesh
let animationId: number
let time = 0

const vertexShader = `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uSpeed;
  uniform float uIntensity;
  uniform vec2 uResolution;
  varying vec2 vUv;
  
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  
  float noise(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }
  
  void main() {
    vec2 st = vUv;
    vec2 pos = st * 2.0 - 1.0;
    
    // Create flowing aurora effect
    float wave1 = sin(pos.x * 3.0 + uTime * uSpeed) * uAmplitude;
    float wave2 = sin(pos.x * 5.0 + uTime * uSpeed * 0.7) * uAmplitude * 0.5;
    float wave3 = sin(pos.x * 7.0 + uTime * uSpeed * 1.3) * uAmplitude * 0.3;
    
    float combinedWave = wave1 + wave2 + wave3;
    
    // Distance from wave center
    float dist = abs(pos.y - combinedWave * 0.3);
    
    // Aurora intensity based on distance
    float intensity = 1.0 - smoothstep(0.0, 0.4, dist);
    intensity *= uIntensity;
    
    // Color variation
    float hue = 0.3 + sin(pos.x * 2.0 + uTime * 0.5) * 0.1;
    float saturation = 0.8;
    float brightness = intensity;
    
    vec3 color = hsv2rgb(vec3(hue, saturation, brightness));
    
    // Add some noise for texture
    float noiseValue = noise(st * 10.0 + uTime * 0.1) * 0.1;
    color += noiseValue;
    
    gl_FragColor = vec4(color, intensity * 0.8);
  }
`

const initAurora = () => {
  if (!canvas.value || !auroraContainer.value) return
  
  renderer = new Renderer({ 
    canvas: canvas.value, 
    alpha: true,
    width: auroraContainer.value.clientWidth,
    height: auroraContainer.value.clientHeight,
    dpr: Math.min(window.devicePixelRatio, 2)
  })
  camera = new Camera()
  scene = new Transform()
  
  const geometry = new Geometry(renderer.gl, {
    position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
    uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
  })
  
  const program = new Program(renderer.gl, {
    vertex: vertexShader,
    fragment: fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uColorStops: { value: props.colorStops },
      uAmplitude: { value: props.amplitude },
      uSpeed: { value: props.speed },
      uIntensity: { value: props.intensity },
      uResolution: { value: [auroraContainer.value.clientWidth, auroraContainer.value.clientHeight] }
    },
    transparent: true,
    cullFace: null
  })
  
  mesh = new Mesh(renderer.gl, { geometry, program })
  mesh.setParent(scene)
  
  resize()
  animate()
}

const resize = () => {
  if (!renderer || !auroraContainer.value) return
  
  const { clientWidth, clientHeight } = auroraContainer.value
  renderer.setSize(clientWidth, clientHeight)
  
  if (mesh?.program?.uniforms) {
    mesh.program.uniforms.uResolution.value = [clientWidth, clientHeight]
  }
}

const animate = () => {
  time += 0.016
  
  if (mesh?.program?.uniforms) {
    mesh.program.uniforms.uTime.value = time
    mesh.program.uniforms.uAmplitude.value = props.amplitude
    mesh.program.uniforms.uSpeed.value = props.speed
    mesh.program.uniforms.uIntensity.value = props.intensity
  }
  
  renderer.render({ scene, camera })
  animationId = requestAnimationFrame(animate)
}

const cleanup = () => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
}

onMounted(() => {
  initAurora()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cleanup()
  window.removeEventListener('resize', resize)
})

// Watch for prop changes
watch(() => [props.amplitude, props.speed, props.intensity], () => {
  if (mesh?.program?.uniforms) {
    mesh.program.uniforms.uAmplitude.value = props.amplitude
    mesh.program.uniforms.uSpeed.value = props.speed
    mesh.program.uniforms.uIntensity.value = props.intensity
  }
})
</script>

<style scoped>
.aurora-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.aurora-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>