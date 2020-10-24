const volume = x => x * x * x;

const area = x => x + x;

// CommonJS 전체 모듈화 module.export = 전체 내용
 // es 6 모듈에서는 export default 전체
export default {
  volume : volume,
  area //key:value가 같을 경우 하나만 선언해도 된다 : shorthand property
}
