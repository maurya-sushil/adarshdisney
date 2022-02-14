import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Brands() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      paritialVisibilityGutter: 30
    }
  };
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <Carousel
        containerClass="carousel-container"
        ssr
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1000}
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
      >
        <div className="brand group">
          <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/national-geographic.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="brand group">
          <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/national-geographic.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="brand group">
          <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/national-geographic.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="brand group">
          <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/national-geographic.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </div>
      </Carousel>
    </section>
  );
}

export default Brands;