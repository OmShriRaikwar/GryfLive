import React from 'react'

export default function pagination() {
  return (
    <div className='my-3 me-5'>
        <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end">
    <li className="page-item disabled">
      <a className="page-link" href='/'>Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="/">1</a></li>
    <li className="page-item"><a className="page-link" href="/">2</a></li>
    <li className="page-item"><a className="page-link" href="/">3</a></li>
    <li className="page-item">
      <a className="page-link" href="/">Next</a>
    </li>
  </ul>
</nav>
    </div>
  )
}
