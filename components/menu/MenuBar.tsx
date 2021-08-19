import { useRouter } from "next/router";
import { SideBarProps } from "../../interfaces/SideBarProps";

export const MenuBar = ({ active }: SideBarProps) => {
   const router = useRouter();

  return (
    <div className='w-full bg-gray-900  flex flex-row max-h-full h-fit py-4 px-2'>
      <div className='flex flex-row items-center w-full'>
        <button type='button' className='hover:opacity-50' onClick={active}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='w-7 fill-current text-white'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
            />
          </svg>
        </button>
        {router.pathname == "/analytics" ? (
          <div className='block md:hidden w-full text-center'>
            <h1 className='uppercase font-bold px-2 text-white'>
              <span className='bg-white w-3 h-3 inline-block rounded-full mr-1'></span>
              Analysis
            </h1>
          </div>
        ) : (
          <div className='block md:hidden w-full text-center'>
            <h1 className='uppercase font-bold px-2 text-white'>
              <span className='bg-white w-3 h-3 inline-block rounded-full mr-1'></span>
              Workspace
            </h1>
          </div>
        )}
        <form className='md:w-full flex justify-center  mx-3 '>
          <div className='relative w-full flex flex-row items-center justify-end md:justify-start'>
            <button
              className='appearance-none focus:outline-none absolute bg-linq-green p-3 rounded-b-full rounded-r-full z-10 hover:opacity-50'
              type='submit'
            >
              <i>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 fill-current text-white'
                  viewBox='0 0 16 16'
                >
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
              </i>
            </button>
            <input
              className='hidden w-full text-xs appearance-none md:block focus:ring-0 rounded-full bg-gray-700 md:pl-10 p-3 md:p-4 opacity-60'
              type='search'
              name='search'
              id=''
              placeholder='Search securities, transactions, info or help'
            />
          </div>
        </form>
      </div>

      <div className='hidden md:flex flex-row items-center w-full divide-x divide-white justify-end '>
        <div className='flex flex-row space-x-6 px-4'>
          <i className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 fill-current text-white'
              viewBox='0 0 16 16'
            >
              <path d='M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z' />
            </svg>
          </i>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 fill-current text-white'
              viewBox='0 0 16 16'
            >
              <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z' />
            </svg>
          </i>
        </div>
        <div className='flex flex-row text-white items-center space-x-3 px-6'>
          <p className='flex flex-row flex-nowrap items-center'>
            Alejandro
            <span className='ml-2'>
              <i>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-chevron-compact-down'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z'
                  />
                </svg>
              </i>
            </span>
          </p>

          <img
            className='mx-auto  rounded-full'
            src='/person.jpeg'
            alt='Picture of Profile'
            width={39}
            height={39}
          />
        </div>
      </div>
    </div>
  );
};
