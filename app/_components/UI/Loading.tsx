import { LoaderCircle } from 'lucide-react';

function Loading() {
    return (
        <div className="flex justify-center items-center">
            <LoaderCircle
                size={52}
                color={'rgb(37, 99, 235)'}
                className="animate-spin"
            />
        </div>
    );
}

export default Loading;
