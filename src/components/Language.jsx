import { useState } from "react";

export default function Language () {
    const [language, setLanguage] = useState(null)

    return (
        <div>
            <div className="language"></div>
            <button onClick={() => {setLanguage()}}>title</button>
        </div>
    )
}