import multer from "multer";

const multerImage = multer({ dest: "uploads/images/" });

export const uploadAvatar = multerImage.single("avatar");
