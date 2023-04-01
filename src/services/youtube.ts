const YOUTUBE_API_PATH = `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet&maxResults=50`;

export const getYoutubePlaylist = async (playlistId: string) => {
  const res = await fetch(`${YOUTUBE_API_PATH}&playlistId=${playlistId}`);
  const json = await res.json();

  return json;
};
