const storage = {
    // Set permet d'enregistrer un JSOON en local storage
    set (key, json){
        // la fonction stringify converti le json en string
        const value = JSON.stringify(json);
        // set item permet de stocker en local storage une clé et la valeur associée
        window.localStorage.setItem(key, value); 
    
    },
    // Get permet de récuperer le contenu du JSON stocké dasn local storage
    get(key){
        const json = window.localStorage.getItem(key); 
        return JSON.parse(json)
    },
    // Unset permet de supprimer le JSON en Local Storage
    unset(key){
        window.localStorage.removeItem(key)
    }
    }
    export default storage;