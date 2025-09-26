import React from 'react'

export default function Footer() {
  return (
        <footer className=" bg-radial-[at_80%_20%] from-teal-900 to-teal-950 to-90% rounded-t-[3vw] shadow ">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-teal-100 sm:mb-0">
                      <li>
                          <a href="#" className="hover:underline me-4 md:me-6">About</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Contact</a>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-teal-200/50 sm:mx-auto lg:my-8" />
              <span className="block text-sm text-teal-100 sm:text-center">© 2025 <a href="#" className="hover:underline text-teal-300">nortecode</a>. All Rights Reserved.</span>
          </div>
      </footer>
  )
}