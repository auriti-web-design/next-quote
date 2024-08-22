import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Benvenuto nel Calcolatore di Preventivi</h1>
      <p className="text-lg mb-6">Crea un preventivo dettagliato per il tuo prossimo progetto web in pochi semplici passi.</p>
      <Link href="/create">
        <Button className="px-4 py-2 text-white  rounded-md">
          Inizia a Creare il Preventivo
        </Button>
      </Link>
    </main>
  );
}
