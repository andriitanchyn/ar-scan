import React, { useEffect, useRef } from 'react';

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
    <>
      <a-scene ref={sceneRef} mindar-image={`imageTargetSrc: targets19.mind; filterBeta: 0; autoStart: false; uiLoading: no; uiError: no; uiScanning: yes;`} color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
        <a-assets timeout="100">
          <video id="003" crossOrigin="anonymous" autoPlay={false} src=""></video>
          <video id="005" crossOrigin="anonymous" autoPlay={false} src=""></video>
          <video id="007" crossOrigin="anonymous" autoPlay={false} src=""></video>
          <video id="014" crossOrigin="anonymous" autoPlay={false} src=""></video>
        </a-assets>

        <a-camera position="0 0 0" touchEnabled="false" wasd-controls-enabled="false" look-controls-enabled="false"></a-camera>

        <a-entity mindartarget data-id="001" mindar-image-target="targetIndex: 0">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#001"></a-gltf-model>
        </a-entity>
        <a-entity mindartarget data-id="002" mindar-image-target="targetIndex: 1">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#002"></a-gltf-model>
        </a-entity>
        
        <a-entity videotarget data-id="003" mindar-image-target="targetIndex: 2">
          <a-entity id="003-panel" position="0 0 0">
            <a-entity>
              <a-video crossOrigin="anonymous" webkit-playsinline playsinline autoplay="false" id="003-video-link" src="#003" width="1" height="0.5" position="0 0 0"></a-video>
            </a-entity>
          </a-entity>
        </a-entity>
        
        <a-entity mindartarget data-id="004" mindar-image-target="targetIndex: 3">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#004"></a-gltf-model>
        </a-entity>
        
        <a-entity videotarget data-id="005" mindar-image-target="targetIndex: 4">
          <a-entity id="005-panel" position="0 0 0">
            <a-entity>
              <a-video crossOrigin="anonymous" webkit-playsinline playsinline autoplay="false" id="005-video-link" src="#005" width="1" height="0.5" position="0 0 0"></a-video>
            </a-entity>
          </a-entity>
        </a-entity>
        
        <a-entity mindartarget data-id="006" mindar-image-target="targetIndex: 5">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#006"></a-gltf-model>
        </a-entity>
        
        <a-entity videotarget  data-id="007" mindar-image-target="targetIndex: 6">
          <a-entity id="007-panel" position="0 0 0">
            <a-entity>
              <a-video crossOrigin="anonymous" webkit-playsinline playsinline autoplay="false" id="007-video-link" src="#007" width="1" height="0.5" position="0 0 0"></a-video>
            </a-entity>
          </a-entity>
        </a-entity>
        
        <a-entity mindartarget data-id="008" mindar-image-target="targetIndex: 7">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#008"></a-gltf-model>
        </a-entity>
        
        <a-entity mindartarget data-id="009" mindar-image-target="targetIndex: 8">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#009"></a-gltf-model>
        </a-entity>
        
        <a-entity mindartarget data-id="010" mindar-image-target="targetIndex: 9">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#010"></a-gltf-model>
        </a-entity>
        
        <a-entity mindartarget data-id="011" mindar-image-target="targetIndex: 10">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#011"></a-gltf-model>
        </a-entity>
       
        <a-entity mindartarget data-id="012" mindar-image-target="targetIndex: 11">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#012"></a-gltf-model>
        </a-entity>
        
        <a-entity mindartarget data-id="013" mindar-image-target="targetIndex: 12">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#013"></a-gltf-model>
        </a-entity>
         
        <a-entity videotarget data-id="014" mindar-image-target="targetIndex: 13">
          <a-entity id="014-panel" position="0 0 0">
            <a-entity>
              <a-video crossOrigin="anonymous" webkit-playsinline playsinline autoplay="false" id="014-video-link" src="#014" width="1" height="0.552" position="0 0 0"></a-video>
            </a-entity>
          </a-entity>
        </a-entity>

        <a-entity mindartarget data-id="015" mindar-image-target="targetIndex: 14">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#015"></a-gltf-model>
        </a-entity>
        
        <a-entity mindartarget data-id="016" mindar-image-target="targetIndex: 15">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#016"></a-gltf-model>
        </a-entity>
        
        <a-entity mindartarget data-id="017" mindar-image-target="targetIndex: 16">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#017"></a-gltf-model>
        </a-entity>
        
        <a-entity mindartarget data-id="018" mindar-image-target="targetIndex: 17">
          <a-gltf-model crossOrigin="anonymous"  rotation="0 0 0" position="0 0 0" src="#018"></a-gltf-model>
        </a-entity>

        <a-entity  mindartarget data-id="019" mindar-image-target="targetIndex: 18">
          <a-gltf-model crossOrigin="anonymous" rotation="0 0 0" position="0 0 0" src="#019"></a-gltf-model>
        </a-entity>
      
      </a-scene>
    </>
    
  )
}

export default MindAr;