import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
// Ques1
interface Car {
  name: string;
  model: string;
  yearOfRelease: number;
  brand: string;
  color: string;
}
// function and claases are also a data type
function getRandomCar1(): Car {
  // return
  return {
    name: faker.name.firstName(),
    model: faker.random.alphaNumeric(),
    yearOfRelease: faker.datatype.number({
      min: 1990,
      max: 2022,
    }),
    brand: faker.company.companyName(),
    color: faker.commerce.color(),
  };
}
// function getScrap(car: Car) {
//   let scrap = {
//     brand: car.brand,
//     yearOfRelease: car.yearOfRelease,
//   };
//   return scrap;
// }
// console.log(getRandomCar1());
console.log('working on 2');
const observable = new Observable((subscriber) => {
  setInterval(() => {
    subscriber.next(getRandomCar1());
  }, 1000);
}).pipe(
  filter((car: Car) => car.color === 'black' && car.yearOfRelease < 2000),
  // map((car: Car) => {
  //   let scrap = getScrap(car);
  //   return scrap;
  // })
  map( (car: Car)=> ({brand : car.brand, yearOfRelease: car.yearOfRelease}))
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
