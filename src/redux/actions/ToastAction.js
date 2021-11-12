import { toast } from "react-toastify";

export const successToast = (message = "Default: Isi success message", closeDuration = 3000) => {
  return toast.success(message, {
    position: "top-center",
    autoClose: closeDuration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export const errorToast = (message = "Default: Isi error message", closeDuration = 3000) => {
  return toast.error(message, {
    position: "top-center",
    autoClose: closeDuration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

// Jangan lupa <ToastContainer /> & ReactToastify.css pasang pada komponen yang ingin diberikan toast
// Atau <ToastContainer /> taro di App.js, jadi semua komponen kebagian