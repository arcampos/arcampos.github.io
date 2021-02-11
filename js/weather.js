let selection = document.querySelector('select');
let paragraph = document.querySelector('p');

selection.addEventListener('change', chooseWeather);

function chooseWeather() {
  let election = selection.value;

  if (election === 'hot') {
    paragraph.textContent = 'You should use sandals.';
  } else if (election === 'rain') {
    paragraph.textContent = 'You should use galoshes.';
  } else if (election=== 'snow') {
    paragraph.textContent = 'You should use boots.';
  } else if (election === 'unknown') {
    paragraph.textContent = 'You should use shoes.';
  } else {
    paragraph.textContent = '';
  }
}

