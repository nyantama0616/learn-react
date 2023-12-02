import { Meta } from '@storybook/react/';
import SignupForm from './SignupForm';

const meta: Meta<typeof SignupForm> = {
    component: SignupForm,
    title: 'Components/SignupForm',
    argTypes: {
        buttonType: {
            control: {
                type: 'select',
            },
        },
        backgroundColor: {
            control: {
                type: 'color',
            },
        },
    },
    tags: ["autodocs"]
}

export default meta;

/**
    * English Signup Form
 */
export const EnglishSignupForm = {
    args: {
        title: 'Sign Up',
    }
};

/**
 * Japanese Signup Form
 */
export const JapaneseSignupForm = {
    args: {
        title: 'サインアップ',
    }
};
