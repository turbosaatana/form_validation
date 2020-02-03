export default function validate(values) {
    let errors = {};

    if(!values.name) {
        errors.name ="Name required";
    }
    if(!values.day) {
        errors.day ="Day required";
    }
    if(!values.grade) {
        errors.grade ="Grade required";
    }

        return errors;
    };