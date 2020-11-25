# MediaSource Video Appending Samples
[![Github Repo](https://img.shields.io/badge/src-Github%20Repo-blue)](https://github.com/joshuatz/mediasource-append-examples) [![Netlify Status](https://img.shields.io/badge/dynamic/json?color=blue&label=Last%20Commit%20SHA&query=object.sha&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fjoshuatz%2Fmediasource-append-examples%2Fgit%2Frefs%2Fheads%2Fmain)](https://app.netlify.com/sites/mediasource-append-examples/deploys)
> Quickly thrown together samples of some different ways you can use append (`appendBuffer`) with MediaSource SourceBuffers.

Make sure to see [this blog post](https://joshuatz.com/posts/2020/appending-videos-in-javascript-with-mediasource-buffers/) for details. This samples are mostly for illustrative / educational purposes, and more robust approaches should consider things like buffer size, garbage collection, adaptive quality, etc. For example, in place of my multi-file examples, you would normally use something like HLS or DASH.

You might also want to consider using an existing `<video>` loading library, like [video.js](https://github.com/videojs/video.js) or [Shaka Player](https://github.com/google/shaka-player).

Again, for a more in-depth discussion, make sure to check out my writeup: [joshuatz.com/posts/2020/appending-videos-in-javascript-with-mediasource-buffers/](https://joshuatz.com/posts/2020/appending-videos-in-javascript-with-mediasource-buffers/)

## Demo Files

> ⚠ Currently, the multi-file demos use files with a `WEBM` container, with `VP8 + Vorbis` as the codec, and the other demos use `VP9 + Opus`. This means that they might not work for you if you are using an older browser, or Safari.

> 🐛 Firefox has been a little buggy for me with multi-file appends; I swapped over those demos from `VP9/Opus` to `VP8/Vorbis` and it has seemed to improve things. `sequence` mode pretty much only ever works in Chrome, but that is to be expected since that really shouldn't work with multi-track input anyways (and Chrome even warns about this in the log).

- [Standard](./standard) (one file, load via fetch + appendBuffer)
	- This one has the most explanatory code and comments
- [Base64](./base64) (same as standard, but loads video from base64 string)
- [multi-file](./multi-file)
	- [segments](./multi-file/segments/) (mode = `segments`) (requires manual offsetting)
	- [sequence](./multi-file/sequence/) (mode = `sequence`) (auto-offsetting, might be sunset by Chrome)

## Live Demos
If you want to run the demos in your browser, the HTML and JS from this repo is deployed here:

[mediasource-append-examples.netlify.app](https://mediasource-append-examples.netlify.app/)

If you are currently on that site, here are links back to:

- [The Github Repo](https://github.com/joshuatz/mediasource-append-examples)
- [The Writeup](https://joshuatz.com/posts/2020/appending-videos-in-javascript-with-mediasource-buffers/)