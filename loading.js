// Attendre que la page soit complètement chargée
window.addEventListener('load', function() {
    // Sélectionner l'élément de chargement
    const loader = document.querySelector('.loader-wrapper');
    
    // Définir un délai de 2 secondes (2000 millisecondes) avant de masquer l'élément de chargement
    setTimeout(function() {
        // Masquer l'élément de chargement après le délai
        loader.style.display = 'none';
    }, 1900); // 2000 millisecondes = 2 secondes
});
