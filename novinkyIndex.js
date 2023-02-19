$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "novinky.xml",
      dataType: "xml",
      success: function(xml) {
        var aktualitaCount = $(xml).find('aktualita').length;
        var aktualityTable = $('<table>').addClass('aktuality-table');
        var aktualitaIndex = 0;
        $(xml).find('aktualita').sort(function(a, b) {
          var aDate = new Date($(a).find('datum').text());
          var bDate = new Date($(b).find('datum').text());
          return bDate - aDate;
        }).each(function() {
          if (aktualitaIndex < 6) {
            var nadpis = $(this).find('nadpis').text();
            var shrnuti = $(this).find('shrnuti').text();
            var odkaz = $(this).find('odkaz').text();
            var dale = $(this).find('dale').text();
            var obrazky = $(this).find('obrazek').map(function() {
              return $(this).text();
            }).get();
            var obrazek = obrazky.length > 0 ? obrazky[0] : "";
            var tr;
            var trNadpis = $('<tr>').addClass('nadpis').html('<a href="' + odkaz + '">' + '<h2>' + nadpis + '</h2></a>');
            var trShrnuti = $('<tr>').addClass('shrnuti').text(shrnuti);
            var trObrazek = $('<tr>').addClass('obrazek').html('<img src="' + obrazek + '">');
            var trDale = $('<tr>').addClass('dale').html('<a href="' + odkaz + '">' + dale + '</a>');
            if (aktualitaIndex % 3 == 0) {
              td = $('<td>');
              td.append(trNadpis, trShrnuti, trDale, trObrazek);
              aktualityTable.append(td);
            } else {
              td = aktualityTable.find('td:last');
              td.append(trNadpis, trShrnuti, trDale, trObrazek);
            }
            aktualitaIndex++;
          }
        });
        $('#aktuality').append(aktualityTable);
      }
    });
  });
  