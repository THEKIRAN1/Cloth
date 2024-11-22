import React from 'react'

function Cards({item}) {
  return (
  <>
  <div className='mt-5 md:10 my-3'>
  <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.title}  
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-betweeen">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default Cards