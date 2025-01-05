import { useForm } from "react-hook-form"
import FeatherIcon from "feather-icons-react";

const SearchBar = () => {

  const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log (data);
  
  return (
    <div className="bg-slate-50 w-[100%] rounded-full flex place-items-center mt-3 mx-4
    py-2 px-2 border-none focus:border-none focus:outline-none h-10 shadow-slate-700">
    <form onSubmit={handleSubmit(onSubmit)} className='border-none bg-transparent rounded-full items-center justify-center flex w-[100%]'>
      <input
      {...register("search")}
      type="search" name="search" id="search" 
      className=""/>
     
      <button type="submit" className="px-10 py-20
      border-b-gray-300 hover:text-cyan-900">
      <FeatherIcon icon="search" />
      </button>
    </form>
    </div>
  );
};

export default SearchBar;

