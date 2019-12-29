import * as THREE from './build/three.module.js';

export function rotateShape(vector2, step, totalSteps) {
    var rotationCount = 3 / 2 * Math.PI;

    var percent = step / totalSteps;

    var angle;

    angle = rotationCount * percent;

    // let p1 = 0.02;
    // let p2 = 0.31333;
    // let p3 = 0.3533333;
    // let p4 = 0.646666666;
    // let p5 = 0.686666666;
    // let p6 = 0.98;
    // rotationCount = rotationCount * 1 / (p2 - p1 + p4 - p3 + p6 - p5);
    //
    // if (percent <= p1) {
    //     angle = rotationCount * (0);
    // } else if (percent > p1 && percent <= p2) {
    //     angle = rotationCount * (percent - p1);
    // } else if (percent > p2 && percent <= p3) {
    //     angle = rotationCount * (p2 - p1);
    // } else if (percent > p3 && percent <= p4) {
    //     angle = rotationCount * (percent - (p3 - p2) - p1);
    // } else if (percent > p4 && percent <= p5) {
    //     angle = rotationCount * (p4 - (p3 - p2) - p1);
    // } else if (percent > p5 && percent <= p6) {
    //     angle = angle = rotationCount * (percent - (p5 - p4) - (p3 - p2) - p1);
    // } else if (percent > p6 && percent <= 1) {
    //     angle = rotationCount * (p6 - (p5 - p4) - (p3 - p2) - p1);
    // }

    var rX = Math.cos(angle) * vector2.x - Math.sin(angle) * vector2.y;
    var rY = Math.sin(angle) * vector2.x + Math.cos(angle) * vector2.y;

    //x2=cosβx1−sinβy1
    //y2=sinβx1+cosβy1

    return new THREE.Vector2(rX, rY);
    return vector2;
}
