import React, { useEffect, useRef } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const MindAr = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener('renderstart', () => {
      const sceneEl = sceneRef.current;
      const arSystem = sceneEl.systems["mindar-image-system"];
      if (arSystem) {
        arSystem.start();
      }
    });
    return () => {
      arSystem.stop();
    }
  }, [sceneRef]);

  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: ./pysanka.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;" color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="pysankaModel" src="./pysanka_v2-02.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="0 90 0" scale="0.2 0.2 0.2" position="0 0 0" src="#pysankaModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
      </a-entity>
    </a-scene>
  )
}

export default MindAr;