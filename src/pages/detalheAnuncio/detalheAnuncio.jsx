import { useParams } from "react-router-dom";

export default function DetalheAnuncioPage() {
  const { slugId } = useParams();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Detalhes do Anúncio : {slugId}</h1>
    </div>
  );
}
