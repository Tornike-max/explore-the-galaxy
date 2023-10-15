import { useLightMode } from "../features/context/ContextLightMode"

function Footer() {
    const { isOpen } = useLightMode()

    return (
        <footer className={`${!isOpen ? 'bg-gray-900 text-gray-500' : 'bg-purple-800 text-slate-100'} py-6 px-6`}>
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0 text-xs">
                    &copy; {new Date().getFullYear()} Explore galaxy. All rights reserved.
                </div>
                <div className="text-xs">
                    <button className="mr-4 hover:text-purple-500">Privacy Policy</button>
                    <button className="hover:text-purple-500">Terms of Service</button>
                </div>
            </div>
            <div className="mt-4 text-xs">
                <div className="mb-2">
                    Contact: <a href="mailto:contact@example.com">contact@example.com</a> | Phone: +1 (123) 456-7890
                </div>
                <div>
                    Address: 123 Main Street, Vice city, Country ZIP Code: 7912451
                </div>
            </div>
            <div className="mt-4 text-xs">
                Follow us:
                <a href="https://www.facebook.com/" className="ml-2 hover:text-purple-500">Facebook</a>
                <a href="https://twitter.com/" className="ml-2 hover:text-purple-500">Twitter</a>
                <a href="https://www.linkedin.com/hp" className="ml-2 hover:text-purple-500">LinkedIn</a>
            </div>
        </footer>



    )
}

export default Footer
