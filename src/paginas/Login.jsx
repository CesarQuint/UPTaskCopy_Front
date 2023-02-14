import { Link } from "react-router-dom"

function Login() {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Inisia sesion y administra tus {''} 
        <span className='text-slate-700'>proyectos</span>
      </h1>

      <form className='my-10 bg-white shadow rounded-lg p-10 '>
        <div className='my-5'>
          <label htmlFor="email" className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
          <input type="email"
          id="email"
                placeholder='Email de Registro'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          />
        </div>
        <div className='my-5'>
          <label htmlFor="password" className='uppercase text-gray-600 block text-xl font-bold'>Password</label>
          <input type="password"
          id="password"
                placeholder='Ingresa tu Password'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          />
        </div>
        <input type="submit" value="Iniciar Sesion" className='bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5' />
      </form>
      <nav>
        <Link className="block text-center my-5 text-slate-500 uppercase text-sm"
        to="/registrar"
        >¿No tienes una cuenta? Registrate
        </Link>
        <Link
        className="block text-center my-5 text-slate-500 uppercase text-sm"
        to="/olvide-password"
        >Olvide mi Password
        </Link>
      </nav>
    </>
  )
}

export default Login