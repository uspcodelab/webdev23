interface LeasonsProps {
  data?: {
    items: {
      id: string;
      snippet: {
        thumbnails: any;
        title: string;
        resourceId: {
          videoId: string;
        }
      }
    }[];
  }
}

const Leasons = ({ data }: LeasonsProps) => (
  <ul>
    {data && data.items.map((video) => <li key={video.id}>{video.snippet.title}</li>)}
  </ul>
)

export default Leasons;
