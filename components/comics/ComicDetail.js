import Image from 'next/image';


const ComicDetail = (props) => {
  const src = `${props.image ?? 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada'}/portrait_incredible.jpg`;

  return (
    <div className="text-center">
      <div className="m-16">
        <Image loader={() => src} src={src} width={500} height={500} unoptimized="true" alt="comic" />
      </div>

      <h1 className="font-bold text-xl">{props.title}</h1>
      <p>
        <span className="font-bold">Edition:</span> {props.edition}
      </p>
      <p>
        <span className="font-bold">Creator:</span> {props.creator}
      </p>
      <p>
        <span className="font-bold">Price:</span> {props.price}
      </p>
    </div>
  );
};

export default ComicDetail;
