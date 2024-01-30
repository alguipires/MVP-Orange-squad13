import Swal from 'sweetalert2';

const handleAlert = (message, position) => {
  const Toast = Swal.mixin({
    toast: true,
    position: position || 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: 'error',
    title: message,
  });
};

export default handleAlert;