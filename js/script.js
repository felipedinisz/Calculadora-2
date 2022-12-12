function criaCalculadora() {
  return {
    display: document.querySelector("input"),
    btnClear: document.querySelector(".btn-clear"),
    btnDelete: document.querySelector(".btn-delete"),

    inicia() {
      //alert('Oi, iniciei');
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      document.addEventListener("keydown", (e) => {
        console.log(e);
        if (e.key === "Enter") {
          this.realizaConta();
        }

        switch (e.key) {
          case "1":
            this.display.value += 1;
            break;
          case "2":
            this.display.value += 2;
            break;
          case "3":
            this.display.value += 3;
            break;
          case "4":
            this.display.value += 4;
            break;
          case "5":
            this.display.value += 5;
            break;
          case "6":
            this.display.value += 6;
            break;
          case "7":
            this.display.value += 7;
            break;
          case "8":
            this.display.value += 8;
            break;
          case "9":
            this.display.value += 9;
            break;
          case "+":
            this.display.value += '+';
            break;
          case "-":
            this.display.value += '-';
            break;
          case "*":
            this.display.value += '*';
            break;
          case "/":
            this.display.value += '/';
            break;
          case "Backspace":
            this.delete();
            break;
          case "c":
            this.clearDisplay();
            break;
          case ".":
            this.display.value += '.';
            break;
          case "(":
            this.display.value += '(';
            break;
          case ")":
            this.display.value += ')';
            break;
          case "0":
            this.display.value += 0;
            break;
        }
      });
    },

    delete() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clearDisplay() {
      this.display.value = "";
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    cliqueBotoes() {
      // this -> calculadora
      document.addEventListener(
        "click",
        function (e) {
          // this-> document. This é quem chama a função. Arrow function n muda o this
          const el = e.target;

          if (el.classList.contains("btn-num")) this.btnParaDisplay(el.innerText);
          if (el.classList.contains("btn-clear")) this.clearDisplay();
          if (el.classList.contains("btn-delete")) this.delete();
          if (el.classList.contains("btn-eq")) this.realizaConta();
        }.bind(this)
      );
    },
  };
}
const calculadora = criaCalculadora();

calculadora.inicia();
