import multer from "multer";

// const multerImage = multer({ dest: "uploads/images/" });

// export const multerAvatar = multerImage.single("image");

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads/images"),
  filename: (req, file, cb) => cb(null, `${req.body.member_id}.png`),
});

export const multerAvatar = multer({ storage: imageStorage }).single("image");
