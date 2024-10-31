import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import VideoSection from "../pleno/PlayVideo";
import { FastForwardIcon, PauseIcon, PlayIcon, RewindIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getPlenoVideo } from "@/libs/actividades/actions";

interface IVideo {
  date: Date;
  idsYoutube: string[];
}

interface VideosTopHandles {
  handlePause: () => void;
}

const VideosTop = forwardRef<VideosTopHandles>(
  (_, ref: ForwardedRef<VideosTopHandles>) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [videosPleno, setVideosPleno] = useState<IVideo[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef<any>(null);

    // Flattened videos list with IDs and dates
    const flattenedVideos = useMemo(
      () =>
        videosPleno.flatMap((video) =>
          video.idsYoutube.map((idYoutube) => ({ idYoutube, date: video.date }))
        ),
      [videosPleno]
    );

    // Set initial video on flattenedVideos update
    useEffect(() => {
      if (flattenedVideos.length > 0) {
        setCurrentIndex(0);
        setIsPlaying(false); // Start in paused state
      }
    }, [flattenedVideos]);

    // Fetch videos on component mount
    useEffect(() => {
      const fetchVideos = async () => {
        const response = await getPlenoVideo();
        setVideosPleno(JSON.parse(response));
      };
      fetchVideos();
    }, []);

    // Current video details
    const currentVideo = flattenedVideos[currentIndex] || {
      idYoutube: "",
      date: new Date(),
    };

    // Video controls
    const onReady = (event: any) => {
      playerRef.current = event.target;
    };

    const handlePlay = () => {
      setIsPlaying(true);
      if (playerRef.current) {
        console.log("firstasss");

        playerRef.current.pauseVideo();
      }
    };

    const handlePause = () => {
      setIsPlaying(false);
      playerRef.current?.pauseVideo();
    };

    const changeVideo = (newIndex: number) => {
      setIsPlaying(false);
      setCurrentIndex(newIndex);
    };

    const handleNext = () => {
      changeVideo((currentIndex + 1) % flattenedVideos.length);
    };

    const handlePrevious = () => {
      changeVideo(
        (currentIndex - 1 + flattenedVideos.length) % flattenedVideos.length
      );
    };

    useImperativeHandle(ref, () => ({
      handlePause,
    }));

    return (
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto h-[600px] sm:h-[500px] items-center justify-center">
        <div className="p-2 max-w-6xl w-full md:w-[700px] items-center justify-center">
          <VideoSection id={currentVideo.idYoutube} onReady={onReady} />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 bg-background lg:ml-6 bg-white bg-opacity-90 p-5 rounded-md shadow-lg">
          <div className="flex flex-col items-center gap-3 pt-4">
            <h2 className="text-3xl font-bold">Actividad legislativa</h2>
            <p className="text-muted-foreground text-lg">
              {format(currentVideo.date, "PPPP", { locale: es })}
            </p>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <Button
              onClick={handlePrevious}
              variant="ghost"
              size="icon"
              className="w-12 h-12 hover:bg-muted"
            >
              <RewindIcon className="w-6 h-6 text-foreground" />
            </Button>
            <Button
              onClick={handlePlay}
              variant="ghost"
              size="icon"
              className={`${
                isPlaying ? "bg-muted" : ""
              } w-12 h-12 hover:bg-muted`}
            >
              <PlayIcon className="w-6 h-6 text-foreground" />
            </Button>
            <Button
              onClick={handlePause}
              variant="ghost"
              size="icon"
              className={`${
                !isPlaying ? "bg-muted" : ""
              } w-12 h-12 hover:bg-muted`}
            >
              <PauseIcon className="w-6 h-6 text-foreground" />
            </Button>
            <Button
              onClick={handleNext}
              variant="ghost"
              size="icon"
              className="w-12 h-12 hover:bg-muted"
            >
              <FastForwardIcon className="w-6 h-6 text-foreground" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

VideosTop.displayName = "VideosTop";

export default VideosTop;
