/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {

        /* 
        Déclarrations
        */
            let bagLink = document.querySelector('#bagLink');
            let shoppingBag = document.querySelector('#shoppingBag');
            let bagIsOpen = false;
        //

        /* 
        Méthodes/Fonctions
        */
            const toggleBag = () => {

                /* 
                Vérifier l'état du panier
                */
                    if(bagIsOpen === true){
                        // Ajouter la class .close
                        shoppingBag.classList.add('close');

                        // Attendre .3s
                        setTimeout(() => {
                            // Supprimer la class .open a #shoppingBag
                            shoppingBag.classList.remove('open');
                            // Supprimer la class .close a #shoppingBag
                            shoppingBag.classList.remove('close');
                        }, 300)

                    }
                    else{
                        // Ajouter la class .open a #shoppingBag
                        shoppingBag.classList.add('open');
                    }
                //

                /* 
                Inverser l'état du panier
                */
                    bagIsOpen = !bagIsOpen;
                //
            }
        //
    
        /* 
        Lancer IHM
        */
            // Capter le clic sur la balise bagLink
            bagLink.addEventListener('click', (event) => {
                // Bloquer le comportement par defaut de la balise A
                event.preventDefault();

                // Ouvrir/Fermer la panier
                toggleBag();
            })
        //
    });
//