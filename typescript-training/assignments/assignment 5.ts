
interface Employee {
    name: string;
    baseSalary: number;
    experience: number;
    rating: number;
}


const employees: Employee[] = [
    {
        name: "Alice Johnson",
        baseSalary: 75000,
        experience: 5.1,
        rating: 4.2
    },
    {
        name: "Bob Smith",
        baseSalary: 68000,
        experience: 3.2,
        rating: 3.8
    },
    {
        name: "Carol Davis",
        baseSalary: 82000,
        experience: 7.1,
        rating: 4.5
    },
    {
        name: "David Brown",
        baseSalary: 90000,
        experience: 10.2,
        rating: 2.5
    },
    {
        name: "Eva Green",
        baseSalary: 60000,
        experience: 2.4,
        rating: 3.5
    }
];


const hikeMap = new Map<string, number>();


for (const emp of employees) {

    let variablePay = 0;
    let bonus = 0;
    let reward = 0;

    // Check Rating
    if (emp.rating >= 4) {
        variablePay = 15;
        bonus = 1500;
    }
    else if (emp.rating >= 3) {
        variablePay = 10;
        bonus = 1200;
    }
    else {
        variablePay = 3;
        bonus = 300;
    }

    // Check Experience
    if (emp.experience >= 5) {
        reward = 5000;
    }

    const hike =
        (emp.baseSalary * variablePay / 100) +
        bonus +
        reward;

    
    const hikePercentage = (hike / emp.baseSalary) * 100;

    hikeMap.set(emp.name, Number(hikePercentage.toFixed(2)));
}

console.log("Employee Hike Percentage");

for (const [name, percentage] of hikeMap) {
    console.log(name + " : " + percentage + "%");
}