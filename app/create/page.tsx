'use client'; // Indica che questo file deve essere eseguito come Client Component

import { useState } from 'react'; // Importa useState per gestire lo stato locale
import Link from 'next/link'; // Importa Link di Next.js per la navigazione
import { Button } from '@/components/ui/button'; // Importa il componente Button personalizzato

export default function CreateProject() {
  // Stato locale per memorizzare il tipo di progetto selezionato
  const [projectType, setProjectType] = useState<string | null>(null);

  // Funzione per gestire la selezione del tipo di progetto
  const handleProjectTypeSelection = (type: string) => {
    setProjectType(type);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Titolo della pagina */}
      <h2 className="text-3xl font-bold mb-4">Seleziona il Tipo di Progetto</h2>

      {/* Contenitore per i pulsanti di selezione del tipo di progetto */}
      <div className="space-y-4 space-x-4">
        {/* Ogni pulsante rappresenta un tipo di progetto.
            Quando viene cliccato, il tipo di progetto selezionato viene aggiornato nello stato locale. */}
        <Button
          variant={projectType === 'website' ? 'default' : 'secondary'} // Cambia stile in base alla selezione
          onClick={() => handleProjectTypeSelection('website')}
        >
          Sito Web
        </Button>
        <Button
          variant={projectType === 'webapp' ? 'default' : 'secondary'}
          onClick={() => handleProjectTypeSelection('webapp')}
        >
          Web App
        </Button>
        <Button
          variant={projectType === 'pwa' ? 'default' : 'secondary'}
          onClick={() => handleProjectTypeSelection('pwa')}
        >
          PWA
        </Button>
        <Button
          variant={projectType === 'ecommerce' ? 'default' : 'secondary'}
          onClick={() => handleProjectTypeSelection('ecommerce')}
        >
          E-commerce
        </Button>
      </div>

      {/* Se un tipo di progetto è stato selezionato, mostra il pulsante per proseguire */}
      {projectType && (
        <div className="mt-8">
          {/* Il link porta alla pagina successiva, dinamicamente determinata dal tipo di progetto scelto */}
          <Link href={`/create/${projectType}`}>
            <Button className="w-full">Prosegui</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
