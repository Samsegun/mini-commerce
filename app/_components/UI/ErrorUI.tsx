import { Ban } from 'lucide-react';

function ErrorUI({ message }: { message: string }) {
    return (
        <div className="flex flex-col justify-center items-center text-red-500">
            <Ban size={52} color={'rgb(239, 68, 68)'} />
            <p>{message}</p>
        </div>
    );
}

export default ErrorUI;
