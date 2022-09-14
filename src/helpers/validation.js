const REQUIRED_FIELD = 'Fill the field';

export const nameValidate = {
    required: REQUIRED_FIELD,
    pattern: {
        value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        message:
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    },
};

export const passwordValidate = {
    required: REQUIRED_FIELD,
    validate: value => {
        if (value.length < 7) {
            return 'The Password must contain at least 7 values';
        }
        return true;
    },
};

export const emailValidate = {
    required: REQUIRED_FIELD,
};

export const numberValidate = {
    required: REQUIRED_FIELD,
    pattern: {
        value:
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
    },
};