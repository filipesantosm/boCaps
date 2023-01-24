import { toast } from 'react-toastify';

const notifyError = (message: string) =>
  toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
  });
const notifySuccess = (message: string) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 5000,
  });

function handleError(err: any) {
  return notifyError(err.response.data.message);
}

export function handleSuccess(message: string) {
  return notifySuccess(message);
}

export default handleError;
