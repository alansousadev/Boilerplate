

// contador
var day = 0,
  hour = 0,
  minute = 14,
  seconds = 59;

// manter valores ao recarregar e usar msg expirada
// Sim - 1 nao - 0
var comcookie = '0';
var usarMsgContador = '1',
  msgContador = 'Promoção Expirada!';

// retorna data atual
$(document).ready(function () {
  var d = new Date(),
    day = d.getDate(),
    month = d.getMonth();
  month++;
  if (parseInt(day) < 10) {
    day = '0' + day;
  }
  if (parseInt(month) < 10) {
    month = '0' + month;
  }
  var date = day + '/' + month + '/' + d.getFullYear();
  $('.today').html(date);
});

// contador
$(document).ready(function () {
  var countdown = '\
        <ul class="countdown">\
                <li class="liDay"><div><span class="counterDay">X</span><p class="sDay">Dias</p></div></li>\
                <li class="liHour"><div><span class="counterHour">X</span><p class="sHour">Horas</p></div></li><div class="divisor"><span class="d1"></span><span class="d1"></span></div>\
                <li class="liMinute"><div><span class="counterMinute">X</span><p class="sMinute">Minutos</p></div></li><div class="divisor"><span class="d1"></span><span class="d1"></span></div>\
                <li class=""><div><span class="counterSecond">X</span><p class="sSecond">Segundos</p></div></li>\
        </ul>\
        <div class="expired"><h2 class="title">' + msgContador + '</h2></div>\
    ';

  $('.counterPage').append(countdown);
  if (comcookie == '1') {
    var search = "c" + "=";
    if (document.cookie.length > 0) {
      offset = document.cookie.indexOf(search);
      if (offset != -1) {
        offset += search.length;
        end = document.cookie.indexOf(";", offset);
        if (end == -1) end = document.cookie.length;
        value = unescape(document.cookie.substring(offset, end));
        data = value.split('-');
        day = !isNaN(data[0]) ? parseInt(data[0]) : day;
        hour = !isNaN(data[1]) ? parseInt(data[1]) : hour;
        minute = !isNaN(data[2]) ? parseInt(data[2]) : minute;
        seconds = !isNaN(data[3]) ? parseInt(data[3]) : seconds
      }
    }
  }
  var fildDay = $('.counterDay'),
    fildHour = $('.counterHour'),
    fildMinute = $('.counterMinute'),
    fildSeconds = $('.counterSecond');
  var sDay = $('.sDay'),
    sHour = $('.sHour'),
    sMinute = $('.sMinute'),
    sSeconds = $('.sSecond');
  var liDay = $('.liDay'),
    liHour = $('.liHour'),
    liMinute = $('.liMinute');
  var stringDay = '';
  var stringHour = '';
  var stringMinute = '';
  var stringSeconds = '';
  if (day == 0) {
    liDay.css("display", "none")
  }
  if (day == 0 && hour == 0) {
    liHour.css("display", "none")
  }
  if (day == 0 && hour == 0 && minute == 0) {
    liMinute.css("display", "none")
  }
  var inter = setInterval(function () {
    stringDay = day;
    stringHour = hour;
    stringMinute = minute;
    stringSeconds = seconds;
    fildDay.html(stringDay);
    fildHour.html(stringHour);
    fildMinute.html(stringMinute);
    fildSeconds.html(stringSeconds);
    if (seconds == 1) {
      sSeconds.html('Segundo')
    } else {
      sSeconds.html('Segundos');
      if (minute == 1) {
        sMinute.html('Minuto')
      } else {
        sMinute.html('Minutos');
        if (hour == 1) {
          sHour.html('Hora')
        } else {
          sHour.html('Horas');
          if (day == 1) {
            sDay.html('Dia')
          } else {
            sDay.html('Dias')
          }
        }
      }
    }
    if (day == 0) {
      liDay.css("display", "none")
    }
    if (day == 0 && hour == 0) {
      liHour.css("display", "block")
    }
    if (day == 0 && hour == 0 && minute == 0) {
      liMinute.css("display", "block")
    }
    seconds--;
    if (seconds < 0) {
      minute--;
      seconds = 59;
      if (minute < 0) {
        hour--;
        minute = 59;
        if (hour < 0) {
          day--;
          hour = 23;
          if (day < 0) {
            day = 0;
            hour = 0;
            minute = 0;
            seconds = 0;
            clearInterval(inter);
            if (usarMsgContador == '1') {
              $('.countdown').css('display', 'none');
              $('.expired').css('display', 'block')
            }
          }
        }
      }
    }
  }, 1000)
});

window.onbeforeunload = function () {
  if (comcookie == '1') {
    var expires = new Date();
    expires.setDate(expires.getDate() + 7);
    var data = day + '-' + hour + '-' + minute + '-' + seconds;
    document.cookie = "c" + "=" + data + "; expires=" + expires.toGMTString()
  }
}
