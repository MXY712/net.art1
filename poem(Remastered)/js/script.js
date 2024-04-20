function togglePoem() {
    var poem = document.getElementById('poem');
    if (poem.style.display === 'none') {
      poem.style.display = 'block';
    } else {
      poem.style.display = 'none';
    }
  }
  
  function highlightVerse(verse) {
    if (verse.style.color === 'red') {
      verse.style.color = '';
      verse.style.fontWeight = '';
    } else {
      verse.style.color = 'red';
      verse.style.fontWeight = 'bold';
    }
  }

  document.getElementById('dynamicImage').addEventListener('click', function() {
    var currentSrc = this.src;
    this.src = currentSrc === '0dba819e360c53e533667e18a5323aa.png' ? '0dba819e360c53e533667e18a5323aa.png' : '0dba819e360c53e533667e18a5323aa.png';
  });
  