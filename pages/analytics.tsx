import { useState } from "react";
import { Graphic } from "../components/workspace/Graphic";
import { InfoSlider } from "../components/workspace/InfoSlider";
import { SideTable } from "../components/workspace/SideTable";



const analytics = () => {
const [isTableOpen, setIsTableOpen] = useState<boolean>(false);
const [isGraphicOpen, setIsGraphicOpen] = useState<boolean>(false);
// console.log(isTableOpen);

const handleTable = () => {
  isTableOpen !== true ? setIsTableOpen(true) : setIsTableOpen(false);
};

const handleGraphic = () => {
  isGraphicOpen !== true ? setIsGraphicOpen(true) : setIsGraphicOpen(false);
};

  return (
    <section className='text-white min-h-screen'>
      <h1 className='hidden md:block uppercase font-bold px-2'>
        <span className='bg-white w-3 h-3 inline-block rounded-full mr-1'></span>
        Analysis
      </h1>

      <div className='flex flex-col md:flex-row my-8 space-x-3 min-h-screen'>
        <div className=' w-full'>
          <div className='w-full bg-gray-900 p-4'>
            <h2 className=''>Gasto Federal</h2>
          </div>

          <div className='w-full bg-gray-700 py-4 md:p-4 min-h-screen'>
            <div className='py-2 md:pt-2 bg-gray-900'>
              <div className='flex flex-row items-center  bg-black md:px-4 py-0.5'>
                <div className='flex-initial flex flex-row items-center divide-x divide-white'>
                  <p className='px-1 md:px-4 '>Gasto de capital</p>
                  <p className='px-4 md:block hidden'>
                    <span className='bg-white w-2 h-2 inline-block rounded-full mr-1'></span>
                    69,144.4
                  </p>
                  <p className='px-4 md:block hidden'>01/02/2021</p>
                  <i className='px-4 md:block hidden'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 fill-current'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fillRule='evenodd'
                        d='M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5z'
                      />
                    </svg>
                  </i>
                </div>

                <div className='flex-1 flex flex-row  ml-4 justify-end md:justify-between'>
                  <div className='space-x-2 md:block hidden'>
                    <button
                      type='button'
                      className='bg-black  active:bg-white p-2 border border-white hover:opacity-50'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 fill-current text-white active:text-black'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z'
                        />
                      </svg>
                    </button>
                    <button
                      type='button'
                      className='bg-black  active:bg-white p-2 border border-white hover:opacity-50'
                      onClick={handleTable}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 fill-current text-white active:text-black'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
                        />
                      </svg>
                    </button>
                  </div>

                  <div className='flex flex-row items-center space-x-2'>
                    <button type='button' className='hover:opacity-50'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 fill-current '
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z'
                        />
                      </svg>
                    </button>
                    <button
                      type='button'
                      className='hover:opacity-50'
                      onClick={handleGraphic}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 fill-current '
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className=' md:p-2 lg:p-4 '>
                <div className='w-full block md:hidden'>
                  <InfoSlider />
                  <div className='space-x-2 block md:hidden text-center my-2'>
                    <button
                      type='button'
                      className='bg-black  active:bg-white p-2 border border-white hover:opacity-50'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 fill-current text-white active:text-black'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z'
                        />
                      </svg>
                    </button>
                    <button
                      type='button'
                      className='bg-black  active:bg-white p-2 border border-white hover:opacity-50'
                      onClick={handleTable}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 fill-current text-white active:text-black'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
                        />
                      </svg>
                    </button>
                  </div>
                  <SideTable hidder={isTableOpen} />
                </div>

                <div className='md:block hidden'>
                  <table
                    className={`table-auto text-left text-xs ${
                      isTableOpen !== true ? "w-4/5" : "w-full"
                    }`}
                  >
                    <thead>
                      <tr className='divide-x divide-white'>
                        <th className='px-2'>Serie ID</th>
                        <th className='px-2'>Título</th>
                        <th className='px-2'>Última fecha</th>
                        <th className='px-2'>Último valor</th>
                        <th className='px-2'>Unidad</th>
                        <th className='px-2'>Cambio porcentual (%)</th>
                        <th className='px-2'>Fecha Inicio</th>
                        <th className='px-2'>Fecha Fin</th>
                        <th className='px-2'>Periodicidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='divide-x divide-white'>
                        <td className='px-2'>SG73</td>
                        <td className='px-2'>Materiales y suministros</td>
                        <td className='px-2'>01/02/2021</td>
                        <td className='px-2'>2,104.1</td>
                        <td className='px-2'>Millones de Pesos</td>
                        <td className='px-2'>
                          <span className='text-green-600'>+</span>146.9%
                        </td>
                        <td className='px-2'>01/01/1977</td>
                        <td className='px-2'>01/04/2021</td>
                        <td className='px-2'>Mensual</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className={`w-full my-4 ${
                    isGraphicOpen !== true ? "block" : "hidden"
                  }`}
                >
                  <Graphic />
                </div>
                <div className=''></div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <SideTable className={"border border-white "} hidder={isTableOpen} />
        </div>
      </div>
    </section>
  );
};

export default analytics;
