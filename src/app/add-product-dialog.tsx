import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createProduct } from "@/app/services/productService";

interface AddProductDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export function AddProductDialog({ isOpen, setIsOpen }: AddProductDialogProps) {
    const [productData, setProductData] = useState({
        name: '',
        unitMeasure: '',
        amount: 0,
        price: 0,
        perishable: false,
        expirationDate: '',
        dateManufacture: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setProductData(prev => ({ ...prev, [id]: value }));
    };

    const handleSave = async () => {
        try {
            await createProduct(productData);
            alert("Produto criado com sucesso!");
            setIsOpen(false);
        } catch (error) {
            console.error("Erro ao salvar produto:", error);
            alert("Erro ao criar produto");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="default">Adicionar Produto</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar Novo Produto</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right">
                            Nome
                        </label>
                        <Input id="name" value={productData.name} onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="unitMeasure" className="text-right">
                            Unidade de Medida
                        </label>
                        <Input id="unitMeasure" value={productData.unitMeasure} onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="amount" className="text-right">
                            Quantidade
                        </label>
                        <Input id="amount" value={productData.amount} onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="price" className="text-right">
                            Preço
                        </label>
                        <Input id="price" value={productData.price} onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="expirationDate" className="text-right">
                            Data de Validade
                        </label>
                        <Input id="expirationDate" value={productData.expirationDate} onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="dateManufacture" className="text-right">
                            Data de Fabricação
                        </label>
                        <Input id="dateManufacture" value={productData.dateManufacture} onChange={handleChange} className="col-span-3" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="mr-2">
                        Cancelar
                    </Button>
                    <Button type="button" onClick={handleSave}>
                        Salvar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
