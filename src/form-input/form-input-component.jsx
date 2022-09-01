import './form-input.scss';

export default function FormInput({label, ...otherProps}) {
    const shrinkValue = otherProps.value.length > 0 ? 'shrink' : ''

    return (
        <div className="group">
        <input className="form-input" {...otherProps} />
        {label && <label className={`${shrinkValue} form-input-label`}>{label}</label>}

        </div>
    )
}