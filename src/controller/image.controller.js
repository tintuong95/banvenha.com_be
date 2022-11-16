const { imageService } = require("../service")

function getImageAll(req, res) {
    imageService.imageAll(req, res);
}

function getImageDetail(req, res) {
  imageService.imageDetail(req, res);
}

function createImage(req, res) {
  imageService.imageCreate(req, res);
}

function updateImage(req, res) {
  imageService.imageUpdate(req, res);
}

function deleteImage(req, res) {
  imageService.imageDelete(req, res);
}


module.exports = {
  getImageAll,
  getImageDetail,
  createImage,
  updateImage,
  deleteImage,
};