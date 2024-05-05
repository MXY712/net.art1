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
    console.log('img/0dba819e360c53e533667e18a5323aa.png', currentSrc); 
    this.src = currentSrc.includes('img/0dba819e360c53e533667e18a5323aa.png') ? 'img/38ebe002c22e11566338459d8df80fa.png' : 'img/0dba819e360c53e533667e18a5323aa.png';
    console.log('img/38ebe002c22e11566338459d8df80fa.png', this.src); 
  });
  
