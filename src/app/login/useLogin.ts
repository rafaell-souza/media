import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import loginSchema from '@/schemas/login';

type LoginData = z.infer<typeof loginSchema>;

const useLogin = () => {
    const { register,
        handleSubmit,
        formState:
        { errors }, resetField
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmitForm = (data: LoginData) => {
        alert('Success');
    }

    return { register, handleSubmit, errors, onSubmitForm, resetField };
}

export default useLogin;