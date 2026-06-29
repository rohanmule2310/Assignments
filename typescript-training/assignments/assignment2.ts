let customerName: string = "John Doe";
let credit_score: number = 720;
let income: number = 55000;
let employment_status: string = "Employed";
let dti_ratio: number = 35;

/*1. Credit Score*/
if (credit_score > 750) {
    console.log(customerName + " is eligible to get the loan");
}
else if (credit_score >= 650 && credit_score <= 750) {

    console.log("Additional checks are performed");

    /*2. Income*/
    if (income >= 50000) {

        /*3. Employment Status*/
        if (employment_status === "Employed") {

            /*4. Debt-to-Income Ratio*/
            if (dti_ratio < 40) {
                console.log(customerName + " is eligible to get the loan");
            } else {
                console.log(customerName + " is not eligible to get the loan");
            }

        } else {
            console.log(customerName + " is not eligible to get the loan");
        }

    } else {
        console.log(customerName + " is not eligible to get the loan");
    }

}
else {
    console.log(customerName + " is not eligible to get the loan");
}