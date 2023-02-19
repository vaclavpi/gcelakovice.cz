    // Najdeme dropdown button a dropdown content
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Přidáme posluchač události pro najetí myší na dropdown button
    dropdownBtn.addEventListener('mouseenter', function () {
        dropdownContent.style.display = 'block';
    });

    // Přidáme posluchač události pro odjetí myší z dropdown menu
    dropdownContent.addEventListener('mouseleave', function () {
        dropdownContent.style.display = 'none';
    });