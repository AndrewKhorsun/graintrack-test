import{u as c,a as g,r as s,j as e,N as u,c as x}from"./index-CMUgQuyn.js";const p=()=>{const{login:o,loggedIn:i}=c().authorization,d=g(),[a,l]=s.useState(""),[t,n]=s.useState("");if(i)return e.jsx(u,{to:"/"});const m=r=>{r.preventDefault(),!(!a.trim()||!t.trim())&&(o(),d({to:"/"}))};return e.jsx("section",{children:e.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:e.jsx("div",{className:"w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-700 dark:border-gray-700",children:e.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[e.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Sign in to your account"}),e.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:m,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your email"}),e.jsx("input",{type:"email",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"name@company.com",value:a,onChange:r=>l(r.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),e.jsx("input",{type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",value:t,onChange:r=>n(r.target.value)})]}),e.jsx("button",{type:"submit",className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Sign in"})]})]})})})})},b=x("/login")({component:p});export{b as Route};