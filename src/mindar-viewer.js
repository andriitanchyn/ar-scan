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
          <a-asset-item id="001" src="targets/001/001.gltf"></a-asset-item>
          <a-asset-item id="002" src="targets/002/002.gltf"></a-asset-item>
          <video id="003" autoPlay={false} src="targets/003/003.webm"></video>
          <a-asset-item id="004" src="targets/004/004.gltf"></a-asset-item>
          <video id="005" autoPlay={false} src="targets/005/005.webm"></video>
          <a-asset-item id="006" src="targets/006/006.gltf"></a-asset-item>
          <video id="007" autoPlay={false} src="targets/007/007.webm"></video>
          <a-asset-item id="008" src="targets/008/008.gltf"></a-asset-item>
          <a-asset-item id="009" src="targets/009/009.gltf"></a-asset-item>
          <a-asset-item id="010" src="targets/010/010.gltf"></a-asset-item>
          <a-asset-item id="011" src="targets/011/011.gltf"></a-asset-item>
          <a-asset-item id="012" src="targets/012/012.gltf"></a-asset-item>
          <a-asset-item id="013" src="targets/013/013.gltf"></a-asset-item>
          <video id="014" autoPlay={false} src="targets/014/014.webm"></video>
          <a-asset-item id="015" src="targets/015/015.gltf"></a-asset-item>
          <a-asset-item id="016" src="targets/016/016.gltf"></a-asset-item>
          <a-asset-item id="017" src="targets/017/017.gltf"></a-asset-item>
          <a-asset-item id="018" src="targets/018/018.gltf"></a-asset-item>
          <a-asset-item id="019" src="targets/019/019.gltf"></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#001"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 1">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#002"></a-gltf-model>
        </a-entity>
        <a-entity id="videotarget003" videotarget003="" data-id="003" mindar-image-target="targetIndex: 2">
          <a-entity id="003-panel" position="0 0 0">
            <a-entity>
              <a-video webkit-playsinline playsinline autoplay="false" id="003-video-link" src="#003" width="1" height="0.552" position="0 0 0"></a-video>
            </a-entity>
          </a-entity>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 3">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#004"></a-gltf-model>
        </a-entity>
        <a-entity id="videotarget005" videotarget005="" data-id="005" mindar-image-target="targetIndex: 4">
          <a-entity id="005-panel" position="0 0 0">
            <a-entity>
              <a-video webkit-playsinline playsinline autoplay="false" id="005-video-link" src="#005" width="1" height="0.552" position="0 0 0"></a-video>
            </a-entity>
          </a-entity>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 5">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#006"></a-gltf-model>
        </a-entity>
        <a-entity id="videotarget007" videotarget007="" data-id="007" mindar-image-target="targetIndex: 6">
          <a-entity id="007-panel" position="0 0 0">
            <a-entity>
              <a-video webkit-playsinline playsinline autoplay="false" id="007-video-link" src="#007" width="1" height="0.552" position="0 0 0"></a-video>
            </a-entity>
          </a-entity>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 7">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#008"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 8">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#009"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 9">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#010"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 10">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#011"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 11">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#012"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 12">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#013"></a-gltf-model>
        </a-entity>
        <a-entity id="videotarget014" videotarget014="" data-id="014" mindar-image-target="targetIndex: 13">
          <a-entity id="014-panel" position="0 0 0">
            <a-entity>
              <a-video webkit-playsinline playsinline autoplay="false" id="014-video-link" src="#014" width="1" height="0.552" position="0 0 0"></a-video>
            </a-entity>
          </a-entity>
        </a-entity>

        <a-entity mindar-image-target="targetIndex: 14">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#015"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 15">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#016"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 16">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#017"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 17">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#018"></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 18">
          <a-gltf-model rotation="0 0 0" position="0 0 0" src="#019"></a-gltf-model>
        </a-entity>
      
      </a-scene>
    </>
    
  )
}

export default MindAr;