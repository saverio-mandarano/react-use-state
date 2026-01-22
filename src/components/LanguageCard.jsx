export default function LanguageCard ({language}){
    return(
        <div className="border p-3 rounded-3">
            {language ? ( 
                <>
                <h2>{language.title}</h2>
                <p>{language.description}</p>
                </>
            ) : ( <p>Nessun linguaggio selezionato</p> )
            }
        </div>
    )
}