import React from 'react'
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchInputProps {
    value: string
    onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <div className="relative flex-grow">
            <Input
                type="text"
                placeholder="Pesquisar produtos..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
    )
}