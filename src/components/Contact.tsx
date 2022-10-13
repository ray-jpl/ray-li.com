import React from "react";
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

const Contact: React.FC = () => {
    return (
      <section className="w-full">
        <h1 className="text-3xl font-bold">Contact Me!</h1>
        
        <div className="p-6 mt-3 flex bg-[#f7f7f7] rounded">
          <form className="w-4/6 flex flex-col" action="">
            {/* <label className="text-xl font-bold" htmlFor="name">Name</label>
            <input name="name" type="text" placeholder='Name'/>
            
            <label className="text-xl font-bold"htmlFor="email">Email</label>
            <input name="email" type="text" placeholder='Name'/>

            <label className="text-xl font-bold" htmlFor="message">Message</label>
            <textarea name="message" id=""></textarea> */}

            <p className="text-lg">
              Do you want to work with me or want to ask questions about my projects?
              Just want someone to talk to?
              <br />
              <br />
            </p>

            <p className="text-lg">
              Just send me an email or message me on LinkedIn!
            </p>

          </form>

          <div id="iconList" className="p-5 flex flex-col grow items-centre">
            <Link href="https://github.com/ray-jpl">
              <a className="flex items-center border-2 border-transparent hover:border-black">
                <svg className="filter invert-[0.5] h-5 w-5 mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <p>ray-jpl</p>
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/raymond-li4/">
              <a className="flex items-center border-2 border-transparent hover:border-black">
              <svg className="filter invert-[0.5] h-5 w-5 mr-2" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <p>raymond-li4</p>
              </a>
            </Link>

            <div className="flex items-center border-2 border-transparent hover:border-black">
              <svg className="filter invert-[0.5] h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
              <p>liraymond4@gmail.com</p>
            </div>

            
          </div>
        </div>




        
      </section>
    )
}

export default Contact