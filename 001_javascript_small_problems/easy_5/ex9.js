
const countOccurrences = array => {

  const count = {};

  for (let item of array) {
    if (item in count) { count[item] += 1; }
    else { count[item] = 1; }
  }

  for (let item of Object.entries(count)) {
    console.log(item[0] + ' -> ' + item[1])
  }

};

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
