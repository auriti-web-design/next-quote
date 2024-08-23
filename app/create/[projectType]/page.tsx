"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PriceSummary } from "@/components/PriceSummary";
import { usePriceCalculator } from "@/hooks/usePriceCalculator";
import { projectTypes } from "@/data/projectTypes";

export default function CreateProject() {
  const {
    projectType,
    setProjectType,
    projectScope,
    setProjectScope,
    estimatedPrice,
  } = usePriceCalculator();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Crea il Tuo Progetto</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tipo di Progetto</h2>
          <RadioGroup
            value={projectType || ""}
            onValueChange={(value) =>
              setProjectType(value as typeof projectType)
            }
            className="space-y-4"
          >
            {Object.entries(projectTypes).map(
              ([key, { name, description }]) => (
                <Card key={key}>
                  <CardContent className="flex items-center space-x-4 p-4">
                    <RadioGroupItem value={key} id={key} />
                    <Label htmlFor={key} className="flex flex-col">
                      <span className="font-semibold">{name}</span>
                      <span className="text-sm text-gray-500">
                        {description}
                      </span>
                    </Label>
                  </CardContent>
                </Card>
              )
            )}
          </RadioGroup>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Ambito del Progetto
          </h2>
          <RadioGroup
            value={projectScope}
            onValueChange={(value) =>
              setProjectScope(value as "new" | "restyling")
            }
            className="space-y-4"
          >
            <Card>
              <CardContent className="flex items-center space-x-4 p-4">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new">Nuovo Progetto</Label>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 p-4">
                <RadioGroupItem value="restyling" id="restyling" />
                <Label htmlFor="restyling">Restyling</Label>
              </CardContent>
            </Card>
          </RadioGroup>
        </div>

        <div>
          <PriceSummary estimatedPrice={estimatedPrice} />
          {projectType && (
            <div className="mt-8">
              <Link href={`/create/${projectType}`}>
                <Button className="w-full">Prosegui</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
