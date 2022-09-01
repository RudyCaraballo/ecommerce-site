import './button.scss'
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted-btn',
}
export default function Button({children, buttonType, ...otherBtnProperties}){

    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherBtnProperties}>{children}</button>
    )
}