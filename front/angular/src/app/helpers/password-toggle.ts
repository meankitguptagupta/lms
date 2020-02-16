export function PasswordToggle (e):void {
    let target = e.currentTarget,
      ele = target.querySelector('i.fa'),
      icons:Array<string> = Array.from(ele.classList),
      input = target.parentNode.querySelector('input');
    
    if (icons.includes('fa-eye')) {
      ele.classList.remove('fa-eye');
      ele.classList.add('fa-eye-slash');
      input.type = 'text';
      return;
    }

    ele.classList.remove('fa-eye-slash');
    ele.classList.add('fa-eye');
    input.type = 'password';
}