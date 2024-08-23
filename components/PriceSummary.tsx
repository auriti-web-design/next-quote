import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface PriceSummaryProps {
  estimatedPrice: number;
}

export const PriceSummary: React.FC<PriceSummaryProps> = ({
  estimatedPrice,
}) => {
  return (
    <Card className="mt-4">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">Stima del Preventivo</h3>
        <p className="text-2xl font-bold">€{estimatedPrice.toLocaleString()}</p>
        <p className="text-sm text-gray-500 mt-2">
          *Questa è una stima iniziale. Il prezzo finale potrebbe variare in
          base alle specifiche del progetto.
        </p>
      </CardContent>
    </Card>
  );
};
