'use client'

import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProductList } from '@/app/services/productService'
import { ProductTable } from '@/app/product-table'
import { SearchInput } from '@/app/seach-input'
import { DateFilter } from '@/app/data-filter'
import { AddProductDialog } from '@/app/add-product-dialog'


export interface Product {
  id: string;
  name: string;
  price: number;
  amount: number;
  unitMeasurement: string;
  perishable: boolean;
  expirationDate: string;
  dateManufacture: string;
}

export default function ProductListPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { data, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ['productList'],
    queryFn: getProductList,
  })

  if (isLoading) return <div className="text-center py-4">Carregando...</div>
  if (error) return <div className="text-center py-4 text-red-500">Erro: {error.message}</div>

  const filteredProducts = data?.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!date || new Date(product.dateManufacture).toDateString() === date.toDateString())
  )

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Lista de Produtos</h1>
      <div className="mb-4 flex gap-4">
        <SearchInput value={searchTerm} onChange={setSearchTerm} />
        <DateFilter date={date} setDate={setDate} />
        <AddProductDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
      </div>
      {filteredProducts && filteredProducts.length > 0 ? (
        <ProductTable products={filteredProducts} />
      ) : (
        <p className="text-center py-4 text-muted-foreground">Nenhum produto encontrado.</p>
      )}
    </div>
  )
}