/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
  18.5이하면 "당신은 저체중입니다." 
  나머지는 "당신은 정상체중입니다."를 출력하는 
  CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.7899); //반올림 -> 6
*/


function calcBMI(height, weight) {
  let bmi = weight / ((height / 100) * (height / 100)); // 키를 미터 단위로 변환하여 계산
  let status = '';

  if (bmi >= 25.0) {
      status = "당신은 과체중입니다.";
  } else if (bmi <= 18.5) {
      status = "당신은 저체중입니다.";
  } else {
      status = "당신은 정상체중입니다.";
  }

  console.log(`키 -> ${height}cm, 체중 -> ${weight}kg의 체질량지수는 ${bmi.toFixed(2)}입니다.`);
  console.log(status);
  
  return bmi;
}

function round(number, decimalPlaces) {
  return Math.round(number * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
}

// 호출부
var h = 167.5, w = 30.58;
var myBmi = calcBMI(h, w);



console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`);