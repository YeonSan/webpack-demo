//CommonJS spec
  //모듈을 가져오는 방식
    // require();
    // export();

const _ = require('lodash'); // 1. local 저장소에 모듈을 저장 하고 2. require();로 가져옴
// 브라우저가 require를 이해할 수 없음
  // webpack을 이용해서 압축 -> index.html에 넣고
import './style.css'; // loader에 시킴
import './hello.scss';

// es 모듈화의 named import
import {area, circumference} from './js/circle';

// es default import : {} 없이 사용하고 이름을 마음대로 바꿀 수 있다.
import cube from './js/cube';


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['!!!!!!!!Hello', 'webpack!!!!!!', area(11), circumference(11)], ' ');
                    //lodash library가 load해주는

  console.log(area(5));

  return element;
}

document.body.appendChild(component());