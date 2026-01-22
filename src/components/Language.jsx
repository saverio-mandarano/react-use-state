import { useState } from "react";
import languages from "./Data/languages";

export default function Language () {
    const [language, setLanguage] = useState(null)

    return (
        <div>
            {
                languages.map(lang => (
                    <button key={lang.id} onClick={() => setLanguage(lang)}
                        className={
                            language && language.id === lang.id 
                            ? "btn btn-primary me-2 mt-5 mb-5"
                            : "btn btn-outline-primary me-2 mt-5 mb-5"
                        }
                    > 
                        {lang.title}
                    </button>
                ))
            }
            <div className="border p-3 rounded-3">
                {language ? ( 
                    <>
                    <h2>{language.title}</h2>
                    <p>{language.description}</p>
                    </>
                ) : ( <p>Nessun linguaggio selezionato</p> )
            }
            </div>
        </div>
    )
}