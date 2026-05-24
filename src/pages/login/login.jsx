import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  }

  function handleSubmitLogin(event) {
    event.preventDefault();

    console.log(formLogin);
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img
            src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Logue com a sua conta
            </h3>
            <p className="">
              Não possui uma conta?{" "}
              <Link
                to={"/cadastro"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmitLogin} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Senha</label>
            <input
              type="password"
              name="password"
              onChange={handleOnChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Entrar
          </button>
          <div className="text-center">
            <a href="javascript:void(0)" className="hover:text-indigo-600">
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
