import { useForm } from "react-hook-form"

const Cliente = () => {

  //destruct-acessa as propriedades de outro componente ou lugar
  //Hook- useForm - facilita a criação e validação
  const{register,setValue,setFocus}=useForm();

  //Criando a função buscaCep
  function buscarCep(e){
    //metodo fetch é pra buscar uma url
    const cep =e.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>res.json())//converte os dados para json 
    .then((dados)=>{ // guarda os dados convertidos
      setValue("rua",dados.logradouro);
      setValue("bairro",dados.bairro);
      setValue("localidade",dados.localidade)
      setValue("estado",dados.estados)
      setFocus("numero")



    })
  }

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <form className="bg-white p-8 rounded-2xl max-w-md">
        <fieldset className="border border-gray-500 p-4 rounded-md">
          <legend className="text-5xl mb-4 text-gray-700">Dados Cliente</legend>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Cep:</label>
            <input
              type='text'
              //{...} spred - pega os valores antigos e junta com valores novos
                className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              {...register("cep")}
              onBlur={buscarCep}
            />
          </div>
          <div className="mb-4" >
            <label className="block text-gray-700 font-bold mb-2">Bairro:</label>
            <input
              type='text'
              {...register("bairro")}
                className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Rua:</label>
            <input
              type='text'
              {...register("rua")}
                className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Número:</label>
            <input
              type='text'
              {...register("numero")}
                className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Cidade:</label>
            <input
              type='text'
              //{...} spred - pega os valores antigos e junta com valores novos
              {...register("localidade")}
                className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Estado:</label>
            <input
              type='text'
              //{...} spred - pega os valores antigos e junta com valores novos
              {...register("estado")}
                className='w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              
            />
          </div>

        </fieldset>
        
      </form>

    </section>
  )
}

export default Cliente