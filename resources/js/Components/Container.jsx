export default function Container({ className, children }) {
    return (
        <div
            className={`w-full md:w-10/12 lg:w-8/12 mx-auto p-1.5 ${className}`}
        >
            {children}
        </div>
    );
}
