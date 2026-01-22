import { useState } from "react";
import languages from "./Data/languages";

export default function Language () {
    const [language, setLanguage] = useState(null)

    return (
        <div>
            {
                languages.map(lang => (
                    <button key={lang.id} onClick={() => setLanguage(lang)}> 
                        {lang.title}
                    </button>
                ))
            }
            <div>
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