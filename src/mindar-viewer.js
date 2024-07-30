import React, { useEffect, useRef } from 'react';
import 'three';
import 'aframe';
import 'aframe-extras';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const MindAr = () => {
  const sceneRef = useRef(null);

  // const showWax = () => {
  //   const wax = document.querySelector("#wax-panel");

  //   wax.setAttribute("visible", true);
      
  //   document.querySelector("#wax-video-link").setAttribute("src", "#waxsource");

  //   wax.setAttribute("position", "0 " + 0 + " -0.01");
  // }


  // useEffect(()=> {
  //   // eslint-disable-next-line no-undef
  //   AFRAME.registerComponent('waxtarget', {
  //     init: function () {
  //       this.el.addEventListener('targetFound', event => {
  //         console.log("target found");
  //         showWax();
          
  //       });
  //       this.el.addEventListener('targetLost', event => {
  //         console.log("target lost");
  //       });
  //     }
  //   });
  // }, []);

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
      <a-scene inspector="url: http://localhost:3333/dist/aframe-inspector.js" ref={sceneRef} mindar-image={`imageTargetSrc: target5.mind; filterBeta: 0; autoStart: false; uiLoading: no; uiError: no; uiScanning: yes;`} color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
        <a-assets timeout="100">
          <a-asset-item id="pysankaModel" src="pysanka_v2-04.gltf"></a-asset-item>
          <a-asset-item id="clayModel" src="Clay_tablet.gltf"></a-asset-item>
          <a-asset-item id="flopyModel" src="Floppy_disc.gltf"></a-asset-item>
          <a-asset-item id="caveModel" src="Cave_painting.gltf"></a-asset-item>
          <a-asset-item id="waxModel" src="tablet_02.gltf"></a-asset-item>
          {/* <a-asset-item id="waxsource" src="tablet_02.gltf"></a-asset-item> */}

          {/* <video crossOrigin="anonymous" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" id="waxsource"></video> */}
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

          {/* <a-entity visible="false" id="wax-panel" position="0 0 -0.01">
            <a-entity>
              <a-gltf-model id="wax-video-link" rotation="0 0 0" scale="0.2 0.2 0.2" position="0 -0.1 0" animation-mixer="clip: *; loop: once; clampWhenFinished: true;"></a-gltf-model>
            </a-entity>
          </a-entity> */}

          {/* <a-entity visible="false" id="wax-panel" position="0 0 -0.01">
            <a-entity>
              <a-video id="wax-video-link" webkit-playsinline="" playsinline="" width="1" height="0.552" position="0 0 0" material="" geometry=""></a-video>
            </a-entity>
          </a-entity> */}
        </a-entity>
      </a-scene>
    </>
    
  )
}

export default MindAr;