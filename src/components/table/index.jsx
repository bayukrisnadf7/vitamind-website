import React from "react"

export const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto mt-6 rounded-2xl shadow-md border border-slate-200">
      <table className="w-full text-sm text-left text-slate-700">
        {children}
      </table>
    </div>
  )
}

const Head = ({ children }) => (
  <thead className="bg-slate-100 text-black uppercase text-md font-bold">
    {children}
  </thead>
)

const Body = ({ children }) => (
  <tbody className="divide-y divide-slate-200">{children}</tbody>
)

const Row = ({ children }) => (
  <tr className="hover:bg-slate-50 transition-colors">{children}</tr>
)

const HeaderCell = ({ children }) => (
  <th className="px-4 py-4">{children}</th>
)

const Cell = ({ children, colSpan }) => (
  <td className="px-4 py-4" colSpan={colSpan}>
    {children}
  </td>
)

Table.Head = Head
Table.Body = Body
Table.Row = Row
Table.HeaderCell = HeaderCell
Table.Cell = Cell
