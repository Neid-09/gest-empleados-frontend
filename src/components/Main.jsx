import { Table } from "./Table";

export const Main = ({data, columns}) => {

    return (
        <main className="flex-grow flex w-full items-start justify-center bg-gray-500 p-4">
            <Table columns={columns} data={data} />
        </main>
    );
};