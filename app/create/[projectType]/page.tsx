'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceForm } from '@/components/ServiceForm';

export default function ProjectTypePage() {
  const params = useParams();
  const router = useRouter();
  const [projectType, setProjectType] = useState<string | null>(null);

  useEffect(() => {
    if (params.projectType && typeof params.projectType === 'string') {
      setProjectType(params.projectType);
    } else {
      setProjectType(null);
    }
  }, [params.projectType]);

  const handleSubmit = (data: any) => {
    console.log('Form data submitted:', data);
    // Qui puoi gestire il salvataggio dei dati e la navigazione alla pagina successiva
    router.push('/create/next-step');
  };

  const handleBack = () => {
    router.back();
  };

  if (!projectType) {
    return (
      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Tipo di Progetto non Valido</h2>
          <p>Seleziona un tipo di progetto valido.</p>
          <Button className="mt-4" onClick={() => router.push('/create')}>
            Torna alla Selezione del Progetto
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Configurazione del Progetto</h2>
          <ServiceForm
            projectType={projectType}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        </CardContent>
      </Card>
    </div>
  );
}