    // Najdeme dropdown button a dropdown content
    const dropdownNAVBtn = document.querySelector('.dropdownNAV-btn');
    const dropdownNAVContent = document.querySelector('.dropdownNAV-content');

    // Přidáme posluchač události pro najetí myší na dropdown button
    dropdownNAVBtn.addEventListener('mouseenter', function () {
        dropdownNAVContent.style.display = 'block';
    });

    // Přidáme posluchač události pro odjetí myší z dropdown menu
    dropdownNAVContent.addEventListener('mouseleave', function () {
        dropdownNAVContent.style.display = 'none';
    });