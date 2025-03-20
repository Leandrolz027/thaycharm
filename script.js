// Script para animação de fade-in das seções
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.hero, .about, .products');

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = window.innerHeight - sectionTop > 150;

            if (sectionVisible) {
                section.classList.add('visible');
            }
        });
    });
});
