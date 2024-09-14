import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-grey-color mt-4 py-4 rounded-b-lg">
            <div className="container mx-auto text-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Send me an <span className="text-black uppercase text-lg ml-1">email</span>
                </button>
            </div>
        </footer>
    )
}

export default Footer