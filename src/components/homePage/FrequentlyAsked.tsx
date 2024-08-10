import React from 'react'

const FrequentlyAsked = () => {
  return (
    <div className='w-full h-[700px] my-10 relative flex justify-center items-center'>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("/frequentQuestion.jpg")] bg-origin-border bg-cover bg-opacity-50 bg-top'></div>
        <div className='w-[900px] h-full flex flex-col z-10'>
            <h1 className='w-full flex justify-center text-5xl font-bold mt-20 mb-5'>FREQUENTLY ASKED QUESTIONS</h1>
            <p className='w-full flex justify-center text-slate-600 text-lg mb-10'>What our clients usually asked about our services and tours.</p>
            <div className="join join-vertical w-full bg-white bg-opacity-80">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                    <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                    <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                    <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                    <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default FrequentlyAsked
