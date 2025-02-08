"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="mt-6 px-4 md:px-8 lg:px-12">
      <h3 className="text-primary text-3xl md:text-4xl font-bold mb-7 text-center md:text-left">
        Newsletter
      </h3>

      <div className="flex flex-col-reverse md:grid md:grid-cols-5 gap-6 items-center">
        <Card className="md:col-span-3 bg-gray-900 px-4 py-6 md:py-4 border border-gray-600 w-full max-w-lg md:max-w-none">
          <CardHeader className="text-gray-200 font-semibold text-xl md:text-2xl mb-4 md:mb-6">
            Conoce nuestras noticias y novedades
          </CardHeader>
          <CardBody>
            <Input
              label="Email"
              labelPlacement="outside"
              size="lg"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              variant="faded"
              color="primary"
            />
          </CardBody>
          <CardFooter className="w-full">
            <Button
              className="text-white w-full font-medium text-lg bg-secondary border border-gray-500"
              color="secondary"
              size="lg"
            >
              Suscribirme
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-2 flex justify-center md:justify-start">
          <div className="relative w-[250px] h-[200px] md:w-[350px] md:h-[260px] lg:w-[420px] lg:h-[310px]">
            <Image
              src="images/mascota.png"
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
