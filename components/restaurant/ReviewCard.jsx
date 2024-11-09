import Image from "next/image";

const ReviewCard = ({ text, avatar, name, restaurant }) => {
  return (
    <div className="p-5 bg-white rounded-lg min-w-64 w-1/3">
      <article className="py-4 font-extralight h-3/4">{text}</article>
      <hr />
      <div className="py-4 flex gap-3 flex-wrap">
        <Image
          src={avatar}
          width={50}
          height={50}
          alt="profile-image"
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg">{name}</h2>
          <p className="text-grey-medium font-light">Owner - {restaurant}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
