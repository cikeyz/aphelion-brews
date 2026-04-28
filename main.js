
document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('.nav-radio');
  const video = document.querySelector('.scene-video');
  const body = document.body;

  const playerTrack = document.getElementById('playerTrack');
  const playerArtist = document.getElementById('playerArtist');
  const playerArt = document.getElementById('playerArt');
  const playerProgress = document.getElementById('playerProgress');
  const playerPlay = document.getElementById('playerPlay');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const playerPrev = document.getElementById('playerPrev');
  const playerNext = document.getElementById('playerNext');
  const playlistItems = document.querySelectorAll('.playlist li');

  let currentTrackIndex = 0;
  let isPlaying = false;
  let progressInterval = null;
  let progressValue = 35;

  const tracks = Array.from(playlistItems).map(li => ({
    track: li.getAttribute('data-track') || '',
    artist: li.getAttribute('data-artist') || '',
    image: li.getAttribute('data-image') || ''
  }));

  function loadTrack(index) {
    if (index < 0) index = tracks.length - 1;
    if (index >= tracks.length) index = 0;
    currentTrackIndex = index;

    const t = tracks[index];
    playerTrack.textContent = t.track;
    playerArtist.textContent = t.artist;
    playerArt.src = t.image;
    progressValue = 0;
    playerProgress.style.width = '0%';

    /* Highlight active playlist item */
    playlistItems.forEach((li, i) => {
      li.style.color = i === index ? 'var(--parchment)' : '';
      li.style.textShadow = i === index ? '0 0 12px rgba(217, 119, 6, 0.3)' : '';
    });
  }

  function togglePlay() {
    isPlaying = !isPlaying;

    if (isPlaying) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      startProgress();
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      stopProgress();
    }
  }

  function startProgress() {
    stopProgress();
    progressInterval = setInterval(() => {
      progressValue += 0.3;
      if (progressValue >= 100) {
        progressValue = 0;
        loadTrack(currentTrackIndex + 1);
      }
      playerProgress.style.width = progressValue + '%';
    }, 100);
  }

  function stopProgress() {
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
  }

  if (playerPlay) {
    playerPlay.addEventListener('click', togglePlay);
  }

  if (playerPrev) {
    playerPrev.addEventListener('click', () => {
      loadTrack(currentTrackIndex - 1);
      if (isPlaying) startProgress();
    });
  }

  if (playerNext) {
    playerNext.addEventListener('click', () => {
      loadTrack(currentTrackIndex + 1);
      if (isPlaying) startProgress();
    });
  }

  /* Click playlist item to load and play */
  playlistItems.forEach((li, index) => {
    li.addEventListener('click', () => {
      loadTrack(index);
      if (!isPlaying) togglePlay();
    });
  });

  /* Initialize first track highlight */
  loadTrack(0);

  
  function updateActiveSection() {
    let activeId = 'home';
    radios.forEach(radio => {
      if (radio.checked) {
        activeId = radio.id.replace('nav-', '');
      }
    });

    /* Body class for CSS hooks and scroll management */
    body.classList.remove('is-home', 'is-menu', 'is-music', 'is-jobs');
    body.classList.add(`is-${activeId}`);

    /* Lock scroll on Home - it's a fixed cinematic viewport */
    if (activeId === 'home') {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    /* Manage video playback */
    if (video) {
      if (activeId === 'home') {
        video.play().catch(() => {
          /* Autoplay blocked by browser policy - poster shows instead */
        });
      } else {
        video.pause();
      }
    }

    /* Scroll to top of new section for clean entry */
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  radios.forEach(radio => {
    radio.addEventListener('change', updateActiveSection);
  });

  /* Handle video errors gracefully */
  if (video) {
    video.addEventListener('error', () => {
      video.style.display = 'none';
    });
  }

  /* Initial state */
  updateActiveSection();
});
