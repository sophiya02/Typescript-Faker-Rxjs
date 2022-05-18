import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';

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
    yearOfRelease: faker.datatype.number({ min: 2010, max: 2022 }),
    brand: faker.company.companyName(),
    color: faker.commerce.color(),
  };
}
// console.log(getRandomCar1());
console.log('working');

const observable = new Observable((subscriber) => {
  setInterval(() => {
    subscriber.next(getRandomCar1());
  }, 1000);
  setTimeout(() => {
    subscriber.complete();
  }, 5000);
});
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
