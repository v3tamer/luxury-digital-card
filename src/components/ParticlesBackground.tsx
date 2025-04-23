// ✅ ParticlesBackground.tsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
      
      options={{
        background: {
          color: {
            value: "#0a0a0a"
          }
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 900
            }
          },
          color: {
            value: "#00ffe0"
          },
          links: {
            enable: true,
            color: "#00ffe0",
            distance: 130,
            opacity: 0.25,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.4,
            outModes: {
              default: "bounce"
            }
          },
          opacity: {
            value: 0.2
          },
          size: {
            value: 2
          }
        },
        detectRetina: true
      }}
    />
  );
}

export default ParticlesBackground;
