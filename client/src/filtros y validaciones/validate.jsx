
const validationForm = (input) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(!input.name.trim()){
        errors.name = "*Name required";
    }else if(!regexName.test(input.name.trim())){
        errors.name = "*The name field only accepts letters and blank spaces";
    };
    if(!input.difficulty){
        errors.difficulty = "*Difficulty required";
    }
    if(!input.duration){
        errors.duration= "*Duration required";
    }else if(input.duration < 1 || input.duration > 24){
        errors.duration = "*The duration must be between 1 and 24 hours";
    };
    if(!input.season){
        errors.season = "*Season required";
    }
    if(input.countries.length === 0){
        errors.countries = "*Country required";
    }
    return errors;
}

export default  validationForm