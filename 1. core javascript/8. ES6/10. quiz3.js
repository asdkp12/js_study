const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 500000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

const tradedOf2022 = traders
  .filter((p) => p.year === 2022)
  .map((p) => p.trader);
console.log(tradedOf2022);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

const tradeOfCity = [...new Set(traders.map((p) => p.trader.city))];
console.log(tradeOfCity);

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
const tradeAtD = traders
  .filter((p) => p.trader.city === "대전")
  .map((p) => p.trader);
console.log(tradeAtD);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const tradeOfName = [...new Set(traders.map((p) => p.trader.name))];
console.log(tradeOfName);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

const totalMoneySeoul = traders
  .filter((p) => p.trader.city === "서울")
  .reduce((q, p) => q + p.value, 0);
console.log(`거래총액:${totalMoneySeoul}`);

// ============================= 연습 2 ====================================
// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
const totalMoneyDof2022 = traders
  .filter((p) => p.trader.city === "대전" && p.year === 2022)
  .reduce((q, p) => q + p.value, 0);
console.log(`대전 2022년 거래총액:${totalMoneyDof2022}`);

// 아래랑 위랑 같음
// const totalMoneyDof2022 = traders
//   .filter((p) => p.trader.city === "대전")
//   .filter((r) => r.year === 2022)
//   .reduce((q, p) => q + p.value, 0);
// console.log(`대전 2022년 거래총액:${totalMoneyDof2022}`);

/* 이새긴 for if 로 푼거
let totalInDaejeon2023 = 0;
for (const trs of traders) {
  if (trs.year === 2023 && trs.trader.city === '대전') {
    totalInDaejeon2023 += trs.value;
  }
}
console.log(`2023년 대전 총 거래액: ${totalInDaejeon2023}`);
*/

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
const BusanName = traders
  .filter((p) => p.trader.city === "부산")
  .map((p) => p.trader);
console.log(BusanName);
/* for if 로 푼거
const nameListInBusan = [];
for (const trs of traders) {
  if (trs.trader.city === '부산') {
    nameListInBusan.push(trs.trader.name);
  }
}
console.log('부산 거래자 이름리스트: ', nameListInBusan);
*/

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

let highestTransaction = traders[0];
for (const trs of traders) {
  if (highestTransaction.value < trs.value) {
    highestTransaction = trs;
  }
}
console.log(`가장 높은 거래액 정보 - 
이름: ${highestTransaction.trader.name}, 
도시: ${highestTransaction.trader.city}, 
거래액: ${highestTransaction.value}`);

/* reduce 사용
const highestTransaction 
   = traders.reduce((max, trs) => max.value < trs.value ? trs : max);

console.log(`가장 높은 거래액 정보 - 
이름: ${highestTransaction.trader.name}, 
도시: ${highestTransaction.trader.city}, 
거래액: ${highestTransaction.value}`)
*/

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
// 각 도시별 총 거래액을 계산하여 객체로 매핑하는 함수

/*
const cities = [];
const newObj = {};
traders
  .map((trade) => trade.trader.city)
  .forEach((i) => {
    if (!cities.includes(i)) {
      cities.push(i);
    }
  }); //cities = [서울, 대전, 부산, ...];
for (let i of cities) {
  let total = 0;
  for (let j of traders) {
    if (j.trader.city === i) {
      total += j.value;
    }
  }
  newObj[i] = total;
}
console.log(newObj);
*/
/*
const totalByCity = {};  // { 서울: 500000, 대전: 30032030, ... }

for (const trs of traders) {
  const city = trs.trader.city;
  if (totalByCity[city]) { // 이 도시는 한번 누적된 적이 있음
    totalByCity[city] += trs.value;
  } else {  // 이 도시는 한번도 나온적이 없던 도시임
    totalByCity[city] = trs.value;
  }
}
console.log(totalByCity);
*/
/*
function calculateTotalSalesByCity(traders) {
  const cityTotalSales = {};

  // traders 배열을 순회하면서 도시별로 거래액을 누적
  traders.forEach((trade) => {
    const city = trade.trader.city;
    const value = trade.value;

    if (city in cityTotalSales) {
      cityTotalSales[city] += value;
    } else {
      cityTotalSales[city] = value;
    }
  });

  return cityTotalSales;
}
*/
/*reduce 사용
const totalByCity = traders.reduce((totalByCity, trs) => {
  const city = trs.trader.city;
  totalByCity[city] = (totalByCity[city] || 0) + trs.value;
  return totalByCity;
}, {});

console.log(totalByCity);

*/

const totalSalesByCity = calculateTotalSalesByCity(traders);
console.log(totalSalesByCity);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

<<<<<<< HEAD
// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

=======
// 최종 결과 객체
const trsOver700kByYear = {};

for (const trs of traders) {
  if (trs.value >= 700000) {
    // 거래액 필터 조건
    const yearString = trs.year.toString();
    if (!trsOver700kByYear[yearString]) {
      trsOver700kByYear[yearString] = [trs];
    } else {
      // 지금 거래년도가 저장되어 있다면
      trsOver700kByYear[yearString].push(trs);
    }
  }
}
console.log(JSON.stringify(trsOver700kByYear, null, 2));
/*
const trsOver700kByYear = traders 
  .filter(trs => trs.value >= 700000)
  .reduce((transactions, trs) => {
    const yearString = trs.year.toString();
    if (!transactions[yearString]) transactions[yearString] = [trs];
    else transactions[yearString].push(trs);
    return transactions;
  }, {});

console.log(JSON.stringify(trsOver700kByYear, null, 2));
*/

// WTF console.log(JSON.stringify ( , , )) ?????

// 오브젝트안에 오브젝트 안에 오브젝트 ... ...오브젝트 이렇게 될 경우 자바스크립트는 OBJECT로 출력해준다
// 명확하게 보고싶을경우 위와 같은 속성을 쓴다

// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
trader.reduce(() => {}, {});

// sort
>>>>>>> 2141f9aa71f00e356ce28c693d6cb985eafd8e0b
// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
