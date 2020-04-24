import FileReader from "filereader";

export const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const addUploadFeature = (requestHandler) => (type, resource, params) => {
  if (type === "UPDATE" && resource === "posts") {
    if (params.data.avatar && params.data.avatar.length) {
      const formerAvatar = params.data.avatar.filter(
        (p) => !(p.rawFile instanceof File),
      );
      const newAvatar = params.data.avatar.filter(
        (p) => p.rawFile instanceof File,
      );

      return Promise.all(newAvatar.map(convertFileToBase64))
        .then((base64Pictures) =>
          base64Pictures.map((picture64, index) => ({
            src: picture64,
            title: `${newAvatar[index].title}`,
          })),
        )
        .then((transformedNewAvatar) =>
          requestHandler(type, resource, {
            ...params,
            data: {
              ...params.data,
              avatar: [...transformedNewAvatar, ...formerAvatar],
            },
          }),
        );
    }
  }
  console.log("addUploadFeature: ", requestHandler(type, resource, params));
  return requestHandler(type, resource, params);
};
