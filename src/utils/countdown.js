export function startCountdown(targetId, eventDateStr) {
    document.addEventListener("DOMContentLoaded", function () {
      const countdownElement = document.getElementById(targetId);
      if (!countdownElement) return;
  
      const eventDate = new Date(eventDateStr);
      function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;
  
        if (diff <= 0) {
          countdownElement.textContent = "¡El evento ya comenzó!";
          clearInterval(interval);
          return;
        }
  
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = `
          <span class="text-yellow-400">${days}</span> días, 
          <span class="text-yellow-400">${hours}</span> horas, 
          <span class="text-yellow-400">${minutes}</span> minutos, 
          <span class="text-yellow-400">${seconds}</span> segundos
        `;
      }
  
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
    });
  }
  