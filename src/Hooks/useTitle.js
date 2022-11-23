import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Think. Feel. Resell.`;
    }, [title])
};

export default useTitle;