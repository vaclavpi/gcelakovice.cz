$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "novinky.xml",
    dataType: "xml",
    success: function(xml) {
      $(xml).find('aktualita').each(function() {
        var nadpis = $(this).find('nadpis').text();
        var popis = $(this).find('popis').text();
        var datum = $(this).find('datum').text();
        var obrazky = "";
        $(this).find('obrazky obrazek').each(function() {
          var nazev = $(this).text();
          obrazky += '<img src="' + nazev + '">';
        });
        var blok = '<div class="aktualita"><h2>' + nadpis + '</h2><p>' + popis + '</p><p class="datum">' + datum + '</p>' + obrazky + '</div>';
        $('#aktuality').append(blok);
      });
    }
  });
});