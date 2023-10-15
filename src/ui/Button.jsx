
function Button({ children, onClick, active, disabled }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`flex justify-between items-center rounded-md text-[9px] sm:text-[13px] md:text-md py-1 px-2 sm:py-2 sm:px-3 md:py-3 md-px-4 text-slate-200 font-semibold bg-purple-500 hover:bg-purple-800 transition-colors duration-300 ${active}`}
        >
            {children}
        </button>
    );
}

export default Button
