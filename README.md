# MediaSource Video Appending Samples [![Github Repo](https://img.shields.io/badge/src-Github%20Repo-blue)](https://github.com/joshuatz/mediasource-append-examples)
> Quickly thrown together samples of some different ways you can use append (`appendBuffer`) with MediaSource SourceBuffers.

Make sure to see [this blog post](https://joshuatz.com/posts/2020/appending-videos-in-javascript-with-mediasource-buffers/) for details. This samples are mostly for illustrative / educational purposes, and more robust approaches should consider things like buffer size, garbage collection, adaptive quality, etc. For example, in place of my multi-file examples, you would normally use something like HLS or DASH.

You might also want to consider using an existing `<video>` loading library, like [video.js](https://github.com/videojs/video.js) or [Shaka Player](https://github.com/google/shaka-player).

Again, for a more in-depth discussion, make sure to check out my writeup: [joshuatz.com/posts/2020/appending-videos-in-javascript-with-mediasource-buffers/](https://joshuatz.com/posts/2020/appending-videos-in-javascript-with-mediasource-buffers/)

## Demo Files

> ⚠ Currently, all demo files use a `WEBM` container, with `VP9 + Opus` as the codec. This means that they might not work for you if you are using an older browser, or Safari.

> 🐛 🚨 : WARNING: Currently, the multi-file demos are broken in Firefox (at least in my versions of Firefox). I'm investigating, but even the ["more official" examples](https://simpl.info/mse/) seem to be affected by some sort of bug with multiple appends, and it seems **extremely** picky about what files are used. The standard approach works just fine. (PS: If you work on Firefox DevTools, please add a media-internals tool like Chrome has!)

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