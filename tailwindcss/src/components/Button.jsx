const Button = ({ variant, label, icon: Icon }) => {
    return (
        <button
            className={`flex gap-2 items-center py-[5px] px-[10px] ${
                variant == "light" ? "bg-white" : "bg-black"
            } font-semibold ${
                variant == "light" ? "text-black" : "text-white"
            } rounded`}
        >
            {Icon && <Icon size={16} />}
            {label}
        </button>
    );
};

export default Button;
