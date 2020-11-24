/**
 * @file In comparison with the segments mode, sequence is much easier, since the browser will handle the offsets automatically based on the decoded content. However, you are not really *supposed* to use this with separate files, and Chromium will likely deprecate support at some point (throws warning right now: `Warning: using MSE 'sequence' AppendMode for a SourceBuffer with multiple tracks may cause loss of track synchronization. In some cases, buffered range gaps and playback stalls can occur. It is recommended to instead use 'segments' mode for a multitrack SourceBuffer.`)
 */

(async () => {
	const videoElement = document.querySelector('video');
	const vidClips = [
		'https://raw.githubusercontent.com/chromium/chromium/b4b3566f27d2814fbba1b115639eb7801dd691cf/media/test/data/bear-vp9-opus.webm',
		'https://raw.githubusercontent.com/webmproject/libwebm/11cae244cc06c1295bffa9861c610dcde3b9da18/testing/testdata/bbb_480p_vp9_opus_1second.webm',
		'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.180p.vp9.webm'
	];
	// Shuffle clips. If you reload the page, you will get a random order of videos!
	shuffleArr(vidClips);

	// Get video clips as buffers
	const clipsToAppend = await Promise.all(
		vidClips.map(async (vidUrl) => {
			return (await fetch(vidUrl)).arrayBuffer();
		})
	);

	// Normal setup, with MediaSource, Object URL, and prepped SourceBuffer
	const mediaSource = new MediaSource();
	videoElement.src = URL.createObjectURL(mediaSource);
	// mode = sequence
	const sourceBuffer = await addSourceBufferWhenOpen(mediaSource, `video/webm; codecs="vp9,opus"`, 'sequence');

	/**
	 * Pointer to last vid appended out of source list
	 */
	let clipIndex = 0;
	sourceBuffer.onupdateend = () => {
		if (clipIndex < vidClips.length - 1) {
			clipIndex++;
			sourceBuffer.appendBuffer(clipsToAppend[clipIndex]);
		} else {
			// Done!
			mediaSource.endOfStream();
			videoElement.play();
		}
	};

	// This will kick off event listener chain above
	sourceBuffer.appendBuffer(clipsToAppend[clipIndex]);
})();
