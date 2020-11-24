/**
 * Get the duration of video, via its raw blob
 * @param {Blob} blob
 * @returns {Promise<number>}
 */
const getDuration = (blob) => {
	return new Promise((res) => {
		const tempVidElem = document.createElement('video');
		tempVidElem.onloadedmetadata = () => {
			res(tempVidElem.duration);
			URL.revokeObjectURL(tempVidElem.src);
		};
		tempVidElem.src = URL.createObjectURL(blob);
	});
};

/**
 * Adds (and returns once ready) a SourceBuffer to a MediaSource
 * @param {MediaSource} mediaSource
 * @param {string} mimeStr Example: `video/webm; codecs="vp9,opus"`
 * @param {'sequence' | 'segments'} [mode]
 * @returns {Promise<SourceBuffer>}
 */
const addSourceBufferWhenOpen = (mediaSource, mimeStr, mode = 'segments') => {
	return new Promise((res, rej) => {
		const getSourceBuffer = () => {
			try {
				const sourceBuffer = mediaSource.addSourceBuffer(mimeStr);
				sourceBuffer.mode = mode;
				res(sourceBuffer);
			} catch (e) {
				rej(e);
			}
		};
		if (mediaSource.readyState === 'open') {
			getSourceBuffer();
		} else {
			mediaSource.addEventListener('sourceopen', getSourceBuffer);
		}
	});
};

/**
 * Convert a base64 string into a binary blob
 * @param {string} base64Str
 * @param {string} mimeTypeStr
 */
const b64toBlob = (base64Str, mimeTypeStr) =>
	fetch(`data:${mimeTypeStr};base64,${base64Str}`).then((res) => res.blob());

/**
 * Randomly shuffle array *in-place*
 * @param {any[]} array - Array to shuffle
 */
const shuffleArr = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};
