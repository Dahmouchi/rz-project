
type PhotoBlockProps = {
  image: string;
  link: string;
  height: string;
  heading: string;
};

const PhotoBlock = ({ image, height }: PhotoBlockProps) => {
  return (
    <>
      <div>
        <div className={`group relative cursor-pointer`}>
          <img
            className="transition rounded-3xl ease-in-out delay-150 duration-700 group-hover:opacity-80 group-hover:-translate-y-1 group-hover:scale-110"
            src={image}
            width="100%"
            height={`${height}%`}
            alt="Photo"
          />
        </div>
      </div>
    </>
  );
};
export default PhotoBlock;
