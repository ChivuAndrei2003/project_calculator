// Funcții simple pentru operații matematice
function aduna(a, b) {
    return a + b;
  }
  
  function scade(a, b) {
    return a - b;
  }
  
  function inmulteste(a, b) {
    return a * b;
  }
  
  function imparte(a, b) {
    if (b === 0) {
      return "Eroare: Împărțire la zero!";
    }
    return a / b;
  }
  
  // Referință către elementul de afișare
  const display = document.getElementById('display');
  
  // Variabile pentru a stoca starea calculatorului
  let valoareAfisata = '0';       // Ce se vede pe ecran
  let primulNumar = null;         // Primul număr din operație
  let alDoileaNumar = null;       // Al doilea număr din operație
  let operator = null;            // Operatorul selectat (+, -, *, /)
  let resetareAfisaj = false;     // Indicator pentru când trebuie resetat afișajul
  
  // Funcție pentru actualizarea afișajului
  function actualizeazaAfisaj() {
    display.textContent = valoareAfisata;
  }
  
  // Funcție pentru efectuarea operațiilor
  function calculeaza(numar1, numar2, op) {
    // Convertim string-urile în numere
    numar1 = parseFloat(numar1);
    numar2 = parseFloat(numar2);
    
    // Executăm operația corespunzătoare
    switch(op) {
      case '+': 
        return aduna(numar1, numar2);
      case '−': // Minus unicode
      case '-': // Minus ASCII
        return scade(numar1, numar2);
      case '×': 
      case '*': 
        return inmulteste(numar1, numar2);
      case '÷': 
      case '/': 
        return imparte(numar1, numar2);
      default: 
        return null; // Operator necunoscut
    }
  }
  
  // Adăugăm event listeners pentru toate butoanele
  document.querySelectorAll("button").forEach((buton) => {
    buton.addEventListener("click", () => {
      const textButon = buton.textContent;
      
      // CAZUL 1: S-a apăsat un buton cu cifră sau punct
      if (!isNaN(textButon) || textButon === '.') {
        // Dacă trebuie să începem o intrare nouă
        if (resetareAfisaj) {
          valoareAfisata = '';
          resetareAfisaj = false;
        }
        
        // Nu permitem multiple puncte zecimale
        if (textButon === '.' && valoareAfisata.includes('.')) {
          return; // Ieșim din funcție fără a face nimic
        }
        
        // Dacă afișajul e doar '0', îl înlocuim cu cifra nouă (exceptând punctul)
        if (valoareAfisata === '0' && textButon !== '.') {
          valoareAfisata = textButon;
        } else {
          // Altfel, adăugăm cifra la ce e deja afișat
          valoareAfisata += textButon;
        }
      } 
      
      // CAZUL 2: S-a apăsat un operator (+, -, *, /)
      else if (['+', '-', '×', '÷', '−', '*', '/'].includes(textButon)) {
        // Dacă nu avem încă primul număr, îl salvăm
        if (primulNumar === null) {
          primulNumar = valoareAfisata;
        } 
        // Dacă avem deja un operator, calculăm rezultatul operației anterioare
        else if (operator !== null) {
          alDoileaNumar = valoareAfisata;
          // Calculăm și afișăm rezultatul
          valoareAfisata = calculeaza(primulNumar, alDoileaNumar, operator).toString();
          // Rezultatul devine noul prim număr pentru următoarea operație
          primulNumar = valoareAfisata;
          alDoileaNumar = null;
        }
        
        // Salvăm operatorul nou
        operator = textButon;
        // Marcăm faptul că trebuie să începem o intrare nouă
        resetareAfisaj = true;
      } 
      
      // CAZUL 3: S-a apăsat butonul egal (=)
      else if (textButon === '=') {
        // Verificăm dacă avem toate datele necesare pentru a calcula
        if (primulNumar !== null && operator !== null) {
          alDoileaNumar = valoareAfisata;
          // Calculăm și afișăm rezultatul
          valoareAfisata = calculeaza(primulNumar, alDoileaNumar, operator).toString();
          
          // Resetăm totul pentru o nouă operație
          primulNumar = null;
          alDoileaNumar = null;
          operator = null;
        }
      }
      
      // CAZUL 4: S-a apăsat butonul de ștergere (C sau AC)
      else if (textButon === 'C' || textButon === 'AC') {
        // Resetăm totul
        valoareAfisata = '0';
        primulNumar = null;
        alDoileaNumar = null;
        operator = null;
      }
      
      // Actualizăm afișajul la fiecare apăsare de buton
      actualizeazaAfisaj();
    });
  });
  
  // Inițializăm afișajul când se încarcă pagina
  actualizeazaAfisaj();

 

