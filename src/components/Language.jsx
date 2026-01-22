import { useState } from "react";
import languages from "./Data/languages";

export default function Language () {
    const [language, setLanguage] = useState(null)

    return (
        <div>
            <div className="language"></div>
            {
                languages.map(lang => (
                    <button key={lang.id} onClick={() => setLanguage(lang)}> 
                        {lang.title}
                    </button>
                ))
            }
{/* <button key={} onClick={() => {setLanguage(languages[0])}}>{languages[0].title}</button> */}
        </div>
    )
}