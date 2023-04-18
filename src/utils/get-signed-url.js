import { API } from 'aws-amplify';

export const getSignedUrl = async (fileName, fileId, fileType, uploader_identity_id) => {
	let params = {
		orignal_file_name: fileName,
		orignal_file_name_base64: Buffer.from(fileName, 'utf-8').toString('base64'),
		dataId: fileId,
		dataType: fileType,
		uploader_identity_id,
	};
	const apiName = 'signedUrl';
	const path = '/signedUrl';
	const myInit = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		},
		body: {
			params,
		},
	};
	let response = await API.post(apiName, path, myInit);
	let signedUrl = response?.signedUrl;
	console.log('handleOpenPreviewMusic...', { response });
	return signedUrl;
};

export const getSignedCookie = async (fileName, fileId, fileType, uploader_identity_id) => {
	console.log("getSignedCookie...", {fileName, fileId, fileType, uploader_identity_id})
	let params = {
		orignal_file_name: fileName,
		orignal_file_name_base64: Buffer.from(fileName, 'utf-8').toString('base64'),
		dataId: fileId,
		dataType: fileType,
		uploader_identity_id,
	};
	const apiName = 'signedCookie';
	const path = '/signedCookie';
	const myInit = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1"',
		},
		body: {
			params,
		},
	};
	let response = await API.post(apiName, path, myInit);
	let signedCookie = response?.signedCookie;
	console.log('handleOpenPreviewMusic...', { response });
	return signedCookie;
};
