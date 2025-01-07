import { useForm } from "react-hook-form";
import useSearchMovie from "../../hooks/useSearchMovie";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import useSearchStore from "../../store/useSearchStore";

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("");
  const [pending, error, data] = useSearchMovie(query);
  const setSearchResults = useSearchStore((state) => state.setSearchResults);

  const onSubmit = (formData) => {
    setQuery(formData.search);
  };

  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, [data, setSearchResults]);

  return (
    <div className="bg-slate-50 rounded-full flex place-items-center mt-3 border-2 focus:border-2 focus:outline-double h-10 shadow-slate-700">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-none bg-transparent focus:outline-none focus:border-none flex items-center justify-center h-10 px-2 py-2"
      >
        <input
          {...register("search")}
          type="search"
          name="search"
          id="search"
          className="bg-transparent focus:outline-none text-slate-700 px-2 py-1"
        />
        <button
          type="submit"
          className="px-10 py-10 border-b-gray-300 hover:text-cyan-900"
        >
          <FeatherIcon icon="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
