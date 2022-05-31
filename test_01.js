const delphiContainer = document.getElementsbyclass('super-content-wrapper');

const foundation = `
<div class="Delphi-Terminal">
<div class="Delphi-Terminal__Toolbar">
<div class="Delphi-Toolbar__buttons">
<button class="Delphi-Toolbar__button Delphi-Toolbar__button--exit">&#10005;</button>
<button class="Delphi-Toolbar__button">&#9472;</button>
<button class="Delphi-Toolbar__button">&#9723;</button>
</div>
<p class="Delphi-Toolbar__user">cody@ubuntu:~</p>
</div>
<div class="Delphi-Terminal__body">
<div class="Delphi-Terminal__text">
<p class="delphi">
<span class="delphi">Welcome to the Delphi Terminal.</span><br>
<span class="delphi">Would you like to initiate startup.exe?.</span><br>
</p>
</div>
<div class="Delphi-Terminal__Prompt">
<span class="Prompt__user">cody@ubuntu:</span><span class="Prompt__location">~</span><span class="Prompt__dollar">$</span>
<span class="Prompt__cursor"></span>
</div>
</div>
</div>
`;

function setFoundation() {
  delphiContainer.insertAdjacentHTML('afterbegin', foundation);
  console.log('setFoundation is running');
}

window.onload = function () {
  setFoundation();
};
