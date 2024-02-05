const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

// const storageTypes = {
//   local: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.resolve(__dirname, '..', 'public', 'uploads')); // Diretório onde as imgs serão armazenadas
//     },
//     filename: (req, file, cd) => {
//       crypto.randomBytes(16, (err, hash) => {
//         if (err) cb(err);
//         file.key = `${hash.toString('hex')}-${file.originalname}`;
//         cb(null, file.key);
//       });
//     },
//   }),
//   s3: multerS3({
//     s3: new aws.S3(),
//     bucket: 'mvporange',
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     acl: 'public-read',
//     key: (req, file, cd) => {
//       crypto.randomBytes(16, (err, hash) => {
//         if (err) cb(err);
//         const fileName = `${hash.toString('hex')}-${file.originalname}`;
//         cb(null, fileName);
//       });
//     },
//   }),
// };

module.exports = {
  dest: path.resolve(__dirname, '..', 'public', 'uploads'),
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..', 'public', 'uploads')); // Diretório onde as imgs serão armazenadas
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        fileName = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('invalid file type'));
    }
  },
};
// const upload = multer({ storage: storage });

// module.exports = upload;

//OLD METHOD
/* const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/projects/imgs'); // Diretório onde as imgs serão armazenadas
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo
  },
});

const upload = multer({ storage: storage });

module.exports = upload; */
