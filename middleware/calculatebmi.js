const fs = require('fs');
const filePath = './data/usersdata.json';


async function getBmiAndCategory(){
  var userData;
  try {
  await readFileAsync(filePath).then(async data => { 
    userData = JSON.parse(data);
        for(var singleUser of userData){
          // Check if number is a number only
            if(isNaN(singleUser.WeightKg) && isNaN(singleUser.HeightCm)) {
              console.log("Not valid data. Is is not a number.");
              /* 
              Additional logic if we want.
              */
            }   // check it is greater than zero
            else if (singleUser.WeightKg > 0 && singleUser.HeightCm > 0)
            {
              var bmi = calculateBmi(singleUser.WeightKg, singleUser.HeightCm);
              console.log(bmi);
              singleUser["BMI"] = bmi;
              const [bmiCategory,healthRisk] = calculateBMICategoryAndRisk(bmi);
              singleUser["BMICategory"] = bmiCategory;
              singleUser["HealthRisk"] = healthRisk;
             
            } else {
              console.log("Not valid data. Number less than zero");
              /* 
              Additional logic if we want.
              */
            }
        }
        return userData;
      })
    }catch(error){
      return {"Error" : error}
      } 
      return userData
    };

function readFileAsync(fPath) {
  console.log(fPath);
    return new Promise(function(resolve, reject) {
        fs.readFile(fPath, function(err, data){
            if (err) 
                reject(err); 
            else 
                resolve(data);
        });
    });
};
 function calculateBmi(weight,height){
    var weight = parseFloat(weight);
    var height = parseFloat(height/100);
    var bmi = Math.round((weight)/(height * height)*100)/100;
    return bmi;
};

 function calculateBMICategoryAndRisk(bmi){
  if (bmi <= 18.4) {
    return [BMICategory.Underweight, HealthRisk.MalnutritionRisk];
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return [BMICategory.Normalweight, HealthRisk.LowRisk];
  } else if (bmi >= 25 && bmi <= 29.9) {
    return [BMICategory.Overweight, HealthRisk.EnhancedRisk];
  } else if (bmi >= 30 && bmi <= 34.9) {
    return [BMICategory.ModeratelyObese, HealthRisk.MediumRisk];
  } else if (bmi >= 35 && bmi <= 39.9) {
    return [BMICategory.SeverelObese, HealthRisk.High];
  } else if (bmi >= 40) {
    return [BMICategory.VerySeverelyObese, HealthRisk.VeryHighRisk];
  }
};


const BMICategory = {
    Underweight : "Underweight",
    Normalweight : "Normal weight",
    Overweight : "Overweight",
    ModeratelyObese : "Moderately obese",
    SeverelObese : "Severel obese",
    VerySeverelyObese : "Very severely obese"
};

const HealthRisk = {
    MalnutritionRisk : "Malnutrition risk",
    LowRisk : "Low risk",
    EnhancedRisk : "Enhanced risk",
    MediumRisk : "Medium risk",
    High : "High",
    VeryHighRisk : "Very high risk"
};

module.exports = {
  getBmiAndCategory,
  calculateBmi,
  calculateBMICategoryAndRisk,
  BMICategory,
  HealthRisk
};


// For reference
//Underweight Normal weight Overweight Moderately obese Severel obese Very severely obese
// Malnutrition risk, Low risk, Enhanced risk, Medium risk, High, Very high risk
// 18.4 and below - Underweight - Malnutrition risk
// 18.5- 24.9 - Normal weight - Low risk
// 25 - 29.9 - Overweight - Enhanced risk
// 30 - 34.9 - Moderately obese - Medium risk
// 35- 39.9 - Severel obese - High
// 40 and above - Very severely obese - Very high risk