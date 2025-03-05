const RecipeVideo = ({ youtubeUrl }: { youtubeUrl: string | null }) => {
  if (!youtubeUrl) return null;

  return (
    <div className="rounded-[10px] bg-primary p-2.5 text-white">
      <h2 className="text-lg font-bold mb-3">Recipe Video</h2>
      <div className="relative w-full aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={youtubeUrl}
          title="YouTube Recipe Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default RecipeVideo;
