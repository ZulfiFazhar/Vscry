import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { AiFillMediumCircle } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ item }) => {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] transition ease-in-out hover:-translate-y-1 duration-300"
      key={item.guid}
    >
      <Image
        removeWrapper
        className="z-0 w-full h-full object-cover"
        src={item.imgSrc}
        alt={item.title}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 gap-2">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-md sm:text-xl">
              {item.title}
            </h4>
            <p className="text-white/60 text-tiny">{item.categories}</p>
          </div>
          <div className="flex flex-row items-center gap-2 justify-between">
            <div className="flex flex-row gap-2 items-center">
              <AiFillMediumCircle className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <p className="text-mini sm:text-tiny text-white uppercase font-bold">
                  {item.author}
                </p>
                <p className="text-mini sm:text-tiny text-white/60">
                  {item.pubDate}
                </p>
              </div>
            </div>
            <a href={item.guid} target="_blank" rel="noopener noreferrer">
              <Button radius="full" size="sm" color="primary">
                Read More <FaArrowRightLong />
              </Button>
            </a>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
