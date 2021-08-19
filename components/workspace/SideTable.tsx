import React from 'react'
import { ClassNameProps } from '../../interfaces/ClassNameProps';
import { SideTableProps } from '../../interfaces/SideTableProps';

export const SideTable = ({hidder, className}: SideTableProps & ClassNameProps) => {
    return (
      <article
        className={`flex-1 ${className} ${
          hidder !== true ? "hidden" : "block"
        }`}
      >
        <div className='flex flex-row flex-nowrap items-center p-2'>
          <i className=''>
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
          </i>
          <p className='mx-2 text-sm'>Materiales y suministros</p>
        </div>
        <div className='w-full'>
          <table className='w-full table-auto text-left px-12'>
            <thead className='bg-black text-sm border-b border-white '>
              <tr className='text-sm'>
                <th className='px-12'>Fecha</th>
                <th className='px-12'>Valor</th>
              </tr>
            </thead>
            <tbody className='text-xs  divide-y divide-light-blue-400'>
              <tr className='px-12'>
                <td className='px-12 py-1 '>02/01/2019</td>
                <td className='px-12 py-1 '>19.5878</td>
              </tr>
              <tr className=''>
                <td className='px-12 py-1 '>03/01/2019</td>
                <td className='px-12 py-1 '>19.6073</td>
              </tr>
              <tr>
                <td className='px-12 py-1 '>01/01/2019</td>
                <td className='px-12 py-1 '>6.8100</td>
              </tr>
              <tr>
                <td className='px-12 py-1 '>01/01/2019</td>
                <td className='px-12 py-1 '>6.8100</td>
              </tr>
              <tr>
                <td className='px-12 py-1 '>01/01/2019</td>
                <td className='px-12 py-1 '>6.8100</td>
              </tr>
              <tr>
                <td className='px-12 py-1 '>01/01/2019</td>
                <td className='px-12 py-1 '>6.8100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    );
}
