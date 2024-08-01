import React, { useEffect, useRef } from 'react';
import 'three';
import 'aframe';
import 'aframe-extras';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const MindAr = () => {
  const sceneRef = useRef(null);

  const showTarget5Video = () => {
    const panel = document.querySelector("#target5-panel");

    panel.setAttribute("visible", true);
    panel.setAttribute("position", "0 0 -0.01");
  }


  useEffect(()=> {
    // eslint-disable-next-line no-undef
    AFRAME.registerComponent('knottarget', {
      init: function () {
        this.el.addEventListener('targetFound', event => {
          console.log("target found", event);
          showTarget5Video();
          
        });
        this.el.addEventListener('targetLost', event => {
          console.log("target lost");
        });
      }
    });
  }, []);

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
    <>
      <a-scene inspector="url: http://localhost:3333/dist/aframe-inspector.js" ref={sceneRef} mindar-image={`imageTargetSrc: target10.mind; filterBeta: 0; autoStart: false; uiLoading: no; uiError: no; uiScanning: yes;`} color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
        <a-assets timeout="100">
          <a-asset-item id="clayModel" src="targets/0/target0.gltf"></a-asset-item>
          <a-asset-item id="pysankaModel" src="targets/1/target1.gltf"></a-asset-item>
          <a-asset-item id="flopyModel" src="targets/2/target2.gltf"></a-asset-item>
          <a-asset-item id="caveModel" src="targets/3/target3.gltf"></a-asset-item>
          <a-asset-item id="waxModel" src="targets/4/target4.gltf"></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-gltf-model rotation="0 -90 0"scale="0.5 0.5 0.5" position="0 -0.5 0" src="#clayModel"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 1">
          <a-gltf-model rotation="0 90 0" scale="0.3 0.3 0.3" position="0 -0.3 0" src="#pysankaModel"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 2">
          <a-gltf-model rotation="0 0 0"scale="0.1 0.1 0.1" position="0 -0.4 0" src="#flopyModel" animation-mixer="clip: *; loop: repeat; timeScale: 1"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 3">
          <a-gltf-model rotation="0 0 0" position="0 -0.1 0" src="#caveModel" animation-mixer="clip: *; loop: repeat; timeScale: 1"></a-gltf-model>
        </a-entity>
        <a-entity id="waxtarget" waxtarget="" mindar-image-target="targetIndex: 4">
          <a-gltf-model rotation="0 0 0" scale="0.2 0.2 0.2" position="0 -0.1 0" src="#waxModel" animation-mixer="clip: *; loop: once; clampWhenFinished: true; startAt: -2500;"></a-gltf-model>
        </a-entity>
        <a-entity id="knottarget" knottarget="" mindar-image-target="targetIndex: 5">
          <a-entity visible="false" id="target5-panel" position="0 0 -0.01">
            <a-entity>
              <a-video id="target5-video-link" src="targets/5/01.mp4" width="1" height="0.552" position="0 0 0"></a-video>
              </a-entity>
            </a-entity>
        </a-entity>
      </a-scene>
    </>
    
  )
}

export default MindAr;