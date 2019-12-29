import * as THREE from './build/three.module.js';

export function rotateShape(vector2, step, totalSteps) {
    var rotationCount = 3/2*Math.PI;

    //step = 0;
    //totalSteps = 100;

    let angle = step / totalSteps * rotationCount;
    var rX = Math.cos(angle) * vector2.x - Math.sin(angle) * vector2.y;
    var rY = Math.sin(angle) * vector2.x + Math.cos(angle) * vector2.y;

    //x2=cosβx1−sinβy1
    //y2=sinβx1+cosβy1

    return new THREE.Vector2(rX, rY);
    return vector2;
}
