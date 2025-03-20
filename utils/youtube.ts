export {}; // This marks the file as a module
import axios from 'axios';

// Define the structure of the YouTube API response
interface YouTubeVideo {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}

// Function to fetch playlist data
export const fetchYouTubePlaylist = async (): Promise<YouTubeVideo[]> => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const playlistId = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID;

  if (!apiKey || !playlistId) {
    throw new Error('YouTube API key or playlist ID is missing.');
  }

  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems`,
    {
      params: {
        part: 'snippet',
        playlistId: playlistId,
        maxResults: 50, // Adjust as needed
        key: apiKey,
      },
    }
  );

  return response.data.items;
};

// Function to generate HTML divs from the playlist data
export const generateVideoDivs = (videos: YouTubeVideo[]): string => {
  return videos
    .map((video) => {
      const videoId = video.snippet.resourceId.videoId;
      const thumbnailUrl = video.snippet.thumbnails.default.url;
      const title = video.snippet.title;

      return `
        <div class="video-container">
          <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
            <img src="${thumbnailUrl}" alt="${title}">
            <p class="video-title">${title}</p>
          </a>
        </div>
      `;
    })
    .join('');
};