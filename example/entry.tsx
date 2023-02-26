import { sum } from '../src/index'

const root = document.getElementById('root')!

root.innerHTML = `
<div>
<h1>Vite lite lib Starter</h1>
<p>1 + 2 + 3 + 4 = ${sum(1, 2, 3, 4)}</p>
</div>
`
