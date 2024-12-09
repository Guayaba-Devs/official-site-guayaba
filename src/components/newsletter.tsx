"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="mt-[3.7%]">
      <h3 className="text-primary text-4xl font-bold mb-7">Newsletter</h3>

      <div className="grid grid-cols-5 gap-6">
        <Card className="grid col-span-3 bg-gradient-to-b from-secondary to-primary px-4 py-2 max-h-[270px]">
          <CardHeader className="text-gray-200 font-semibold text-2xl mb-6">
            Conoce nuestras noticias y novedades
          </CardHeader>
          <CardBody>
            <Input
              label="Email"
              labelPlacement="inside"
              size="lg"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              variant="flat"
            />
          </CardBody>
          <CardFooter className="w-full">
            <Button
              className="text-white w-full font-medium text-lg"
              color="secondary"
              size="lg">
              Suscribirme
            </Button>
          </CardFooter>
        </Card>

        <div className="col-span-2 ml-[15%] -mt-6">
          <div className="relative w-[420px] h-[310px]">
            <Image
              src="/mascota.png"
              alt="mascota"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
