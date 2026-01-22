export default function LanguageButton ({ lang, setLanguage, language }) {
    
    return (
        <button onClick={() => setLanguage(lang)}
            className={
                language && language.id === lang.id 
                ? "btn btn-primary me-2 mt-5 mb-5"
                : "btn btn-outline-primary me-2 mt-5 mb-5"
            }
        > 
            {lang.title}
        </button>
    )
}   