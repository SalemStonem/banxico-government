import { ChildrenProps } from "../../interfaces/Childen";

export const Dashboard = ({ children }: ChildrenProps) => {
  return <main className='bg-gray-800 w-full min-h-screen p-4 md:p-8'>{children}</main>;
};
