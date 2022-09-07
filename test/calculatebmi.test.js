

const {calculateBmi,calculateBMICategoryAndRisk,BMICategory,HealthRisk}  = require('../middleware/calculatebmi');

describe("Calculate BMI", () => {
    test('calculate bmi weight 96 kg and height 171 cm', () => {
      expect(calculateBmi(96,171)).toBeCloseTo(32.83);
    });
 
    test('Calculate Health Risk and BMI category for BMI 32.79', () => {
      expect(calculateBMICategoryAndRisk(32.79)).toEqual([BMICategory.ModeratelyObese,HealthRisk.MediumRisk]);
    });
});


