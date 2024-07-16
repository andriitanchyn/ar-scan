import React, { useEffect, useRef } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const MindAr = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    sceneEl.addEventListener('renderstart', () => {
      const arSystem = sceneEl.systems["mindar-image-system"];
      if (arSystem) {
        arSystem.start();
      }
    });
    return () => {
      const arSystem = sceneEl.systems["mindar-image-system"];
      if (arSystem) {
        arSystem.stop();
      }
    }
  }, []);

  return (
    <a-scene ref={sceneRef} mindar-image={`imageTargetSrc: pysanka.mind; filterBeta: 0.001; autoStart: false; uiLoading: no; uiError: no; uiScanning: yes;`} color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="pysankaModel" src="pysanka_v2-02.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="0 90 0" scale="0.2 0.2 0.2" position="0 0 0" src="#pysankaModel"></a-gltf-model>
      </a-entity>
    </a-scene>
  )
}

export default MindAr;