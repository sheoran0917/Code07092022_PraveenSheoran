# Code07092022_PraveenSheoran
Install the Packages

npm i

run the app

nodemon start

=> For point 2, Count the total number of overweight people using ranges in the column BMI Category of Table 1, check this is consistent programmatically and add any Other observations in the documentation 


For point 2 , I observed only one thing, the scale that we have given is not up to the mark. if we look at the scale closely then there are gaps which can create a problem in rnd result.

// 18.4 and below - Underweight - Malnutrition risk
// 18.5- 24.9 - Normal weight - Low risk
// 25 - 29.9 - Overweight - Enhanced risk
// 30 - 34.9 - Moderately obese - Medium risk
// 35- 39.9 - Severel obese - High
// 40 and above - Very severely obese - Very high risk


what if someone has a BMI level of 24.95 then it will not fall in any of the category.

Solution :- Though I have not implemented it in my solution as this was not the requirement but I am documenting here.

1 . If we calculate the BMI to one decimal place only then this scale is valid. But if there are more than one decimal point then chances are that it will give us wrong results. 
2.  If we change the scale to somewwhat like below, where we include overlap the edges and include the higher only

// 18.5 and below - Underweight - Malnutrition risk
// 18.5- 25 - Normal weight - Low risk  - exclude 18.5 it means > 18.5 and <= 25 include 25
// 25 - 30 - Overweight - Enhanced risk - exclude 25 it means > 25 and <= 30
// 30 - 35 - Moderately obese - Medium risk
// 35- 40 - Severel obese - High
// 40 and above - Very severely obese - Very high risk


I have included two test cases which I created using Jest.
