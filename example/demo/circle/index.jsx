'use strict';
import React, {Component} from 'react';
require('./index.less');
require('butterfly-dag/dist/index.css');

const Canvas = require('./CircleCanvas.js');
const mockData = require('./data.js');

class Circle extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let root = document.getElementById('dag-canvas');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      layout: {
        type: 'circleLayout',
        options: {
          radius: 200,
          getWidth: () => {
            return 15;
          },
          getHeight: () => {
            return 15;
          }
        },
      },
      theme: {
        edge: {
          type: 'Straight'
        }
      }
    });
    console.log(mockData.edges);
    this.canvas.draw(mockData);
    this.canvas.on('events', (data) => {
      // console.log(data);
      // this.canvas.focusCenterWithAnimate();
    });
  }
  render() {
    return (
      <div className='circle-page'>
        <div className="circle-canvas" id="dag-canvas">
        </div>
      </div>
    );
  }
}

module.exports = Circle;