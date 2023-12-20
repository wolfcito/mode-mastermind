import Swal from "sweetalert2";
import styles from "~~/styles/alert.module.css"

export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
    background: "#d6d3d1",
    color: "#000",
    customClass: {
        container: `${styles.toast}`,
    }
});