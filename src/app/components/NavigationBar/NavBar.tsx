


export default function NavBar() {
  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-transparent text-sm py-3 lg:py-7 dark:bg-neutral-800  ">
      <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">  
        <div className="flex items-center justify-between">
          <a className=" lg:hidden flex-none text-2xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
            Solus
          </a> 


          <div className="sm:hidden">
            <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
              <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        
        <div id="hs-navbar-example" className=" hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
          <div className="flex flex-col lg:gap-[4.65rem] gap-2 mt-5 sm:flex-row sm:items-center lg:justify-center sm:justify-end sm:mt-0 sm:ps-5">
            
            <a className="font-medium text-lg hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-600 dark:focus:text-neutral-600" href="#">Home</a>
            <a className="font-medium text-lg hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-600 dark:focus:text-neutral-600" href="#">About</a>
            <a className="font-medium text-lg hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-600 dark:focus:text-neutral-600" href="#">Services</a>            
            
            <a className="lg:block hidden flex-none px-24 text-5xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
              Solus
            </a>

            <a className="font-medium text-lg hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-600 dark:focus:text-neutral-600" href="#">Therapist</a>
            <a className="font-medium text-lg hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-600 dark:focus:text-neutral-600" href="#">Resources</a>
            <a className="font-medium text-lg hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-600 dark:focus:text-neutral-600" href="#">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
