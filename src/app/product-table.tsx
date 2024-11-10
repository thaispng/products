import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Product } from './page'
import { getPriority, formatDate } from './utils'

interface ProductTableProps {
    products: Product[]
}

export function ProductTable({ products }: ProductTableProps) {
    const handleEdit = (productId: string) => {
        console.log(`Editing product with ID: ${productId}`)
        // Implement edit functionality here
    }

    const handleDelete = (productId: string) => {
        console.log(`Deleting product with ID: ${productId}`)
        // Implement delete functionality here
    }

    return (
        <div className="border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">
                                <Checkbox />
                            </TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Preço</TableHead>
                            <TableHead>Quantidade</TableHead>
                            <TableHead>Unidade</TableHead>
                            <TableHead>Perecível</TableHead>
                            <TableHead>Data de Fabricação</TableHead>
                            <TableHead>Data de Expiração</TableHead>
                            <TableHead>Status</TableHead>
                            {/* <TableHead>Prioridade</TableHead> */}
                            <TableHead className="w-12"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => {
                            // const status = getStatus(product.amount)
                            const priority = getPriority(product.expirationDate)
                            return (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                                    <TableCell>{product.amount}</TableCell>
                                    <TableCell>{product.unitMeasurement}</TableCell>
                                    <TableCell>
                                        <Badge variant={product.perishable ? "default" : "secondary"}>
                                            {product.perishable ? 'Sim' : 'Não'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{formatDate(product.dateManufacture)}</TableCell>
                                    <TableCell>{formatDate(product.expirationDate)}</TableCell>
                                    {/* <TableCell>
                                        <div className="flex items-center gap-2">
                                            {status.icon}
                                            {status.label}
                                        </div>
                                    </TableCell> */}
                                    <TableCell>
                                        <Badge variant={priority === 'Alta' ? 'destructive' : priority === 'Média' ? 'secondary' : 'default'}>
                                            {priority}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Mais opções</span>
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-fit p-0">
                                                <div className="flex flex-col">
                                                    <Button
                                                        variant="ghost"
                                                        className="flex items-center justify-start m-1 hover:bg-muted"
                                                        onClick={() => handleEdit(product.id)}
                                                    >
                                                        <Pencil className="mr-1" />
                                                        Editar
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        className="flex items-center justify-start m-1 hover:bg-muted text-destructive hover:text-destructive"
                                                        onClick={() => handleDelete(product.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-1" />
                                                        Excluir
                                                    </Button>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}