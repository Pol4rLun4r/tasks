import { useEffect, useState } from "react";

const DEFAULT_OPTIONS = {
    config: { attributes: true, childList: true, subtree: true },
};

const useMutationObservable = (target: any, callback: any, options = DEFAULT_OPTIONS) => {
    const [observer, setObserver] = useState<MutationObserver | null>(null);

    useEffect(() => {
        const obs = new MutationObserver(callback);
        setObserver(obs);

    }, []);
    
    useEffect(() => {
        if (!observer) return;
        
        const { config } = options;
        observer?.observe(target, config);
    
        return () => {
            if (observer) {
                observer.disconnect();
            }
        }
    }, [observer, target, options]);
};

export default useMutationObservable;