export default function LanguageButton ({ title, chooseLanguage, isSelected }) {
    
    return (
        <button onClick={chooseLanguage}
            className={
                isSelected  
                ? "btn btn-primary me-2 mt-5 mb-5"
                : "btn btn-outline-primary me-2 mt-5 mb-5"
            }
        > 
            {title}
        </button>
    )
}   



