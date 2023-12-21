import Swal from 'sweetalert2'
import styles from '~~/styles/alert.module.css'

export const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.onmouseenter = Swal.stopTimer
    toast.onmouseleave = Swal.resumeTimer
  },
  background: '#222222',
  color: '#F5F5F5',
  customClass: {
    container: `${styles.toast}`,
  },
})
