window.onload = function () {
    updateResult();
  }

  function updateResult() {
    var wynik = 0;
    var idNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    for (let i = 0; i < 16; i++) {
      document.getElementById(idNumber[i]).addEventListener("click", () => {
        if (document.getElementById(idNumber[i]).innerHTML === "0") {
          document.getElementById(idNumber[i]).innerHTML = "1";
          wynik += parseInt(2 ** (idNumber[i] - 1));
          var res = document.getElementById("wynik");
          res.innerHTML = wynik;
        } else {
          document.getElementById(idNumber[i]).innerHTML = "0";
          wynik -= parseInt(2 ** (idNumber[i] - 1));
          var res = document.getElementById("wynik");
          res.innerHTML = wynik;
        }
      })
    }
  };