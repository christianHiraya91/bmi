






const calculate = document.getElementById('calculate');

function bmi () {
    const name = document.getElementById('name').value;
    const height = +document.getElementById('height').value;
    const weight = +document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {

        const BMIvalue = (weight / (height * height)).toFixed(1);

        let classification = '';

        if (BMIvalue < 18.5){
            classification = 'Underweight.';
        }else if (BMIvalue < 25) {
            classification = 'Normal.';
        }else if (BMIvalue < 30){
            classification = 'Overweight.';
        }else if (BMIvalue < 35){
            classification = 'Obese Class I.';
        }else if (BMIvalue < 40){
            classification = 'Obese Class II.';
        }else {
            classification = 'Obese Class III.';
        }

        result.textContent = `${name} your BMI is ${BMIvalue} and you are ${classification}`;
        
    }else {
        result.textContent = 'Please complete all required fields.';
    }

}

calculate.addEventListener('click', bmi);