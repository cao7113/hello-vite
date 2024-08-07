import './main.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="text-lg">
    <div class="text-balance">
      <h2>Test Tailwind</h2>
      <div class="text-red-300 font-bold underline text-current">test text</div>
       <p class="text-green-200">test green</p>
    </div>
    
    <div class="text-balance">
      <h2>Test DaisyUI</h2>
      <button class="btn btn-primary">btn with btn-primary</button>
      <button class="btn btn-secondary">btn with btn-secondary</button>
    </div>
  </div>
`
