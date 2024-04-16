function toggleInfo(eventId) {
  const event = document.getElementById(eventId);
  const hiddenInfo = event.querySelector('.hidden-info');

  hiddenInfo.style.display === 'none' ? hiddenInfo.style.display = 'block' : hiddenInfo.style.display = 'none';
}
