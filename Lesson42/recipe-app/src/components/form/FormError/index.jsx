import './styles.css';

export const FormError = ({error})=> {
    return error ? <p className="error-message">{error}</p> : null;
};