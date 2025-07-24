import { useEffect, useState } from "react";

export const Message = ({ message}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Animación de entrada
        setTimeout(() => setIsVisible(true), 10);

        // Auto-cerrar después del tiempo especificado
        const timer = setTimeout(() => {
            handleClose();
        }, 2000);

        return () => clearTimeout(timer);
    }, [message]);

    const handleClose = () => {
        setIsExiting(true);
        setIsVisible(false);
    };

    return(
        <div className={`fixed top-15 -right-1 flex flex-col gap-3 max-w-sm transition-all duration-400 ease-in-out ${
            isVisible && !isExiting
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
        }`}>
            <div className="flex gap-4 items-start bg-gray-900 text-gray-200 rounded-lg shadow-lg border-2 border-gray-600 p-4">
                <div className="flex-shrink-0 border p-2 rounded-full size-8 flex items-center justify-center bg-gray-600">
                    <span className="text-sm">!</span>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium mb-1 border w-fit px-2 rounded-full">Mensaje</h3>
                    <p className="text-sm text-gray-300 break-words">{message}</p>
                </div>
            </div>
        </div>
    );
};