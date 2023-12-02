import { Meta } from '@storybook/react/';
import SignupForm from './SignupForm';

const meta: Meta<typeof SignupForm> = {
    component: SignupForm,
    title: 'Components/SignupForm',
}

export default meta;

export const EnglishSignupForm = {
    args: {
        title: 'Sign Up',
    }
};

export const JapaneseSignupForm = {
    args: {
        title: 'サインアップ',
    }
};
