/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {

        /* 
        Déclarations
        - Toutes les variables utilisées dans le script
        */
            let burgerBtn = document.querySelector('#beforeNavigation button');
            let mainNavigation = document.querySelector('#mainNavigation');
            let burgerIsOpen = false;
            let lessBtns = document.querySelectorAll('.less');
            let moreBtns = document.querySelectorAll('.more');
            let prices = document.querySelectorAll('.price');
            let singleQtys = document.querySelectorAll('.singleQty');
            let totalPrice = document.querySelector('#totalPrice');
        //

        /* 
        Fonctionns/Méthodes
        - Toutes les fonction utilisées dans le script
        */
            const toggleBurger = () => {

                // Capter le clic sur burgerBtn
                burgerBtn.addEventListener('click', () => {
                    // Vérifier l'état du menu
                    if( burgerIsOpen === true ){
                        // Supprrimer la class open sur mainNavigation
                        mainNavigation.classList.remove('open');
                    }
                    else{
                        // Ajouter la class open sur mainNavigation
                        mainNavigation.classList.add('open');
                    }

                    // Inverser la valeur de burgerIsOpen
                    burgerIsOpen = !burgerIsOpen;
                })

            };

            const checkQuantity = () => {
                // Faire une boucle sur la collection lessBtns
                for( let btn of lessBtns ){
                    // Capter le clic sur le bouton
                    btn.addEventListener('click', () => {
                        // Si la valeur de la balise suivante et suppérieur à 0
                        if( btn.nextElementSibling.value > 0 ){
                            // Supprimer 1
                            btn.nextElementSibling.value--;
                        }

                        getTotalPrice();
                    })
                };

                // Faire une boucle sur la collection moreBtns
                for( let btn of moreBtns ){
                    // Capter le clic sur le bouton
                    btn.addEventListener('click', () => {
                        // Ajouter 1 à la valeur de la balise précédente
                        btn.previousElementSibling.value++;

                        getTotalPrice();
                    })
                }
            }

            const getTotalPrice = () => {
                let newPrice = 0;
                for( let [index, price] of prices.entries() ){
                    let singlePrice = parseInt(price.textContent) * singleQtys[index].value
                    newPrice += singlePrice
                }
                totalPrice.textContent = newPrice
            }
        //

        /* 
        Lancer IHM
        */
            toggleBurger();
            checkQuantity();
            getTotalPrice();
        //
    })
/**/


