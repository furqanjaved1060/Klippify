import { Link } from "react-router-dom"



const LPHeader = () => {
    return (
        <header className="py-2 px-4 w-70 md:w-100 mx-auto mt-5 bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-xl flex items-center justify-between">

            <Link to='/' className="text-lg font-medium flex items-center gap-1 leading none"><KlippifyLogo/>Klippify</Link>

            <nav className="space-x-2 mb-1">
                <Link to='signin' className="p-2.5 text-xxs font-medium border-1 border-white rounded-lg">Sign In</Link>
                <Link to='signup' className="p-2.5 text-xxs font-medium border-1 border-white rounded-lg bg-white text-[#007EFF]">Sign Up</Link>
            </nav>

        </header>
    )
}

export default LPHeader;



const KlippifyLogo = () => {

    return (
        <>
        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_313_399)">
        <path d="M19.5966 16.3925L16.2966 13.0925H16.2816C14.9916 14.3825 12.8916 14.3825 11.6016 13.0925H11.5866L9.63656 15.0425C9.51656 15.1625 9.37406 15.2375 9.22406 15.275C8.93156 15.35 8.48906 15.1625 8.25656 14.93L7.41656 14.09C6.53156 13.205 6.53156 11.78 7.41656 10.895L8.36156 9.95C8.71406 9.5975 9.28406 9.5975 9.63656 9.95L12.1716 12.485C13.1541 13.4675 14.7441 13.4675 15.7191 12.485L19.5666 8.6375C21.5391 6.665 21.4716 3.5 19.3716 1.6625C18.4716 0.89 17.3541 0.5 16.2366 0.5C15.0216 0.5 13.8066 0.965 12.8766 1.8875L5.63156 9.14C3.77906 10.9925 3.77906 14 5.63156 15.8525L12.8841 23.105C13.8141 24.035 15.0291 24.4925 16.2441 24.4925C17.4591 24.4925 18.6741 24.0275 19.6041 23.105C21.4566 21.2525 21.4566 18.245 19.6041 16.3925H19.5966ZM14.6466 3.6575C15.5241 2.78 16.9491 2.78 17.8266 3.6575C18.7041 4.535 18.7041 5.96 17.8266 6.8375L14.5641 10.1C14.2191 10.445 13.6491 10.445 13.3041 10.1L11.3841 8.18C11.0391 7.835 11.0391 7.265 11.3841 6.92L14.6466 3.6575ZM14.6466 21.3425L11.3841 18.08C11.0391 17.735 11.0391 17.165 11.3841 16.82L13.3041 14.9C13.6491 14.555 14.2191 14.555 14.5641 14.9L17.8266 18.1625C18.7041 19.04 18.7041 20.465 17.8266 21.3425C16.9491 22.22 15.5241 22.22 14.6466 21.3425Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_313_399">
        <rect width="24" height="24" fill="white" transform="translate(0.614014 0.5)"/>
        </clipPath>
        </defs>
        </svg>
        </>
    )
}