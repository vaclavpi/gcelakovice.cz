    // Najdeme formulář a přidáme posluchač události pro odeslání
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Zamezení odeslání formuláře

        // Najdeme vyhledávací pole a získáme jeho hodnotu
        const input = document.querySelector('#search');
        const query = input.value.toLowerCase();

        // Najdeme prvky, na které chceme vyhledávat
        const items = document.querySelectorAll('.item');

        // Projdeme všechny prvky a skryjeme ty, které neodpovídají hledání
        items.forEach(function (item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });