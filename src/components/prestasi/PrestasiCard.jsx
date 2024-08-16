import React from "react";
import { Card, Button } from "@nextui-org/react";

const PrestasiCard = ({ item }) => {
  return (
    <a href={item.linkPrestasi} key={item.namaKompetisi} target="_blank">
      <Card
        isFooterBlurred
        className="w-full h-[300px] transition ease-in-out hover:-translate-y-1 duration-300 text-white"
      >
        <h4>{item.namaKompetisi}</h4>
        <h5>{item.jenisPrestasi}</h5>
        {item.badges.map((badge, index) => (
          <a href={badge.kategoriLink} key={index}>
            <Button color="primary" variant="ghost" radius="full">
              {badge.kategori}
            </Button>
          </a>
        ))}
      </Card>
    </a>
  );
};

export default PrestasiCard;
