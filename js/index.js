AFRAME.registerComponent('movement-view', {
  init: function () {
    const el = document.querySelector('#camera');
    var rotation = 0;
    var scale = 1;
    var posX_start = 0;
    var posY_start = 0;
    var posX = 0;
    var posY = 0;
    var posX_current = 0;
    var posY_current = 0;
    var _newPosY = 0;
    var _newPosX = 0;

    var sceneEl = this.el.sceneEl;
    sceneEl.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.ctrlKey) {
        scale -= e.deltaY * 0.01;
      } else {
        posX -= e.deltaX * 2;
        posY -= e.deltaY * 2;
        _newPosX = (posX/100);
        _newPosY = (posY/100);
      }
      posY_current = _newPosY;
      console.log("current position:",posY_current,"new position", _newPosX);
      el.setAttribute('position', { x: (posX_start + _newPosX), y: 1, z: (posY_start + _newPosY) });

    });

  }
});