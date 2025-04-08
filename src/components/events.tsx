import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

export const Events = () => {
  return (
    <div className="mt-6 px-4 md:px-8 lg:px-12 w-full h-auto py-4">
      <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-primary dark:text-gray-200 mt-[8.5%] mb-6 md:mb-8">
        Posts
      </h3>
      <BentoGrid className="w-full mx-auto md:auto-rows-[22rem] gap-6 pb-[2%]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={`${item.className} w-full h-full`}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const ImageHeader1 = () => {
  return (
    <div className="flex justify-between">
      <Image
        src="https://www.instagram.com/p/DC-CDmFyz3r/media/?size=m"
        alt="Imagen 1"
        width={220}
        height={180}
        className="rounded-md"
      />
      <Image
        src="https://instagram.flov1-1.fna.fbcdn.net/v/t51.29350-15/468982931_596596936068727_7726508655207862705_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flov1-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2AH1BrSLmP-D75iqcHhTbbWkcwKzSEmrdXoqyhGgdby_WkVNwHCx9s53pXFEyf8DJZ_vEKxHNKEZeHxArHVVHoGd&_nc_ohc=dwqa-qSdx9kQ7kNvgG_ZUaw&_nc_gid=250d05b567724a1eba8627420d9972b3&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUxMjI1Mzc5MDgxOTA4MDkyNA%3D%3D.3-ccb7-5&oh=00_AYC-2PRcdj4slv6oQFDyuDd1VSOCH92ot3wBPdTtvTjKgA&oe=676A4931&_nc_sid=7a9f4b"
        alt="Imagen 2"
        width={220}
        height={100}
        className="rounded-md"
      />
      <Image
        src="https://instagram.flov1-1.fna.fbcdn.net/v/t51.29350-15/468966540_558702780400171_5676879514449698253_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flov1-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2AH1BrSLmP-D75iqcHhTbbWkcwKzSEmrdXoqyhGgdby_WkVNwHCx9s53pXFEyf8DJZ_vEKxHNKEZeHxArHVVHoGd&_nc_ohc=NYPd2oulNOQQ7kNvgHC3dRu&_nc_gid=250d05b567724a1eba8627420d9972b3&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUxMjI1Mzc5MDgxMDcyNjE2OQ%3D%3D.3-ccb7-5&oh=00_AYAH5Yp0ASnNLtNIDVEu6tWbXRx5tQMVfIpJNhkndpHHPg&oe=676A3A0D&_nc_sid=7a9f4b"
        alt="Imagen 3"
        width={220}
        height={100}
        className="rounded-md"
      />
    </div>
  );
};

const ImageHeader2 = () => {
  return (
    <Image
      src="https://instagram.flov1-1.fna.fbcdn.net/v/t51.29350-15/461470667_2857418791083028_5546484555999299759_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwMjQuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flov1-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2AH1BrSLmP-D75iqcHhTbbWkcwKzSEmrdXoqyhGgdby_WkVNwHCx9s53pXFEyf8DJZ_vEKxHNKEZeHxArHVVHoGd&_nc_ohc=z78K1fU9DkcQ7kNvgFgg51I&_nc_gid=250d05b567724a1eba8627420d9972b3&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ2NjY5ODg0MDQ5OTM3NzIwNg%3D%3D.3-ccb7-5&oh=00_AYDbwyczVjKsFNAswvdOOooh3GKXKp0PVzVXsdYJEIyTcA&oe=676A1D10&_nc_sid=7a9f4b"
      alt="Imagen 1"
      width={305}
      height={180}
      className="rounded-md self-center"
    />
  );
};

const ImageHeader3 = () => {
  return (
    <Image
      src="https://instagram.flov1-1.fna.fbcdn.net/v/t51.29350-15/433321866_382952491206516_6372625322660253329_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDc5My5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.flov1-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2AE-tlxsnghF47c8jvKJuIVtr63ZWOdx0wgrvALn8B1SoiI7mRMkDFFc_RQGOZaPtkbJVR7imnAUCvoUmnqEIiIo&_nc_ohc=9XOLrN4vnawQ7kNvgEi2Gl8&_nc_gid=8525cbc14d984956b3524a6b92120ad9&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzMyNTMyNjAxNDIxNTM2MjI1NQ%3D%3D.3-ccb7-5&oh=00_AYA1j6-NOQ1dCc4lBkf70EjNaqRTbP4O0V5xQizVhux0eg&oe=676A50D7&_nc_sid=7a9f4b"
      alt="Imagen 1"
      width={295}
      height={180}
      className="rounded-md self-center"
    />
  );
};

const ImageHeader4 = () => {
  return (
    <div className="flex justify-between">
      <Image
        src="https://instagram.flov1-1.fna.fbcdn.net/v/t51.29350-15/462982370_918631580111867_1502309803631753088_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.flov1-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2AHauyELRnqAiWVcopLBJbkZ1FGNlo0mT9Iu1TxXnJ0wrdgyTVe23IwKnvKoyyRUCzUCAnHqvLf490pytjSRAz3i&_nc_ohc=SYUMb2PmM0gQ7kNvgFDFzfF&_nc_gid=aa36223e6e0d48ceab7672a2e7b33f0c&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzQ3Nzc1NTMwNDk5OTYzNzU1Mw%3D%3D.3-ccb7-5&oh=00_AYBvAXVvHX5H3RoHxC9zXIObyP07EG4QvQWYJag64jqS7w&oe=676A2C1D&_nc_sid=fc8dfb"
        alt="Imagen 1"
        width={355}
        height={120}
        className="rounded-md"
      />
      <Image
        src="https://instagram.flov1-1.fna.fbcdn.net/v/t51.29350-15/463007762_528320000131342_8040408987505310513_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.flov1-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AHauyELRnqAiWVcopLBJbkZ1FGNlo0mT9Iu1TxXnJ0wrdgyTVe23IwKnvKoyyRUCzUCAnHqvLf490pytjSRAz3i&_nc_ohc=B0HPnQ5zRWQQ7kNvgFdLzZr&_nc_gid=aa36223e6e0d48ceab7672a2e7b33f0c&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzQ3Nzc1NTMwNTA0MTU3NTE4MQ%3D%3D.3-ccb7-5&oh=00_AYD-A3JvsCWx-nHilEs8H5fIXb8axpjENEt_sqKFmccu8Q&oe=676A3986&_nc_sid=fc8dfb"
        alt="Imagen 2"
        width={350}
        height={100}
        className="rounded-md"
      />
    </div>
  );
};

const items = [
  {
    title: "CinSoft 4ta edición",
    description:
      "El pasado 30 de septiembre, tuvimos el honor de representar a Guayaba Devs como comunidad en este increíble evento organizado en la Universidad Autónoma del Estado de Hidalgo (UAEH).",
    header: <ImageHeader1 />,
    className: "md:col-span-2",
    link: "https://www.instagram.com/p/DC-CDmFyz3r/?img_index=1",
  },
  {
    title: "Guayaba Day",
    description:
      "El pasado 12 de septiembre en la ESCIHU, reunimos a expertos en programación y desarrollo.",
    header: <ImageHeader2 />,
    className: "md:col-span-1",
    link: "https://www.instagram.com/p/DAcMD2eOW3B/?img_index=3",
  },
  {
    title: "Notion + GitHub Campus Connect",
    description:
      "Presentamos cómo las comunidades pueden usar Notion/GitHub y más novedades de Notion.",
    header: <ImageHeader3 />,
    className: "md:col-span-1",
    link: "https://www.instagram.com/p/C4l7mWsLsEP/?img_index=1",
  },
  {
    title: "Compu-Fest[0]",
    description:
      "Para nosotros que las personas conecten con aquellas que tienen pasiones parecidas resulta sumamente valioso...",
    header: <ImageHeader4 />,
    className: "md:col-span-2",
    link: "https://www.instagram.com/p/DBDJYa1OC5I/",
  },
];
