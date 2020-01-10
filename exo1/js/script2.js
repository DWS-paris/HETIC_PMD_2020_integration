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
            let accordeonLink = document.querySelectorAll('.accordeon h2');
            let accordeonContent = document.querySelectorAll('.accordeon');
            let showMoreLinks = document.querySelectorAll('.showMore')
            
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

            const toggleAccordeon = () => {
                // Faire une boucle sur accordeonLink
                for( let link of accordeonLink ){
                    // Capter le clic sur link
                    link.addEventListener('click', () => {

                        // SUpprimer toutes les class open
                        for( let content of accordeonContent ){
                            content.classList.remove('open')
                        }

                        // Sélectionner la balise parent pour y ajouter la class open
                        link.parentNode.classList.add('open')
                    })
                }
            }

            const showModeFunction = () => {
                showMoreLinks.forEach( link => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        link.parentNode.classList.add('hide')
                        link.parentNode.parentNode.lastElementChild.classList.add('open')

                        console.log(link.parentNode.parentNode.lastChild)
                    })
                } )
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

            toggleAccordeon();
            showModeFunction();
        //
    });
//