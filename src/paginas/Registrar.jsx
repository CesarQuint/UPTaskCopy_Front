import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import axios from 'axios'

function Registrar() {
  const[nombre,setNombre]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[repetirPassword,setRepetirPassword]=useState('')
  const[alerta,setAlerta]=useState({})

  const handleSubmit=async(e)=>{
    e.preventDefault()

    if([nombre,email,password,repetirPassword].includes('')){
      setAlerta({
        msg:'Todos los campos son obligatorios',
        error:true
      })
      return
    }
    if(password !== repetirPassword){
      setAlerta({
        msg:'Los password no son Iguales',
        error:true
      })
      return
    }
    if(password.length <6){
      setAlerta({
        msg:'El password es muy corto,agrega minimo 6 caracteres',
        error:true
      })
      return
    }

    setAlerta({})
    //Agregando Usuario a la base de Datos
    try {
      const {data}=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`,{
        nombre,email,password
      })
      setAlerta({
        msg:data.msg,
        error:false
      })
      setEmail('')
      setNombre('')
      setPassword('')
      setRepetirPassword('')
    } catch (error) {
      setAlerta({
        msg:error.response.data.msg,
        error:true
      })
    }
  }

  const {msg}=alerta

  return (

    <>
    <h1 className='text-sky-600 font-black text-6xl capitalize'>Crea tu Cuenta y administra tus {''} 
      <span className='text-slate-700'>proyectos</span>
    </h1>
    {msg && <Alerta alerta={alerta}/>}
    <form 
    onSubmit={handleSubmit}
    className='my-10 bg-white shadow rounded-lg p-10 '>
    <div className='my-5'>
        <label htmlFor="nombre" className='uppercase text-gray-600 block text-xl font-bold'>Nombre</label>
        <input type="text"
        id="nombre"
              placeholder='Tu Nombre'
              className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              value={nombre}
              onChange={e=>setNombre(e.target.value)}
        />
      </div>
      <div className='my-5'>
        <label htmlFor="email" className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
        <input type="email"
        id="email"
              placeholder='Email de Registro'
              className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              value={email}
              onChange={e=>setEmail(e.target.value)}
        />
      </div>
      <div className='my-5'>
        <label htmlFor="password" className='uppercase text-gray-600 block text-xl font-bold'>Password</label>
        <input type="password"
        id="password"
              placeholder='Ingresa tu Password'
              className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              value={password}
              onChange={e=>setPassword(e.target.value)}
        />
      </div>
      <div className='my-5'>
        <label htmlFor="password2" className='uppercase text-gray-600 block text-xl font-bold'>Comprueva tu Password</label>
        <input type="password"
        id="password2"
              placeholder='Confirma tu Password'
              className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              value={repetirPassword}
              onChange={e=>setRepetirPassword(e.target.value)}
        />
      </div>
      <input type="submit" value="Crea tu Cuenta" className='bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5' />
    </form>
    <nav>
      <Link className="block text-center my-5 text-slate-500 uppercase text-sm"
      to="/"
      >¿Ya tienes una cuenta? Inicia Sesion
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

export default Registrar