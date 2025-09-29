// Tab switching
const tabText = document.getElementById('tab-text');
const tabImage = document.getElementById('tab-image');
const panelText = document.getElementById('panel-text');
const panelImage = document.getElementById('panel-image');

tabText.addEventListener('click', () => {
  tabText.classList.add('active'); 
  tabImage.classList.remove('active');
  tabText.setAttribute('aria-selected','true'); 
  tabImage.setAttribute('aria-selected','false');
  panelText.style.display = ''; 
  panelImage.style.display = 'none';
});

tabImage.addEventListener('click', () => {
  tabImage.classList.add('active'); 
  tabText.classList.remove('active');
  tabText.setAttribute('aria-selected','false'); 
  tabImage.setAttribute('aria-selected','true');
  panelText.style.display = 'none'; 
  panelImage.style.display = '';
});

// Demo analyze button (mock)
const analyzeBtn = document.getElementById('analyzeBtn');
analyzeBtn.addEventListener('click', () => {
  const txt = document.getElementById('newsText').value.trim();
  if(!txt){
    alert('Please paste some news text to analyze (demo).');
    return;
  }
  analyzeBtn.disabled = true;
  analyzeBtn.textContent = 'Analyzing...';
  setTimeout(() => {
    const fakeScore = Math.random();
    let verdict = fakeScore > 0.6 ? 'Likely Fake' : (fakeScore > 0.25 ? 'Possibly Manipulated / Mixed' : 'Likely Real');
    alert('Demo result: ' + verdict + '\nConfidence: ' + (Math.round((1-fakeScore)*100)) + '%');
    analyzeBtn.disabled = false;
    analyzeBtn.textContent = 'Analyze News →';
  }, 1200);
});

// Image analyze mock
const analyzeImg = document.getElementById('analyzeImg');
analyzeImg.addEventListener('click', () => {
  analyzeImg.disabled = true;
  analyzeImg.textContent = 'Analyzing...';
  setTimeout(() => {
    const d = Math.random();
    const res = d > 0.6 ? 'Deepfake detected' : 'No strong manipulation detected';
    alert('Demo image result: ' + res);
    analyzeImg.disabled = false;
    analyzeImg.textContent = 'Analyze Image →';
  }, 1400);
});

// choose file -> open native file picker
document.getElementById('chooseFile').addEventListener('click', () => {
  alert('This is a demo UI. Connect to your backend to accept files.');
});