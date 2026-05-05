import { Link } from "react-router-dom";

export default function MeusAnuncios({ produtos }) {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meus Anuncios
          </h3>
          <p className="text-gray-600 mt-3">
            Aqui você encontra os anúncios publicados por você.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {produtos.map((item, idx) => (
              <li className="gap-8 sm:flex">
                <div className="w-full h-60">
                  <img
                    src={item.photo}
                    className="w-full h-full object-contain object-center shadow-md rounded-xl"
                    alt={item.title}
                  />
                </div>
                <div className="mt-4 sm:mt-0 flex gap-1 flex-col">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-indigo-600">
                    {item.createdAt} - {item.local}
                  </p>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <p className="text-2xl font-bold text-violet-600">
                      R$ {item.price}
                    </p>
                  </div>

                  <Link
                    key={idx}
                    to={`/editar-produto/${item.slug}-${item.id}`}
                  >
                    <p className="px-3 py-1.5 text-sm text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 block mx-auto text-center">
                      Editar Produto
                    </p>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
