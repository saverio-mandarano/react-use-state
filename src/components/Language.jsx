import LanguageButton from "./LanguageButton";
import LanguageCard from "./LanguageCard";
import { useState } from "react";
import languages from "./Data/languages";

export default function Language () {
    const [language, setLanguage] = useState(null)

    return (
        <div>
            {
                languages.map(lang => (
                    <LanguageButton 
                        key={lang.id}
                        lang={lang}
                        setLanguage={setLanguage}
                        language={language}
                    />
                ))
            }

            <LanguageCard language={language} />
        </div>
    )
}
