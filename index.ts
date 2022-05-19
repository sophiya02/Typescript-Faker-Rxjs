import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import axios from 'axios';
// Ques1
// interface Car {
//   name: string;
//   model: string;
//   yearOfRelease: number;
//   brand: string;
//   color: string;
// }
// function and claases are also a data type
// function getRandomCar1(): Car {
// return
//   return {
//     name: faker.name.firstName(),
//     model: faker.random.alphaNumeric(),
//     yearOfRelease: faker.datatype.number({
//       min: 1990,
//       max: 2022,
//     }),
//     brand: faker.company.companyName(),
//     color: faker.commerce.color(),
//   };
// }
// function getScrap(car: Car) {
//   let scrap = {
//     brand: car.brand,
//     yearOfRelease: car.yearOfRelease,
//   };
//   return scrap;
// }
// console.log(getRandomCar1());
// console.log('working on 2');

// getRequest
function getTodo() {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
  })
    .then((res) => {
      console.log(typeof res);
      // return res;
    })
    .catch((err) => console.log(err));
}
// console.log(getTodo());
const observable = new Observable((subscriber) => {
  setInterval(() => {
    subscriber.next(getTodo());
  }, 1000);
});
.pipe(
  switchMap((value : AxiosResponse<any, any> ) => {
  console.log(value);
  return value;
}
);

const observer = {
  next: (value) => {
    console.log(value);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => {
    console.log('complete');
  },
};
observable.subscribe(observer);
