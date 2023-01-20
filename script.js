document.getElementById("click").onclick = function(){
    const firstPerson = {
        firstName: document.getElementById("fpFirstName").value,
        height: document.getElementById("fpHeight").value,
        weight: document.getElementById("fpWeight").value,
        
        calcBMI: function(){
            let heightm = this.height/100;
            this.bmi = this.weight/(heightm*heightm);
            return this.bmi.toFixed(2);
        }
    }

    const secondPerson = {
        firstName: document.getElementById("spFirstName").value,
        height: document.getElementById("spHeight").value,
        weight: document.getElementById("spWeight").value,
        
        calcBMI: function(){
            let heightm = this.height/100;
            this.bmi = this.weight/(heightm*heightm);
            return this.bmi.toFixed(2);
        }
    }

    if (firstPerson.calcBMI() > secondPerson.calcBMI()){
        document.getElementById("comprasion").innerHTML = 
        `${firstPerson.firstName}'s BMI (${firstPerson.calcBMI()}) is higher than ${secondPerson.firstName}'s (${secondPerson.calcBMI()})!`;
    }
    else {
        document.getElementById("comprasion").innerHTML = 
        `${secondPerson.firstName}'s BMI (${secondPerson.calcBMI()}) is higher than ${firstPerson.firstName}'s (${firstPerson.calcBMI()})!`;
    }

    console.log(firstPerson, secondPerson);
}