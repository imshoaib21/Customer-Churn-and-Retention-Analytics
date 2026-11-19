const reduction = document.getElementById('reduction');
function updateScenario() {
  const customers = 7043;
  const departures = 1869;
  const percent = Number(reduction.value);
  const saved = Math.round(departures * percent / 100);
  const remaining = departures - saved;
  document.getElementById('pct').textContent = percent + '%';
  document.getElementById('saved').textContent = saved.toLocaleString('en-US');
  document.getElementById('left').textContent = remaining.toLocaleString('en-US');
  document.getElementById('rate').textContent = (remaining / customers * 100).toFixed(2) + '%';
}
reduction.addEventListener('input', updateScenario);
updateScenario();
