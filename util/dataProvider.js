import { stringify } from "query-string";
import {
  fetchUtils,
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  UPDATE_MANY,
  DELETE,
  DELETE_MANY,
} from "react-admin";

/**
 * Maps react-admin queries to a simple REST API
 *
 * The REST dialect is similar to the one of FakeRest
 * @see https://github.com/marmelab/FakeRest
 * @example
 * GET_LIST     => GET http://my.api.url/posts?sort=['title','ASC']&range=[0, 24]
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts?filter={ids:[123,456,789]}
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts
 * DELETE       => DELETE http://my.api.url/posts/123
 */
export default (apiUrl, httpClient = fetchUtils.fetchJson) => {
  const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(file.rawFile);
    });
  /**
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The data request params, depending on the type
   * @returns {Object} { url, options } The HTTP request parameters
   */
  const convertDataRequestToHTTP = async (type, resource, params) => {
    console.log("DataProvider_RequestToHTTP");
    let url = "";
    const options = {};
    switch (type) {
      case GET_LIST: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          sort: JSON.stringify([field, order]),
          pagination: JSON.stringify([page, perPage]),
          filter: JSON.stringify(params.filter),
        };
        url = `${apiUrl}/${resource}?${stringify(query)}`;

        break;
      }
      case GET_ONE:
        // CUSTOM: url 에 show 를 추가
        url = `${apiUrl}/${resource}/${params.id}/show`;
        console.log("DataProvider_Request_GET_ONE ", url);
        console.log(apiUrl);
        console.log(resource);
        console.log(params.id);
        // console.log("url");
        break;
      case GET_MANY: {
        const query = {
          filter: JSON.stringify({ id: params.ids }),
        };
        url = `${apiUrl}/${resource}?${stringify(query)}`;
        break;
      }
      case GET_MANY_REFERENCE: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          sort: JSON.stringify([field, order]),
          range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
          filter: JSON.stringify({
            ...params.filter,
            [params.target]: params.id,
          }),
        };
        url = `${apiUrl}/${resource}?${stringify(query)}`;
        break;
      }
      case UPDATE:
        console.log("DataProvider_Request_UPDATE");
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = "PUT";
        if (params.data.image) {
          const convertedImage = await convertFileToBase64(params.data.image);
          options.body = JSON.stringify({
            ...params.data,
            image: { src: convertedImage },
          });
        }

        console.log(params.data);
        break;
      case CREATE:
        console.log("DataProvider_Request_CREATE");
        url = `${apiUrl}/${resource}`;
        options.method = "POST";
        console.log("params.data: ", params.data);

        if (params.data.image) {
          const convertedImage = await convertFileToBase64(params.data.image);
          const convertedString = convertedImage.split(";base64,").pop();

          options.body = JSON.stringify({
            ...params.data,
            image: { src: convertedImage },
          });
        } else if (params.data.file) {
          const convertedFile = await convertFileToBase64(params.data.file);
          options.body = JSON.stringify({
            ...params.data,
            file_name: params.data.file.rawFile.name,
            src: convertedFile,
            file_string: convertedString,
          });
        } else {
          options.body = JSON.stringify(params.data);
        }

        // CUSTOM:
        /*if (resource === "posts" || params.data.avatar) {
          let newPictures = {};
          let formerPictures = {};
          Object.keys(params.data.avatar).forEach((item) => {
            item === "rawFile"
              ? (newPictures = {
                  ...newPictures,
                  [item]: params.data.avatar[item],
                })
              : (formerPictures = {
                  ...formerPictures,
                  [item]: params.data.avatar[item],
                });
          });
          console.log("new", newPictures);
          console.log("former", formerPictures);
        }*/
        break;

      case DELETE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = "DELETE";
        break;
      default:
        console.log("DataProvider_Request_default");
        throw new Error(`Unsupported fetch action type ${type}`);
    }
    console.log({ Request: url });
    return { url, options };
  };

  /**
   * @param {Object} response HTTP response from fetch()
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The data request params, depending on the type
   * @returns {Object} Data response
   */
  const convertHTTPResponse = (response, type, resource, params) => {
    console.log("DataProvider_Response");
    const { headers, json } = response;
    const json_v = JSON.parse(
      JSON.stringify(json).split('"_id":').join('"id":')
    );

    switch (type) {
      case GET_LIST:
        console.log("DataProvider_Response_GET_LIST");
        console.log(json_v);
        return {
          data: json_v,
          total: parseInt(headers.get("Content-Range").split("/").pop(), 10),
        };
      case GET_MANY_REFERENCE:
        if (!headers.has("Content-Range")) {
          throw new Error(
            "The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?"
          );
        }
        return {
          data: json_v,
          total: parseInt(headers.get("Content-Range").split("/").pop(), 10),
        };
      case UPDATE:
        console.log("DataProvider_Response_UPDATE");
        return { data: json_v };
      case CREATE:
        console.log("DataProvider_Response_CREATE");
        return { data: json_v };
      case DELETE_MANY:
        return { data: json_v || [] };
      default:
        console.log("DataProvider_Response_default");
        return { data: json_v };
    }
  };

  /**
   * @param {string} type Request type, e.g GET_LIST
   * @param {string} resource Resource name, e.g. "posts"
   * @param {Object} payload Request parameters. Depends on the request type
   * @returns {Promise} the Promise for a data response
   */
  return (type, resource, params) => {
    // simple-rest doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
    if (type === UPDATE_MANY) {
      return Promise.all(
        params.ids.map((id) =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: "PUT",
            body: JSON.stringify(params.data),
          })
        )
      ).then((responses) => ({
        data: responses.map((response) => response.json),
      }));
    }
    // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
    if (type === DELETE_MANY) {
      return Promise.all(
        params.ids.map((id) =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: "DELETE",
          })
        )
      ).then((responses) => ({
        data: responses.map((response) => response.json),
      }));
    }

    // const { url, options } = convertDataRequestToHTTP(type, resource, params);
    // return httpClient(url, options).then((response) => {
    //   console.log(response);
    //   return convertHTTPResponse(response, type, resource, params);
    // });
    return new Promise((resolve) => {
      convertDataRequestToHTTP(type, resource, params)
        .then(({ url, options }) =>
          httpClient(url, options).then((response) => {
            console.log("convertDataRequestToHTTP return: ", response);
            return resolve(
              convertHTTPResponse(response, type, resource, params)
            );
          })
        )
        .catch((error) =>
          console.log("convertDataRequestToHTTP error: ", error)
        );
    });
  };
};
