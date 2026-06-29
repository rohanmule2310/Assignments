/*1.Credit Score: 
o If the credit score is above 750, the loan is automatically approved. 
o If the credit score is between 650 and 750, additional checks are performed. 
o If the credit score is below 650, the loan is denied.*/
let credit_score: number =750;
if (credit_score>750)
    {
        console.log("Loan is approved");
    }
else if (credit_score>650 && credit_score>=750 )
{
 console.log("additional checks are performed");
}
else 
{
 console.log("The Loan is denied");
}


/* 2. Income: 
For credit scores between 650 and 750, the customer’s income must be at least $50,000 
for the loan to be considered. */

let income:number=50000;
if(credit_score>=650 && credit_score<=750)
    {
        if(income<=50000)
            console.log("The loan is considered")
        else 
        {
            console.log("The loan is not considered")
        }
    }

/*3. Employment Status: 
If the customer’s income is at least  50,000, the system checks whether the customer is 
employed. 
If the customer is unemployed, the loan is denied. */
let emplyment_status :String = "Employed";
if(income>=50000 && emplyment_status ==="Employed")
    {
        console.log("loan is approved")
    
    }
    else  


    {
        console.log("loan is denied")
    }

    /*4.Debt-to-Income Ratio: 
If the customer is employed, the system checks the debt-to-income (DTI) ratio. 
If the DTI ratio is less than 40%, the loan is approved. 
If the DTI ratio is 40% or greater, the loan is denied.*/

let dti_ratio: number = 35; 
let employment_status: string = "Employed";

if (employment_status === "Employed") {

    if (dti_ratio < 40) {
        console.log("Loan is approved");
    } else {
        console.log("Loan is denied");
    }

}
