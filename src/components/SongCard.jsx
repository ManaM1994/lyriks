const SongCard = ({ src }) => {
  return (
    <>
      <div className="text-white">SongCard
        <img src={src} alt="Song" />
      </div>
    </>
  );
}

export default SongCard;
