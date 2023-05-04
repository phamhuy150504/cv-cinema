import { https } from "./config"

export const adminService = () => ({
    addNewMovie: formData => https.post('/api/QuanLyPhim/ThemPhimUploadHinh', formData)
})