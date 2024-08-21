import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

function TableCom() {
    const products = [
        { id: 1, amount: 2, name: 'Computer', price: '950 $' },
        { id: 2, amount: 1, name: 'Headset', price: '70 $' },
        { id: 3, amount: 1, name: 'TV', price: '550 $' },
        { id: 4, amount: 3, name: 'Chair', price: '250 $' },
    ]
    return (
        <div>
            <div className='ms-2 h4'>Table</div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow key={index}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.amount}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableCom