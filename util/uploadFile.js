import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads/images"),
  filename: (req, file, cb) => cb(null, `${req.body.id}.png`),
});

const uploadFile = multer({ storage: storage }).single("file");

export default uploadFile;
