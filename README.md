# MediaSource Video Loading Samples
> Quickly thrown together samples of some different ways you can use MediaSource.

Make sure to see [this blog post](TODO-REPLACEME) for details. This samples are mostly for illustrative / educational purposes, and more robust approaches should consider things like buffer size, garbage collection, adaptive quality, etc. For example, in place of my multi-file examples, you would normally use something like HLS or DASH.

You might also want to consider using an existing `<video>` loading library, like [video.js](https://github.com/videojs/video.js) or [Shaka Player](https://github.com/google/shaka-player).

Again, for a more in-depth discussion, make sure to check out my writeup: [@TODO-REPLACEME](@TODO-REPLACEME)

## Demo Files

- [Standard](./standard) (one file, load via fetch + appendBuffer)
	- This one has the most explanatory code and comments
- [Base64](./base64) (same as standard, but loads video from base64 string)
- [multi-file](./multi-file)
	- [segments](./multi-file/segments/) (mode = `segments`) (requires manual offsetting)
	- [sequence](./multi-file/sequence/) (mode = `sequence`) (auto-offsetting, might be sunset by Chrome)