
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-toggle')
const bodyRef = document.querySelector('body')


themeSwitch.addEventListener('change', onChangeTheme)


function onChangeTheme(event) {
  event.currentTarget.checked ? onCheckedSwitch() : offCheckedSwith();
}


function onCheckedSwitch() {
  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  themeSwitch.checked = true;
}


function offCheckedSwith() {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  themeSwitch.checked = false;
}


function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    offCheckedSwith();
    return;
  }


  if (savedTheme === Theme.DARK) {
    onCheckedSwitch();
    return;
  }
}

currentTheme(); 
