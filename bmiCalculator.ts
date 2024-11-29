const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / (height / 100) / (height / 100);
  switch (true) {
    case bmi > 30:
      return 'Obese Range';
    case bmi >= 25 && bmi <= 29.9:
      return 'Overweight Range';
    case bmi >= 18.5 && bmi <= 24.9:
      return 'Normal Range';
    case bmi < 18.5:
      return 'Underweight Range';
    default:
      return new Error('the provided values are not numbers');
  }
};

console.log(calculateBmi(180, 74));
